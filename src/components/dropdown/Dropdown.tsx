import React, { useCallback } from "react";
import {
    Dropdown as FabricDropdown,
    Option,
    DropdownProps,
} from "@fluentui/react-components/unstable";
import { makeStyles, shorthands, useId } from "@fluentui/react-components";
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
     * The value of the input. If `multi` is false (the default)
     * then value is just a string that corresponds to the values
     * provided in the `options` property. If `multi` is true, then
     * multiple values can be selected at once, and `value` is an
     * array of items with values corresponding to those in the
     * `options` prop.
     */
    value?: string[];

    /**
     * If true, the user can select multiple values
     */
    multiselect?: boolean;

    /**
     * Choices to be displayed in the dropdown control. Each item mus have either
     * set of keys [`label`, `value`] or [`key`, `text`]. The former is available to
     * accept options consistent with Dash's build in Dropdown control, while the
     * latter keys are according to the underlying UI fabric component. Additionally,
     * a `disabled` and `icon` can be optionally passed. The `icon` property must correspond
     * to the name of a Fabric icon: https://developer.microsoft.com/en-us/fabric#/styles/web/icons
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
 * ## Overview
 *
 * A Dropdown is a list in which the selected item is always visible, and the others are visible
 * on demand by clicking a drop-down button. They are used to simplify the design and make a
 * choice within the UI. When closed, only the selected item is visible. When users click
 * the drop-down button, all the options become visible. To change the value, users open the
 * list and click another value or use the arrow keys (up and down) to select a new value.
 */
const Dropdown = (props: Props) => {
    const {
        id,
        key,
        multiselect,
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
        (_event, data) => {
            if (!disabled && setProps) {
                setProps({ value: data.selectedOptions });
            }
        },
        [disabled, setProps]
    );

    return (
        <div id={id} key={key} className={styles.root}>
            {label && <label id={dropdownId}>{label}</label>}
            <FabricDropdown
                aria-labelledby={dropdownId}
                multiselect={multiselect}
                onOptionSelect={onOptionSelect}
                selectedOptions={value}
                {...otherProps}
            >
                {options.map((option) => (
                    <Option key={option.value} disabled={option.disabled}>
                        {option.label}
                    </Option>
                ))}
            </FabricDropdown>
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
