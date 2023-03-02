import React, { useCallback } from "react";
import { Checkbox as FluentCheckbox } from "@fluentui/react-components";
import { Field } from "@fluentui/react-components/unstable";
import {
    DashComponentProps,
    StyledComponentProps,
    FieldComponentProps,
} from "../../props";

type Props = {
    /**
     * Checked state.
     */
    checked?: boolean | "mixed";

    /**
     * Disabled state of button
     */
    disabled?: boolean;

    /**
     * Label to display next to the checkbox.
     */
    label?: string;

    /**
     * The position of the label relative to the checkbox indicator.
     */
    label_position?: "before" | "after";

    /**
     * The shape of the checkbox indicator.
     *
     * The circular variant is only recommended to be used in a tasks-style UI (checklist),
     * since it otherwise could be confused for a RadioItem.
     */
    shape?: "circular" | "square";

    /**
     * The size of the checkbox indicator.
     */
    size?: "medium" | "large";
} & DashComponentProps &
    StyledComponentProps &
    FieldComponentProps;

/**
 * Checkboxes give people a way to select one or more items from a group,
 * or switch between two mutually exclusive options (checked or unchecked).
 */
const Checkbox = (props: Props) => {
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
        disabled,
        label_position,
        setProps,
        ...otherProps
    } = props;

    const onChange = useCallback(
        (_ev, data) => {
            if (!disabled && setProps) {
                setProps({
                    checked: data.checked,
                });
            }
        },
        [setProps, disabled]
    );

    return (
        <Field
            id={id}
            key={key}
            label={label}
            size={label_size}
            required={required}
            validationMessage={validation_message}
            validationState={validation_state}
            orientation={orientation}
        >
            <FluentCheckbox
                disabled={disabled}
                labelPosition={label_position}
                onChange={onChange}
                {...otherProps}
            />
        </Field>
    );
};

Checkbox.defaultProps = {
    checked: false,
    disabled: false,
    label: "Checkbox",
    label_position: "after",
    shape: "square",
    size: "medium",
};

export default Checkbox;
