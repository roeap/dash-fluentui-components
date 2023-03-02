import React, { FC } from "react";
import { CounterBadge as FluentCounterBadge } from "@fluentui/react-components";
import { DashComponentProps, StyledComponentProps } from "../../props";

type Props = {
    /**
     * Value displayed by the Badge
     */
    count?: number;

    icon?: JSX.Element;
    /**
     * A button can have its content and borders styled for greater emphasis or to be subtle.
     *
     *  - 'secondary' (default): Gives emphasis to the button in such a way that it indicates a secondary action.
     *  - 'primary': Emphasizes the button as a primary action.
     *  - 'outline': Removes background styling.
     *  - 'subtle': Minimizes emphasis to blend into the background until hovered or focused.
     *  - 'transparent': Removes background and border styling.
     */
    appearance?: "filled" | "ghost";
    /**
     * Disabled state of button
     */
    color?: "brand" | "danger" | "important" | "informative";
    /**
     * A Badge can be square, circular or rounded.
     */
    shape?: "circular" | "rounded";
    /**
     * A Badge can be of several preset sizes.
     */
    size?:
        | "small"
        | "tiny"
        | "extra-small"
        | "medium"
        | "large"
        | "extra-large";
    /**
     * A Badge can position the icon before or after the content.
     */
    icon_position?: "before" | "after";

    /**
     * If a dot should be displayed without the count
     */
    dot?: boolean;

    /**
     * Max number to be displayed
     */
    overflow_count?: number;

    /**
     * Max number to be displayed
     */
    show_zero?: boolean;
} & DashComponentProps &
    StyledComponentProps;

/**
 * A badge is a visual decoration for UI elements.
 */
const CounterBadge: FC<Props> = (props) => {
    const { children, class_name, overflow_count, show_zero, ...otherProps } =
        props;

    return (
        <FluentCounterBadge
            overflowCount={overflow_count}
            showZero={show_zero}
            className={class_name}
            {...otherProps}
        >
            {children}
        </FluentCounterBadge>
    );
};

CounterBadge.defaultProps = {
    count: 0,
    appearance: "filled",
    color: "brand",
    dot: false,
    shape: "circular",
    show_zero: false,
};

export default CounterBadge;
