import * as React from "react";
import { Slider as FabricSlider } from "@fluentui/react/lib/Slider";
import { DashComponentProps, StyledComponentProps } from "../../props";

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
     * Whether to show the value on the right (bottom) of the Slider.
     */
    show_value?: boolean;

    /**
     * Optional flag to attach the origin of slider to zero. Helpful when the range include negatives.
     */
    origin_from_zero?: boolean;

    /**
     * Optional suffix to attach to displayed slider value. Useful for showing units of measurement.
     */
    suffix?: string;

    /**
     * Optional flag to render the Slider as disabled
     */
    disabled?: boolean;
} & DashComponentProps &
    StyledComponentProps;

/**
 * A Slider is an element used to set a value. It provides a visual indication of adjustable
 * content, as well as the current setting in the total range of content. It is displayed as
 * a horizontal track with options on either side. A knob or lever is dragged to one end or
 * the other to make the choice, indicating the current value. Marks on the Slider bar can
 * show values and users can choose where they want to drag the knob or lever to set the value.
 *
 * A Slider is a good choice when you know that users think of the value as a relative quantity,
 * not a numeric value. For example, users think about setting their audio volume to low or
 * medium - not about setting the value to two or five.
 */
const Slider = (props: Props) => {
    const _onChange = (newValue) => {
        props.setProps({ value: newValue });
    };

    return (
        <FabricSlider
            label={props.label}
            min={props.min}
            max={props.max}
            step={props.step}
            disabled={props.disabled}
            vertical={props.vertical}
            value={props.value}
            onChange={_onChange}
            styles={{ root: props.style }}
            showValue={props.show_value}
            originFromZero={props.origin_from_zero}
            valueFormat={
                props.suffix ? (value) => `${value} ${props.suffix}` : undefined
            }
        />
    );
};

Slider.defaultProps = {
    vertical: false,
    disabled: false,
    show_value: true,
};

export default Slider;
