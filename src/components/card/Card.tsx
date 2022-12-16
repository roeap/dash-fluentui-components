import React, { useCallback, useMemo, ReactNode } from "react";
import {
    MessageBar,
    MessageBarType,
    ProgressIndicator,
    Label,
    Stack,
    IStackTokens,
    FontSizes,
    FontWeights,
} from "@fluentui/react";
import { IMessageProps } from "../interfaces";
import {
    DashComponentProps,
    DashLoadingState,
    StyledComponentProps,
} from "../../props";

type Props = {
    /**
     * The children of this component.
     */
    children?: ReactNode;

    /**
     * Label to be displayed in the card header.
     */
    label?: string;

    /**
     * Minimum width of teh Card container
     */
    min_width?: string | number;

    /**
     * Maximum width of teh Card container
     */
    max_width?: string | number;

    /**
     * Minimum height of teh Card container
     */
    min_height?: string | number;

    /**
     * Properties controlling a message bar displayed at the top of the card.
     */
    message_props?: IMessageProps;

    /**
     * Denotes wether a loading bar should be displayed when content is loading.
     */
    show_loading?: boolean;

    /**
     * Object that holds the loading state object coming from dash-renderer
     */
    loading_state?: DashLoadingState;
} & DashComponentProps &
    StyledComponentProps;

const messagebarStyle = { position: "absolute", top: 0, left: 0, zIndex: 100 };
const headerStyle = {
    fontWeight: FontWeights.semibold,
    fontSize: FontSizes.mediumPlus,
};

const headerTokens: IStackTokens = { childrenGap: 5 };

export const Card = (props: Props) => {
    const {
        label,
        loading_state,
        min_width,
        max_width,
        min_height,
        message_props,
        children,
        setProps,
        show_loading,
    } = props;

    const isLoading = loading_state && loading_state.is_loading;

    const cardStyle = useMemo(
        () => ({
            height: "100%",
            margin: 0,
            width: "100%",
            maxWidth: max_width || "100vw",
            minHeight: min_height,
            minWidth: min_width,
        }),
        [min_width, min_height, max_width]
    );
    const cleanMessageProps = useMemo(
        () => ({
            show: message_props?.show || false,
            message: message_props?.message || "",
            status: message_props?.status
                ? MessageBarType[message_props.status]
                : MessageBarType.info,
        }),
        [message_props]
    );

    const handleDismiss = useCallback(() => {
        setProps({
            message_props: {
                ...cleanMessageProps,
                show: false,
                status: MessageBarType[cleanMessageProps.status],
            },
        });
    }, [cleanMessageProps, setProps]);

    return (
        <Stack style={cardStyle}>
            <Stack tokens={headerTokens}>
                {label ? <Label style={headerStyle}>{label}</Label> : undefined}
                {show_loading && (label || isLoading) ? (
                    <ProgressIndicator
                        percentComplete={isLoading ? undefined : 0}
                    />
                ) : undefined}
            </Stack>
            {message_props?.show && message_props?.message && (
                <Stack.Item styles={{ root: { position: "relative" } }}>
                    <MessageBar
                        // @ts-expect-error TODO
                        style={messagebarStyle}
                        messageBarType={message_props?.status}
                        onDismiss={handleDismiss}
                    >
                        {message_props.message}
                    </MessageBar>
                </Stack.Item>
            )}
            <Stack>{children}</Stack>
        </Stack>
    );
};

Card.defaultProps = {};

export default Card;
