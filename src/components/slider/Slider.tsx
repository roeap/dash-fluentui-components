import React, { useCallback } from "react";
import {
    Slider as FluentSlider,
    useId,
    Label,
    SliderProps,
    makeStyles,
    shorthands,
} from "@fluentui/react-components";
import { DashComponentProps, StyledComponentProps } from "../../props";

const useStyles = makeStyles({
    root: {
        // Stack the label above the field with a gap
        display: "grid",
        gridTemplateRows: "repeat(1fr)",
        justifyItems: "start",
        ...shorthands.gap("2px"),
    },
});

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
    StyledComponentProps;

/**
 * A Slider represents an input that allows user to choose a value from within a specific range.
 */
const Slider = (props: Props) => {
    const { id, key, value, label, disabled, setProps, ...otherProps } = props;
    const sliderId = useId();
    const styles = useStyles();
    const onChange: SliderProps["onChange"] = useCallback(
        (_, data) => {
            if (!disabled && setProps) {
                setProps({ value: data.value });
            }
        },
        [disabled, setProps]
    );

    return (
        <div id={id} key={key} className={styles.root}>
            {label && <Label htmlFor={sliderId}>{label}</Label>}
            <FluentSlider
                aria-valuetext={`Value is ${value}`}
                value={value}
                onChange={onChange}
                id={sliderId}
                disabled={disabled}
                {...otherProps}
            />
        </div>
    );
};

Slider.defaultProps = {
    vertical: false,
    disabled: false,
    size: "medium",
};

export default Slider;
