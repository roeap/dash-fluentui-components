/* eslint-disable @typescript-eslint/no-empty-function */
/* eslint-disable import/no-unresolved */
import React from "react";
import Slider from "../src/components/slider/Slider";
import { Story, Meta } from "@storybook/react/types-6-0";

const setProps = (): void => {};

export default {
    component: Slider,
    title: "dash-argus/Fluent UI/Slider",
    argTypes: {
        id: { table: { disable: true } },
        setProps: { table: { disable: true } },
        loading_state: { table: { disable: true } },
        style: { table: { disable: true } },
    },
} as Meta;

interface ISliderStoryArgs {
    min: number;
    max: number;
    step: number;
    label: string;
}

export const Basic: Story<ISliderStoryArgs> = (args) => {
    return <Slider setProps={setProps} {...args} />;
};

Basic.args = {
    min: 0,
    max: 10,
    step: 1,
    label: "Slider label",
};
