import React, { useCallback, ReactNode } from "react";
import { Modal as FabricModal } from "@fluentui/react/lib/Modal";
import { ContextualMenu } from "@fluentui/react/lib/ContextualMenu";
import { DashComponentProps, StyledComponentProps } from "../../props";

type Props = {
    /**
     * The children of this component
     */
    children: ReactNode;

    /**
     * Whether modal is currently open.
     */
    is_open: boolean;

    /**
     * Whether modal can be dragged.
     */
    is_draggable: boolean;

    /**
     * Whether the dialog can be light dismissed by clicking outside the dialog (on the overlay).
     */
    is_blocking: boolean;
} & DashComponentProps &
    StyledComponentProps;

const dragOptions = {
    moveMenuItemText: "Move",
    closeMenuItemText: "Close",
    menu: ContextualMenu,
};

/**
 * ## Overview
 *
 * Modals are temporary, modal UI overlay that generally provide contextual app information
 * or require user confirmation/input, or can be used to advertise new app features.
 * In some cases, Modals block interactions with the web page or application until being
 * explicitly dismissed. They can be used for lightweight creation or edit tasks and simple
 * management tasks, or for hosting heavier temporary content.
 *
 * For usage requiring a quick choice from the user, Dialog may be a more appropriate control.
 */
const Modal = (props: Props) => {
    const {
        is_open,
        is_draggable,
        is_blocking,
        children,
        class_name,
        style,
        setProps,
    } = props;

    const onDismiss = useCallback(() => {
        setProps({ is_open: !is_open });
    }, [is_open, setProps]);

    return (
        <FabricModal
            isOpen={is_open}
            isBlocking={is_blocking}
            styles={{ root: style }}
            onDismiss={onDismiss}
            containerClassName={class_name}
            dragOptions={is_draggable ? dragOptions : undefined}
        >
            {children}
        </FabricModal>
    );
};

Modal.defaultProps = {
    is_open: false,
    is_draggable: false,
    is_blocking: false,
};

export default Modal;
