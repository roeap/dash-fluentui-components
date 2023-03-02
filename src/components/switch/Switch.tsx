import React, { useCallback } from "react";
import {
    Switch as FluentSwitch,
    SwitchProps,
} from "@fluentui/react-components";
import { Field } from "@fluentui/react-components/unstable";
import { DashComponentProps, FieldComponentProps } from "../../props";

type Props = {
    /**
     * A label to be displayed along with the toggle component.
     */
    label?: string;

    /**
     * Checked state of the toggle
     */
    checked?: boolean;

    /**
     * The position of the label relative to the Switch.
     */
    label_postion?: "before" | "after" | "above";

    /**
     * If true, the switch is disabled and can't be clicked on.
     */
    disabled?: boolean;
} & DashComponentProps &
    FieldComponentProps;

/**
 * A switch represents a physical switch that allows someone to choose between two mutually exclusive options.
 * For example, "On/Off" and "Show/Hide". Choosing an option should produce an immediate result.
 */
const Switch = (props: Props) => {
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
        label_postion,
        disabled,
        setProps,
        ...otherProps
    } = props;

    const onChange: SwitchProps["onChange"] = useCallback(
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
            <FluentSwitch
                disabled={disabled}
                labelPosition={label_postion}
                onChange={onChange}
                {...otherProps}
            />
        </Field>
    );
};

Switch.defaultProps = {
    label: "",
    checked: false,
    disabled: false,
};

export default Switch;
