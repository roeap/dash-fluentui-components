import React, { useCallback } from "react";
import {
    Slider as FluentSlider,
    SliderProps,
} from "@fluentui/react-components";
import { Field } from "@fluentui/react-components/unstable";
import {
    DashComponentProps,
    StyledComponentProps,
    FieldComponentProps,
} from "../../props";

type Props = {
    /**
     * Description label of the Slider
     */
    label?: string;

    /**
     * The initial value of the Slider
     */
    value?: number;

    /**
     * The min value of the Slider
     */
    min: number;

    /**
     * The max value of the Slider
     */
    max: number;

    /**
     * The difference between the two adjacent values of the Slider
     */
    step?: number;

    /**
     * Optional flag to render the slider vertically. Defaults to rendering horizontal.
     */
    vertical?: boolean;

    /**
     * The size of the Slider.
     */
    size?: "small" | "medium";

    /**
     * Optional flag to render the Slider as disabled
     */
    disabled?: boolean;
} & DashComponentProps &
    StyledComponentProps &
    FieldComponentProps;

/**
 * A Slider represents an input that allows user to choose a value from within a specific range.
 */
const Slider = (props: Props) => {
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
        // slider props
        value,
        disabled,
        setProps,
        ...otherProps
    } = props;
    const onChange: SliderProps["onChange"] = useCallback(
        (_, data) => {
            if (!disabled && setProps) {
                setProps({ value: data.value });
            }
        },
        [disabled, setProps]
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
            <FluentSlider
                aria-valuetext={`Value is ${value}`}
                value={value}
                onChange={onChange}
                disabled={disabled}
                {...otherProps}
            />
        </Field>
    );
};

Slider.defaultProps = {
    vertical: false,
    disabled: false,
    size: "medium",
};

export default Slider;
