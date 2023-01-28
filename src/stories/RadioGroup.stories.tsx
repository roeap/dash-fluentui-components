import React, { useState } from "react";
import RadioGroup from "../components/radio/RadioGroup";
import { ComponentStory, ComponentMeta } from "@storybook/react";
import { withHarness, omitArgs } from "./withHarness";

export default {
    component: RadioGroup,
    title: "choice/RadioGroup",
    argTypes: {
        ...omitArgs,
        style: { table: { disable: true } },
        value: { control: { disable: true } },
    },
    decorators: [withHarness],
} as ComponentMeta<typeof RadioGroup>;

export const Basic: ComponentStory<typeof RadioGroup> = (args) => {
    const [props, setProps] = useState({ value: undefined });
    return <RadioGroup setProps={setProps} {...args} {...props} />;
};

Basic.args = {
    label: "radio group label",
    disabled: false,
    required: false,
    options: [
        { value: "first", label: "Option 1" },
        { value: "second", label: "Option 2" },
        { value: "disabled", label: "Disabled option", disabled: true },
    ],
};
