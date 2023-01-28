import React, { useCallback, useState, useMemo } from "react";
import {
    Combobox as FluentComboBox,
    Option,
    ComboboxProps,
} from "@fluentui/react-components/unstable";
import { makeStyles, shorthands, useId } from "@fluentui/react-components";
import Fuse from "fuse.js";
import { DashComponentProps } from "../../props";

const useStyles = makeStyles({
    root: {
        // Stack the label above the field with a gap
        display: "grid",
        gridTemplateRows: "repeat(1fr)",
        justifyItems: "start",
        ...shorthands.gap("2px"),
        maxWidth: "400px",
    },
});

type Option = {
    /**
     * The Radio's label.
     */
    label: string;

    /**
     * The Radio's value.
     */
    value: string;

    /**
     * denotes if radio is disabled
     */
    disabled?: boolean;
};

type Props = {
    /**
     * A label to be displayed above the dropdown component.
     */
    label?: string;

    /**
     * The value of the input.
     */
    value?: string[];

    /**
     * If true, the user can select multiple values
     */
    multiselect?: boolean;

    /**
     * Choices to be displayed in the dropdown control.
     */
    options?: Option[];

    /**
     * A string value to be displayed if no item is selected.
     */
    placeholder?: string;

    /**
     * If true, the dropdown is disabled and can't be clicked on.
     */
    disabled?: boolean;

    /**
     * Controls the size of the combobox faceplate
     */
    size: "small" | "medium" | "large";

    /**
     * Controls the colors and borders of the combobox trigger.
     */
    appearance: "outline" | "underline" | "filled-darker" | "filled-lighter";

    freeform?: boolean;

    /**
     * Maximum number of results returned on search
     */
    search_max_results: number;
} & DashComponentProps;

const fuseOptions = {
    includeScore: true,
    keys: ["value", "label"],
};

/**
 * A combo box (Combobox) combines a text field and a dropdown giving people
 * a way to select an option from a list or enter their own choice.
 */
const ComboBox = (props: Props) => {
    const {
        id,
        key,
        label,
        options,
        setProps,
        disabled,
        value,
        search_max_results,
        ...otherProps
    } = props;
    const dropdownId = useId("dropdown-default");
    const styles = useStyles();
    const [matchingOptions, setMatchingOptions] = useState([...options]);
    const [customSearch, setCustomSearch] = useState<string | undefined>();

    const onChange: ComboboxProps['onChange'] = useMemo(() => {
        const fuse = new Fuse(options, fuseOptions);

        return (event) => {
            const value = event.target.value.trim();
            const matches = fuse
                .search(value, { limit: search_max_results || 10 })
                .map((res) => res.item);
            setMatchingOptions(matches);
            if (value.length && matches.length < 1) {
                setCustomSearch(value);
            } else {
                setCustomSearch(undefined);
            }
        };
    }, [options, search_max_results]);

    const onOptionSelect: ComboboxProps["onOptionSelect"] = useCallback(
        (_ev, data) => {
            if (!disabled && setProps) {
                const matchingOption = data.optionText && options.map((o) => o.label).includes(data.optionText);
                if (matchingOption) {
                    setCustomSearch(undefined);
                    setProps({ value: data.selectedOptions });
                } else {
                    setCustomSearch(data.optionText);
                    setProps({ value: [data.optionText, ...data.selectedOptions] });
                }
            }
        },
        [disabled, setProps]
    );

    return (
        <div id={id} key={key} className={styles.root}>
            {label && <label id={dropdownId}>{label}</label>}
            <FluentComboBox
                aria-labelledby={dropdownId}
                onOptionSelect={onOptionSelect}
                onChange={onChange}
                selectedOptions={value}
                {...otherProps}
            >
                {customSearch ? (
                    <Option key="freeform" text={customSearch}>
                        {customSearch}
                    </Option>
                ) : null}
                {matchingOptions.map((option) => (
                    <Option key={option.value} disabled={option.disabled}>
                        {option.label}
                    </Option>
                ))}
            </FluentComboBox>
        </div>
    );
};

ComboBox.defaultProps = {
    size: "medium",
    options: [],
    disabled: false,
    multiselect: false,
    appearance: "outline",
    search_max_results: 10,
};

export default ComboBox;
