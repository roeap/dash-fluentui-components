import { MessageBarType } from "@fluentui/react";

export interface IMessageProps {
    /**
     * Display message
     */
    show: boolean;

    /**
     * Message t obe displayed
     */
    message: string;

    /**
     * The type of MessageBar to render.
     */
    status: MessageBarType;
}
