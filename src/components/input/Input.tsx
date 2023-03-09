import React, { useCallback } from "react";
import { Input as InnerInput, InputProps } from "@fluentui/react-components";
import { Field } from "@fluentui/react-components/unstable";
import { DashComponentProps, FieldComponentProps } from "../../props";

type Props = {
    /**
     * Controls the colors and borders of the input.
     */
    appearance?:
        | "outline"
        | "underline"
        | "filled-darker"
        | "filled-lighter"
        | "filled-darker-shadow"
        | "filled-lighter-shadow";

    /**
     * An input can have different text-based types based on the type of value the user will enter.
     */
    type?:
        | "number"
        | "time"
        | "text"
        | "search"
        | "tel"
        | "url"
        | "email"
        | "date"
        | "datetime-local"
        | "month"
        | "password";

    /**
     * Size of the input (changes the font size and spacing).
     */
    size?: "small" | "medium" | "large";

    /**
     * Current value of the input.
     */
    value?: string;

    /**
     * Placeholder text for the input.
     */
    placeholder?: string;

    /**
     * Element before the input text, within the input border
     */
    content_before?: JSX.Element;

    /**
     * Element after the input text, within the input border
     */
    content_after?: JSX.Element;
} & DashComponentProps &
    FieldComponentProps;

/**
 * Input allows the user to enter and edit text.
 */
const Input = (props: Props) => {
    const {
        // field props
        id,
        key,
        label,
        validation_message,
        orientation,
        validation_state,
        required,
        label_size,
        content_after,
        content_before,
        setProps,
        ...otherProps
    } = props;

    const onChange: InputProps["onChange"] = useCallback(
        (_ev, data) => {
            if (setProps) {
                setProps({
                    value: data.value,
                });
            }
        },
        [setProps]
    );

    return (
        <Field
            id={id}
            key={key}
            label={label}
            size={label_size}
            required={required}
            validationMessage={validation_message}
            validationState={validation_state}
            orientation={orientation}
        >
            <InnerInput
                onChange={onChange}
                contentAfter={content_after}
                contentBefore={content_before}
                {...otherProps}
            ></InnerInput>
        </Field>
    );
};

Input.defaultProps = {};

export default Input;
