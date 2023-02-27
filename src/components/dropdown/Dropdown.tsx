import React, { useCallback } from "react";
import {
    Dropdown as FluentDropdown,
    Option,
    DropdownProps,
} from "@fluentui/react-components";
import { Field } from "@fluentui/react-components/unstable";
import { DashComponentProps, FieldComponentProps } from "../../props";

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
} & DashComponentProps &
    FieldComponentProps;

/**
 * A Dropdown is a selection component composed of a button and a list of options.
 * The button displays the current selected item or a placeholder, and the list is
 * visible on demand by clicking the button. Dropdowns are typically used in forms.
 */
const Dropdown = (props: Props) => {
    const {
        // field props
        id,
        key,
        label,
        validation_message,
        orientation,
        validation_state,
        required,
        label_size,
        // dropdown props
        options,
        setProps,
        disabled,
        value,
        ...otherProps
    } = props;
    const onOptionSelect: DropdownProps["onOptionSelect"] = useCallback(
        (_ev, data) => {
            if (!disabled && setProps) {
                setProps({ value: data.selectedOptions });
            }
        },
        [disabled, setProps]
    );

    return (
        <Field
            key={key}
            label={label}
            size={label_size}
            required={required}
            validationMessage={validation_message}
            validationState={validation_state}
            orientation={orientation}
        >
            <FluentDropdown
                id={id}
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
        </Field>
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
