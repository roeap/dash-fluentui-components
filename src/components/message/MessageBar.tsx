import * as React from "react";
import {
    MessageBar as FMessageBar,
    MessageBarType,
} from "@fluentui/react/lib/MessageBar";
import { DashComponentProps, StyledComponentProps } from "../../props";

type Props = {
    /**
     * The message to display in the message bar.
     */
    message: string;

    /**
     * The severity of the message bar. Available options are:
     * 'default', 'blocked', 'error', 'warning', 'success'
     */
    status: "default" | "blocked" | "error" | "warning" | "success";

    /**
     * DEnotes wether the MessageBar should be visible or not.
     */
    show: boolean;

    /**
     * Denotes if the MessageBar contains multi-line text.
     */
    is_multiline: boolean;
} & DashComponentProps &
    StyledComponentProps;

const msgBarTypeMap = {
    default: MessageBarType.info,
    blocked: MessageBarType.blocked,
    error: MessageBarType.error,
    warning: MessageBarType.warning,
    success: MessageBarType.success,
};

/**
 * A MessageBar is an area at the top of a primary view that displays relevant status information.
 * You can use a MessageBar to tell the user about a situation that does not require their immediate
 * attention and therefore does not need to block other activities.
 */
const MessageBar = (props: Props) => {
    const { show, message } = props;
    const onDismiss = () => {
        props.setProps({ show: false });
    };
    return (
        <FMessageBar
            messageBarType={msgBarTypeMap[props.status]}
            isMultiline={props.is_multiline}
            styles={{ root: { display: show ? "block" : "none" } }}
            onDismiss={onDismiss}
        >
            {message}
        </FMessageBar>
    );
};

MessageBar.defaultProps = {
    is_multiline: false,
    status: "default",
    message: "",
    show: false,
};

export default MessageBar;
