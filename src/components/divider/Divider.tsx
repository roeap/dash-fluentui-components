import React, { ReactNode } from "react";
import { Divider as FluentDivider } from "@fluentui/react-components";
import { DashComponentProps } from "../../props";

type Props = {
    /**
     * The children of this component
     */
    children: ReactNode;

    /**
     * Where the content should be aligned in the separator.
     */
    align_content?: "start" | "center" | "end";

    /**
     * Whether the content should be aligned vertically.
     */
    vertical: boolean;

    /**
     * A divider can have one of the preset appearances. When not specified, the divider has its default appearance.
     */
    apperance?: "strong" | "brand" | "subtle" | "default";

    /**
     * Adds padding to the beginning and end of the divider.
     */
    inset?: boolean;
} & DashComponentProps;

/**
 * ## Overview
 *
 * A separator visually separates content into groups.
 *
 * You can render content in the separator by specifying the component's children.
 * The component's children can be plain text or a component like Icon. The content
 * is center-aligned by default.
 */
const Separator = (props: Props) => {
    const { children, align_content, ...otherProps } = props;

    return (
        <FluentDivider alignContent={align_content} {...otherProps}>
            {children}
        </FluentDivider>
    );
};

Separator.defaultProps = {
    align_content: "center",
    vertical: false,
};

export default Separator;
