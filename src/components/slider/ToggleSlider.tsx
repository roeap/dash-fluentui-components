import React from "react";
import { getId } from "@fluentui/react/lib/Utilities";
import { TooltipHost } from "@fluentui/react/lib/Tooltip";
import { Icon } from "@fluentui/react/lib/Icon";
import { Stack, StackItem } from "@fluentui/react/lib/Stack";
import { Toggle } from "@fluentui/react/lib/Toggle";
import { Slider } from "@fluentui/react/lib/Slider";
import { Label } from "@fluentui/react/lib/Label";
import { DashComponentProps, StyledComponentProps } from "../../props";

type Props = {
    tooltip: string;
    label: string;
    value: number;
    checked: boolean;
} & DashComponentProps &
    StyledComponentProps;

export const ToggleSlider = (props: Props) => {
    const stackId = getId("toggle-slider-stack");

    let label;
    if (props.tooltip !== "") {
        label = (
            <div>
                {props.label}
                {"  "}
                <TooltipHost content={props.tooltip}>
                    <Icon iconName="Info" aria-label="Info tooltip" />
                </TooltipHost>
            </div>
        );
    } else {
        label = props.label;
    }

    const onChange = (newValue: number): void => {
        props.setProps({ value: newValue, checked: props.checked });
    };

    return (
        <>
            <Label htmlFor={stackId}>{label}</Label>
            <Stack id={stackId} horizontal verticalAlign="end">
                <StackItem disableShrink>
                    <Toggle
                        checked={props.checked}
                        onChange={(_event, checked) => {
                            props.setProps({
                                checked: checked,
                                value: props.value,
                            });
                        }}
                    ></Toggle>
                </StackItem>
                <StackItem grow={1}>
                    <Slider
                        min={0}
                        max={5}
                        step={0.25}
                        value={props.value}
                        styles={{ root: { marginBottom: 4 } }}
                        disabled={!props.checked}
                        onChange={onChange}
                    ></Slider>
                </StackItem>
            </Stack>
        </>
    );
};

ToggleSlider.defaultProps = {};

export default ToggleSlider;
