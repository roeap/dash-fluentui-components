import React, { useCallback } from "react";
import { Textarea as InnerTextarea } from "@fluentui/react-components";
import { DashComponentProps } from "../../props";

type Props = {
    /**
     * Styling the Textarea should use
     */
    appearance?: "outline" | "filled-darker" | "filled-lighter";

    /**
     * Which direction the Textarea is allowed to be resized.
     */
    resize?: "none" | "both" | "horizontal" | "vertical";

    /**
     * Size of the Textarea.
     */
    size?: "small" | "medium" | "large";

    /**
     * The value of the Textarea.
     */
    value?: string;
} & DashComponentProps;

/**
 * Textarea allows the user to enter and edit multiline text.
 *
 * ### Do
 *
 * - Consider using Textarea with outline appearance. When the contrast ratio against
 *   the immediate surrounding color is less than 3:1, consider using outline styles
 *   which has a bottom border stroke. But please ensure the color of bottom border stroke
 *   has a sufficient contrast which is greater than 3 to 1 against the immediate surrounding.
 *
 * ### Don't
 *
 * - Don’t place Textarea on a surface which doesn't have a sufficient contrast.
 *   The colors adjacent to the input should have a sufficient contrast. Particularly,
 *   the color of input with filled darker and lighter styles needs to provide greater
 *   than 3 to 1 contrast ratio against the immediate surrounding color to pass accessibility
 *   requirements.
 */
const Textarea = (props: Props) => {
    const { setProps, ...otherProps } = props;

    const onChange = useCallback(
        (_ev, data) => {
            if (setProps) {
                setProps({
                    value: data.value,
                });
            }
        },
        [setProps]
    );

    return <InnerTextarea onChange={onChange} {...otherProps}></InnerTextarea>;
};

Textarea.defaultProps = {
    appearance: "outline",
    resize: "none",
    size: "medium",
};

export default Textarea;
