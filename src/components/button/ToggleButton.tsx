import React, { ReactNode, useCallback } from "react";
import { ToggleButton as InnerToggleButton } from "@fluentui/react-components";
import { DashComponentProps, StyledComponentProps } from "../../props";

type Props = {
    /**
     * The children of this component.
     */
    children?: ReactNode;
    /**
     * A button can have its content and borders styled for greater emphasis or to be subtle.
     *
     *  - 'secondary' (default): Gives emphasis to the button in such a way that it indicates a secondary action.
     *  - 'primary': Emphasizes the button as a primary action.
     *  - 'outline': Removes background styling.
     *  - 'subtle': Minimizes emphasis to blend into the background until hovered or focused.
     *  - 'transparent': Removes background and border styling.
     */
    appearance?: "subtle" | "outline" | "secondary" | "primary" | "transparent";
    /**
     * Disabled state of button
     */
    disabled?: boolean;
    /**
     * A button can be rounded, circular, or square.
     */
    shape?: "circular" | "square" | "rounded";
    /**
     * A button supports different sizes.
     */
    size?: "small" | "medium" | "large";
    /**
     * An integer that represents the number of times
     * that this element has been clicked on.
     */
    checked?: boolean;
    n_clicks?: number;
} & DashComponentProps &
    StyledComponentProps;

/**
 * A button triggers an action or event when activated.
 *
 * ### Layout
 *
 *  - For dialog boxes and panels, where people are moving through a sequence of screens,
 *    right-align buttons with the container.
 *  - For single-page forms and focused tasks, left-align buttons with the container.
 *  - Always place the primary button on the left, the secondary button just to the right of it.
 *  - Show only one primary button that inherits theme color at rest state. If there are more
 *    than two buttons with equal priority, all buttons should have neutral backgrounds.
 *  - Don't use a button to navigate to another place; use a link instead. The exception
 *    is in a wizard where "Back" and "Next" buttons may be used.
 *  - Don't place the default focus on a button that destroys data. Instead, place the
 *    default focus on the button that performs the "safe act" and retains the content
 *    (such as "Save") or cancels the action (such as "Cancel").
 *
 * ### Content
 *
 * - Use sentence-style capitalization—only capitalize the first word.
 * - Make sure it's clear what will happen when people interact with the button.
 *   Be concise; usually a single verb is best. Include a noun if there is any room
 *   for interpretation about what the verb means. For example, "Delete folder" or "Create account".
 */
const ToggleButton = (props: Props) => {
    const {
        disabled,
        children,
        setProps,
        n_clicks,
        checked,
        class_name,
        ...otherProps
    } = props;

    const onClick = useCallback(() => {
        if (!disabled && setProps) {
            setProps({
                n_clicks: n_clicks + 1,
                checked: !checked,
            });
        }
    }, [n_clicks, setProps, disabled, checked]);

    return (
        <InnerToggleButton
            className={class_name}
            disabled={disabled}
            checked={checked}
            onClick={onClick}
            {...otherProps}
        >
            {children}
        </InnerToggleButton>
    );
};

ToggleButton.defaultProps = { n_clicks: 0, checked: false };

export default ToggleButton;
