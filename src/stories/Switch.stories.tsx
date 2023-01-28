import React, { useState } from "react";
import Switch from "../components/switch/Switch";
import { ComponentStory, ComponentMeta } from "@storybook/react";
import { withHarness, omitArgs } from "./withHarness";

export default {
    component: Switch,
    title: "choice/Switch",
    argTypes: {
        ...omitArgs,
        checked: { table: { disable: true } },
    },
    decorators: [withHarness],
} as ComponentMeta<typeof Switch>;

export const Basic: ComponentStory<typeof Switch> = (args) => {
    const [props, setProps] = useState({ checked: false });
    return <Switch setProps={setProps} {...args} {...props} />;
};

Basic.args = {
    disabled: false,
    label: "Switch label",
    label_postion: "after",
};
