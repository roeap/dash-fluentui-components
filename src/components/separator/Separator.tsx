import React, { ReactNode } from "react";
import { Separator as FabricSeparator } from "@fluentui/react/lib/Separator";
import { DashComponentProps, StyledComponentProps } from "../../props";

type Props = {
    /**
     * The children of this component
     */
    children: ReactNode;

    /**
     * Where the content should be aligned in the separator.
     */
    align_content: "start" | "center" | "end";

    /**
     * Whether the content should be aligned vertically.
     */
    vertical: boolean;
} & DashComponentProps &
    StyledComponentProps;

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
    const { children, align_content, style, vertical } = props;

    return (
        <FabricSeparator
            alignContent={align_content}
            vertical={vertical}
            styles={{ root: style }}
        >
            {children}
        </FabricSeparator>
    );
};

Separator.defaultProps = {
    align_content: "center",
    vertical: false,
};

export default Separator;
