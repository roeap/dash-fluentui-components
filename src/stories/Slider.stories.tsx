import React, { useState } from "react";
import Slider from "../components/slider/Slider";
import { ComponentStory, ComponentMeta } from "@storybook/react";
import { withHarness, omitArgs } from "./withHarness";

export default {
    component: Slider,
    title: "Slider",
    argTypes: {
        ...omitArgs,
        style: { table: { disable: true } },
        value: { table: { disable: true } },
        class_name: { table: { disable: true } },
    },
    decorators: [withHarness],
} as ComponentMeta<typeof Slider>;

export const Basic: ComponentStory<typeof Slider> = (args) => {
    const [props, setProps] = useState({ value: undefined });
    return <Slider setProps={setProps} {...args} {...props} />;
};

Basic.args = {
    min: 0,
    max: 10,
    label: "Slider label",
    vertical: false,
    size: "medium",
    disabled: false,
};
