import React, { useCallback } from "react";
import {
    RadioGroup as FluentRadioGroup,
    Label,
    useId,
    makeStyles,
    tokens,
    Radio,
    RadioGroupProps,
} from "@fluentui/react-components";
import { DashComponentProps } from "../../props";

const useStyles = makeStyles({
    field: {
        display: "grid",
        gridRowGap: tokens.spacingVerticalS,
    },
});

type Option = {
    /**
     * The Radio's label.
     */
    label: string;

    /**
     * The Radio's value.
     */
    value: string;

    /**
     * denotes if radio is disabled
     */
    disabled?: boolean;
};

type Props = {
    /**
     * A label to be displayed above the RadioGroup component.
     */
    label?: string;

    /**
     * The value of the input corresponds to the values provided in the `options` property.
     */
    value?: string;

    /**
     * Configuration for individual choices within the radio group
     */
    options: Option[];

    /**
     * How the radio items are laid out in the group.
     */
    layout: "horizontal" | "vertical" | "horizontal-stacked";

    /**
     * Disable all Radio items in this group.
     */
    disabled: boolean;

    /**
     * Require a selection in this group.
     */
    required: boolean;
} & DashComponentProps;

/**
 * RadioGroup lets people select a single option from two or more Radio items.
 * Use RadioGroup to present all available choices if there's enough space.
 * For more than 5 choices, consider using a different component such as Dropdown.
 */
const RadioGroup = (props: Props) => {
    const styles = useStyles();
    const labelId = useId("label");
    const { id, key, disabled, label, options, setProps, ...otherProps } =
        props;

    const onChange: RadioGroupProps["onChange"] = useCallback(
        (_ev, data) => {
            if (!disabled && setProps) {
                setProps({
                    value: data.value,
                });
            }
        },
        [setProps, disabled]
    );

    return (
        <div id={id} key={key} className={styles.field}>
            {label && <Label id={labelId}>{label}</Label>}
            <FluentRadioGroup
                {...otherProps}
                disabled={disabled}
                aria-labelledby={labelId}
                onChange={onChange}
            >
                {options.map((option) => (
                    <Radio
                        key={option.value}
                        label={option.label}
                        value={option.value}
                        disabled={option.disabled}
                    />
                ))}
            </FluentRadioGroup>
        </div>
    );
};

RadioGroup.defaultProps = {
    options: [],
    disabled: false,
    required: false,
    layout: "vertical",
};

export default RadioGroup;
