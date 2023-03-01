import React, { useCallback, FC } from "react";
import {
    Card as FluentCard,
    CardProps,
    CardHeader,
    CardFooter,
    CardPreview,
} from "@fluentui/react-components/unstable";
import {
    DashComponentProps,
    DashLoadingState,
    StyledComponentProps,
} from "../../props";

type Props = {
    /**
     * Sets the appearance of the card.
     * - "filled": The card will have a shadow, border and background color.
     * - "filled-alternative": This appearance is similar to filled, but the background color will be a little darker.
     * - "outline": This appearance is similar to filled, but the background color will be transparent and no shadow applied.
     * - "subtle": This appearance is similar to filled-alternative, but no border is applied.
     */
    appearance?: "filled" | "subtle" | "outline" | "filled-alternative";

    /**
     * Defines the orientation of the card.
     */
    orientation?: "horizontal" | "vertical";

    /**
     * Controls the card's border radius and padding between inner elements.
     */
    size?: "small" | "medium" | "large";

    /**
     * Defines the controlled selected state of the card.
     */
    selected?: boolean;

    /**
     * Denotes wether a loading bar should be displayed when content is loading.
     */
    show_loading?: boolean;

    /**
     * Object that holds the loading state object coming from dash-renderer
     */
    loading_state?: DashLoadingState;

    /**
     * Content displayed in card header
     */
    header?: JSX.Element;

    /**
     * Content displayed in card footer
     */
    footer?: JSX.Element;

    /**
     * Styles applied to header container
     */
    header_style?: object;

    /**
     * CSS class applied to header container
     */
    header_class?: string;

    /**
     * Styles applied to footer container
     */
    footer_style?: object;

    /**
     * CSS class applied to footer container
     */
    footer_class?: string;
} & DashComponentProps &
    StyledComponentProps;

/**
 * The Card component is a framework for organizing content within the confines of a container.
 * It's main function is to provide the scaffolding for hosting actions and content for a single topic within a card.
 */
export const Card: FC<Props> = (props) => {
    const {
        children,
        header,
        footer,
        class_name,
        header_class,
        header_style,
        footer_class,
        footer_style,
        setProps,
        ...otherProps
    } = props;

    const onSelectionChange: CardProps["onSelectionChange"] = useCallback(
        (_ev, data) => {
            if (setProps) {
                setProps({
                    selected: data.selected,
                });
            }
        },
        [setProps]
    );

    return (
        <FluentCard
            className={class_name}
            onSelectionChange={onSelectionChange}
            {...otherProps}
        >
            {header && (
                <CardHeader
                    header={header}
                    className={header_class}
                    style={header_style}
                />
            )}
            <CardPreview>{children}</CardPreview>
            {footer && (
                <CardFooter className={footer_class} style={footer_style}>
                    {footer}
                </CardFooter>
            )}
        </FluentCard>
    );
};

Card.defaultProps = {
    appearance: "filled",
    orientation: "vertical",
    size: "medium",
};

export default Card;
