import * as React from "react";
import { Toggle as FabricToggle } from "@fluentui/react/lib/Toggle";
import { DashComponentProps, StyledComponentProps } from "../../props";

type Props = {
    /**
     * A label to be displayed along with the toggle component.
     */
    label: string;

    /**
     * Checked state of the toggle
     */
    toggled: boolean;

    /**
     * Text to display when toggle is ON. Caution: when not providing
     * on/off text user may get confused in differentiating the on/off
     * states of the toggle. Defaults to `on`.
     */
    on_text: string;

    /**
     * Text to display when toggle is OOF. Caution: when not providing
     * on/off text user may get confused in differentiating the on/off
     * states of the toggle. Defaults to `off`.
     */
    off_text: string;

    /**
     * If true, the toggle is disabled and can't be clicked on.
     */
    disabled: boolean;

    /**
     * Whether the label (not the onText/offText) should be positioned
     * inline with the toggle control. Left (right in RTL) side when on/off
     * text provided VS right (left in RTL) side when no on/off text.
     */
    inline_label: boolean;
} & DashComponentProps &
    StyledComponentProps;

/**
 * ## Overview
 *
 * Toggles represent a physical switch that allows users to turn things on or off.
 * Use Toggles to present users with two mutually exclusive options (like on/off),
 * where choosing an option results in an immediate action. Use a Toggle for binary
 * operations that take effect right after the user flips the Toggle. For example,
 * use a Toggle to turn services or hardware components on or off. In other words,
 * if a physical switch would work for the action, a Toggle is probably the best control to use.
 *
 * ### Choosing between Toggle and Checkbox
 *
 * For some actions, either a Toggle or a Checkbox might work. To decide which control
 * would work better, follow these tips:
 *
 * - Use a Toggle for binary settings when changes become effective immediately after the user changes them.
 * - In the above example, it's clear with the Toggle that the wireless is set to "On." But with the Checkbox, the user needs to think about whether the wireless is on now or whether they need to check the box to turn wireless on.
 * - Use a Checkbox when the user has to perform extra steps for changes to be effective. For example, if the user must click a "Submit", "Next", "Ok" button to apply changes, use a Checkbox.
 */
const Toggle = (props: Props) => {
    return (
        <FabricToggle
            label={props.label}
            checked={props.toggled}
            onText={props.on_text}
            offText={props.off_text}
            inlineLabel={props.inline_label}
            disabled={props.disabled}
            onChange={(event, checked) => {
                props.setProps({ toggled: checked });
            }}
        />
    );
};

Toggle.defaultProps = {
    label: "",
    toggled: false,
    on_text: "On",
    off_text: "Off",
    inline_label: false,
    disabled: false,
};

export default Toggle;
