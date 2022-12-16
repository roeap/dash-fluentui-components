import React, { ReactNode } from "react";
import { Panel as FabricPanel, PanelType } from "@fluentui/react/lib/Panel";
import { DashComponentProps, StyledComponentProps } from "../../props";

type Props = {
    /**
     * The content of the panel
     */
    children: ReactNode;

    /**
     * Type of the panel determines its size
     */
    type: "small" | "medium" | "large";

    /**
     * Whether the panel is displayed. If true, will cause panel to stay open even if dismissed.
     * If false, will cause panel to stay hidden. If undefined, will allow the panel to control
     * its own visibility through open/dismiss methods.
     */
    is_open: boolean;

    /**
     * Text inside the button to trigger the panel
     */
    label: string;

    /**
     * Header text for the Panel.
     */
    header_text: string;

    /**
     * Whether the panel can be light dismissed by clicking outside the panel
     */
    light_dismiss: boolean;
} & DashComponentProps &
    StyledComponentProps;

const panelTypeMap = {
    small: String(PanelType.smallFixedFar),
    medium: String(PanelType.medium),
    large: String(PanelType.large),
};

/**
 * ## Overview
 *
 * Panels are modal UI overlays that provide contextual app information. They often
 * request some kind of creation or management action from the user. Panels are paired
 * with the Overlay component, also known as a Light Dismiss. The Overlay blocks
 * interactions with the app view until dismissed either through clicking or tapping
 * on the Overlay or by selecting a close or completion action within the Panel.
 *
 * ### Examples of experiences that use Panels
 *
 * - Member or group list creation or management
 * - Document list creation or management
 * - Permissions creation or management
 * - Settings creation or management
 * - Multi-field forms
 */
const Panel = (props: Props) => {
    const _onDismissed = () => {
        props.setProps({ is_open: false });
    };

    return (
        <FabricPanel
            isLightDismiss={props.light_dismiss}
            isOpen={props.is_open}
            onDismiss={_onDismissed}
            closeButtonAriaLabel="Close"
            headerText={props.header_text}
            type={Number(panelTypeMap[props.type])}
        >
            {props.children}
        </FabricPanel>
    );
};

Panel.defaultProps = {
    label: "Open panel",
    light_dismiss: false,
    header_text: "",
    type: "small",
};

export default Panel;
