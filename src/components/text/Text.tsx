import React, { ReactNode } from "react";
import { Text as InnerText } from "@fluentui/react-components";
import { omit } from "ramda";
import { DashComponentProps, StyledComponentProps } from "../../props";

type Props = {
    /**
     * The children of this component
     */
    children?: ReactNode;

    /**
     * Aligns text based on the parent container.
     */
    align?: "center" | "start" | "end" | "justify";

    /**
     * Applies a block display for the content.
     */
    block?: boolean;

    /**
     * Applies the italic font style to the content.
     */
    italic?: boolean;

    /**
     * Applies font size and line height based on the theme tokens.
     */
    size?: 100 | 200 | 300 | 400 | 500 | 600 | 700 | 800 | 900 | 1000;

    /**
     * Applies the strikethrough text decoration to the content.
     */
    strikethrough?: boolean;

    /**
     * Truncate overflowing text for block displays.
     */
    truncate?: boolean;

    /**
     * Applies the underline text decoration to the content.
     */
    underline?: boolean;

    /**
     * Applies font weight to the content.
     */
    weight?: "medium" | "regular" | "semibold" | "bold";

    /**
     * Applies the underline text decoration to the content.
     */
    wrap?: boolean;
} & DashComponentProps &
    StyledComponentProps;

/**
 * Typography and styling abstraction component used to ensure
 * consistency and standardize text throughout your application.
 *
 * ### Do
 *
 * - Use Text whenever you need to display stylized text
 * - Use Text to display read-only text
 */
const Text = (props: Props) => {
    const { children, ...otherProps } = props;

    return (
        <InnerText {...omit(["setProps"], otherProps)}>{children}</InnerText>
    );
};

Text.defaultProps = {
    align: "start",
    block: false,
    font: "base",
    italic: false,
    size: 300,
    strikethrough: false,
    truncate: false,
    underline: false,
    weight: "regular",
    wrap: true,
};

export default Text;
