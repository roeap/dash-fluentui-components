/* eslint-disable @typescript-eslint/no-empty-function */
import React, { useState } from "react";
import Textarea from "../components/text/Textarea";
import { ComponentStory, ComponentMeta } from "@storybook/react";
import { withHarness } from "./withHarness";

export default {
    component: Textarea,
    title: "text/Textarea",
    argTypes: {
        id: { table: { disable: true } },
        key: { table: { disable: true } },
        style: { table: { disable: true } },
        class_name: { table: { disable: true } },
        setProps: { table: { disable: true } },
        value: { table: { disable: true } },
    },
    decorators: [withHarness],
} as ComponentMeta<typeof Textarea>;

const Template: ComponentStory<typeof Textarea> = (args) => {
    const [props, setProps] = useState({ value: "Some text in the area" });
    return <Textarea setProps={setProps} {...args} {...props}></Textarea>;
};

export const Default = Template.bind({});
Default.args = {
    appearance: "outline",
    resize: "none",
    size: "medium",
};
