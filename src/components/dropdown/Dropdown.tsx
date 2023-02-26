import React, { useCallback } from "react";
import {
    Dropdown as FluentDropdown,
    Option,
    DropdownProps,
    makeStyles,
    shorthands,
    useId,
} from "@fluentui/react-components";
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
} & DashComponentProps;

/**
 * A Dropdown is a selection component composed of a button and a list of options.
 * The button displays the current selected item or a placeholder, and the list is
 * visible on demand by clicking the button. Dropdowns are typically used in forms.
 */
const Dropdown = (props: Props) => {
    const {
        id,
        key,
        label,
        options,
        setProps,
        disabled,
        value,
        ...otherProps
    } = props;
    const dropdownId = useId("dropdown-default");
    const styles = useStyles();

    const onOptionSelect: DropdownProps["onOptionSelect"] = useCallback(
        (_ev, data) => {
            if (!disabled && setProps) {
                setProps({ value: data.selectedOptions });
            }
        },
        [disabled, setProps]
    );

    return (
        <div id={id} key={key} className={styles.root}>
            {label && <label id={dropdownId}>{label}</label>}
            <FluentDropdown
                aria-labelledby={dropdownId}
                onOptionSelect={onOptionSelect}
                selectedOptions={value}
                {...otherProps}
            >
                {options.map((option) => (
                    <Option key={option.value} disabled={option.disabled}>
                        {option.label}
                    </Option>
                ))}
            </FluentDropdown>
        </div>
    );
};

Dropdown.defaultProps = {
    size: "medium",
    options: [],
    disabled: false,
    multiselect: false,
    appearance: "outline",
};

export default Dropdown;
