import React, { useCallback } from "react";
import {
    Switch as FluentSwitch,
    SwitchProps,
} from "@fluentui/react-components";
import { DashComponentProps } from "../../props";

type Props = {
    /**
     * A label to be displayed along with the toggle component.
     */
    label: string;

    /**
     * Checked state of the toggle
     */
    checked: boolean;

    /**
     * The position of the label relative to the Switch.
     */
    label_postion: "before" | "after" | "above";

    /**
     * If true, the switch is disabled and can't be clicked on.
     */
    disabled: boolean;
} & DashComponentProps;

/**
 * A switch represents a physical switch that allows someone to choose between two mutually exclusive options.
 * For example, "On/Off" and "Show/Hide". Choosing an option should produce an immediate result.
 */
const Switch = (props: Props) => {
    const { label_postion, disabled, setProps, ...otherProps } = props;

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
        <FluentSwitch
            label={props.label}
            disabled={props.disabled}
            labelPosition={label_postion}
            onChange={onChange}
            {...otherProps}
        />
    );
};

Switch.defaultProps = {
    label: "",
    checked: false,
    disabled: false,
};

export default Switch;
