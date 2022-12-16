import React, { ReactNode } from "react";
import { Label as InnerLabel } from "@fluentui/react-components";
import { DashComponentProps, StyledComponentProps } from "../../props";
import { omit } from "ramda";

type Props = {
    children: ReactNode;

    /**
     * Renders the label as disabled
     */
    disabled?: boolean;

    /**
     * Displays an indicator that the label is for a required field.
     */
    required?: boolean;
    /**
     * A label supports different sizes.
     */
    size?: "small" | "medium" | "large";
    /**
     * 	A label supports regular and semibold fontweight.
     */
    weight?: "regular" | "semibold";
} & DashComponentProps &
    StyledComponentProps;

/**
 * A label provides a name or title for an input.
 */
const Label = (props: Props) => {
    const { style, class_name, children, disabled, required, ...otherProps } =
        props;
    return (
        <InnerLabel
            className={class_name}
            style={style}
            disabled={disabled}
            required={required}
            {...omit(["setProps"], otherProps)}
        >
            {children}
        </InnerLabel>
    );
};

Label.defaultProps = {
    size: "medium",
    weight: "regular",
    required: false,
    disabled: false,
};

export default Label;
