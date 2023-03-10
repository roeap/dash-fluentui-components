import React, { useState } from "react";
import Checkbox from "../components/checkbox/Checkbox";
import { ComponentStory, ComponentMeta } from "@storybook/react";
import { withHarness, omitArgs } from "./withHarness";

export default {
    component: Checkbox,
    title: "choice/Checkbox",
    argTypes: {
        ...omitArgs,
        style: { table: { disable: true } },
        class_name: { table: { disable: true } },
        checked: { table: { disable: true } },
    },
    decorators: [withHarness],
} as ComponentMeta<typeof Checkbox>;

const Template: ComponentStory<typeof Checkbox> = (args) => {
    const [props, setProps] = useState({ checked: false });
    return <Checkbox setProps={setProps} {...args} {...props}></Checkbox>;
};

export const Default = Template.bind({});
Default.args = {
    disabled: false,
    label: "Checkbox",
    label_position: "after",
    shape: "square",
    size: "medium",
};
