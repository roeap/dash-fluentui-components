import React, { ReactNode, useCallback } from "react";
import {
    Dialog as InnerDialog,
    DialogTitle,
    DialogBody,
    DialogSurface,
    DialogContent,
    DialogActions,
    DialogTrigger,
    DialogProps,
} from "@fluentui/react-components";
import { DashComponentProps } from "../../props";

type Props = {
    /**
     * Can contain two children including {@link DialogTrigger} and {@link DialogSurface}.
     * Alternatively can only contain {@link DialogSurface} if using trigger outside dialog, or controlling state
     */
    children?: ReactNode;

    /**
     * Title displayed in the Dialog header
     */
    title?: ReactNode;

    /**
     * Usually a button component o.a. If the state is not controlled (externally managed), clicking
     * this component will open the dialog. This component will also be rendered when the dialog is not open.
     */
    trigger?: JSX.Element;

    /**
     * Additional components - often buttons for invoking actions - that are rendered in the Dialog footer.
     */
    actions?: ReactNode;

    trigger_action?: JSX.Element;

    /**
     * Dialog variations.
     *
     * - `modal`: When this type of dialog is open, the rest of the page is dimmed out and cannot be interacted with.
     *   The tab sequence is kept within the dialog and moving the focus outside the dialog will imply closing it.
     *   This is the default type of the component.
     * - `non-modal`: When a non-modal dialog is open, the rest of the page is not dimmed out and users can interact
     *   with the rest of the page. This also implies that the tab focus can move outside the dialog when it reaches
     *   the last focusable element.
     * - `alert`: is a special type of modal dialogs that interrupts the user's workflow to communicate an important
     *   message or ask for a decision. Unlike a typical modal dialog, the user must take an action through the
     *   options given to dismiss the dialog, and it cannot be dismissed through the dimmed background or escape key.
     */
    modal_type?: "alert" | "modal" | "non-modal";

    /**
     * Controls the open state of the dialog
     */
    open?: boolean;
} & DashComponentProps;

/**
 * `Dialog` is a window overlaid on either the primary window or another dialog window. Windows
 * under a modal dialog are inert. That is, users cannot interact with content outside an active
 * dialog window. Inert content outside an active dialog is typically visually obscured or
 * dimmed so it is difficult to discern, and in some implementations, attempts to interact
 * with the inert content cause the dialog to close.
 *
 * ### Do
 *
 * - Dialog boxes consist of a header (`DialogTitle`), content (`DialogSurface`), and footer (`DialogActions`),
 *   which should all be included inside a body (DialogBody).
 * - Validate that people’s entries are acceptable before closing the dialog. Show an inline validation error
 *   near the field they must correct.
 * - Modal dialogs should be used very sparingly—only when it’s critical that people make a choice or provide
 *   information before they can proceed. Thee dialogs are generally used for irreversible or potentially
 *   destructive tasks. They’re typically paired with an backdrop without a light dismiss.
 * - Add a aria-describedby attribute on DialogSurface pointing to the dialog content on short confirmation like dialogs.
 *
 * ### Don't
 *
 * - Don't use more than three buttons between `DialogActions`.
 * - Don't open a `Dialog` from a `Dialog`
 * - Don't use a `Dialog` with no focusable elements
 */
export const Dialog = (props: Props) => {
    const {
        children,
        actions,
        modal_type,
        open,
        title,
        trigger_action,
        trigger,
        setProps,
    } = props;
    const onOpenChange: DialogProps["onOpenChange"] = useCallback(
        (_ev, data) => {
            if (setProps) {
                setProps({ open: data.open });
            }
        },
        [setProps]
    );

    return (
        <InnerDialog
            modalType={modal_type}
            open={open}
            onOpenChange={onOpenChange}
        >
            {trigger && <DialogTrigger>{trigger}</DialogTrigger>}
            <DialogSurface>
                <DialogBody>
                    {title && <DialogTitle>{title}</DialogTitle>}
                    <DialogContent>{children}</DialogContent>
                </DialogBody>
                {(actions || trigger_action) && (
                    <DialogActions>
                        {trigger_action && (
                            <DialogTrigger>{trigger_action}</DialogTrigger>
                        )}
                        {actions}
                    </DialogActions>
                )}
            </DialogSurface>
        </InnerDialog>
    );
};

Dialog.defaultProps = { modal_type: "modal", open: false };

export default Dialog;
