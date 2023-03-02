import React, { FC } from "react";
import { Badge as FluentBadge } from "@fluentui/react-components";
import { DashComponentProps, StyledComponentProps } from "../../props";

type Props = {
    /**
     * A button can have its content and borders styled for greater emphasis or to be subtle.
     *
     *  - 'secondary' (default): Gives emphasis to the button in such a way that it indicates a secondary action.
     *  - 'primary': Emphasizes the button as a primary action.
     *  - 'outline': Removes background styling.
     *  - 'subtle': Minimizes emphasis to blend into the background until hovered or focused.
     *  - 'transparent': Removes background and border styling.
     */
    appearance?: "filled" | "ghost" | "outline" | "tint";
    /**
     * Disabled state of button
     */
    color?:
        | "brand"
        | "danger"
        | "important"
        | "informative"
        | "severe"
        | "subtle"
        | "success"
        | "warning";
    /**
     * A Badge can be square, circular or rounded.
     */
    shape?: "circular" | "square" | "rounded";
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
} & DashComponentProps &
    StyledComponentProps;

/**
 * A badge is a visual decoration for UI elements.
 */
const Badge: FC<Props> = (props) => {
    const { children, class_name, ...otherProps } = props;

    return (
        <FluentBadge className={class_name} {...otherProps}>
            {children}
        </FluentBadge>
    );
};

export default Badge;
