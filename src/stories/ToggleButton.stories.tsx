/* eslint-disable @typescript-eslint/no-empty-function */
import React, { useState } from "react";
import ToggleButton from "../components/button/ToggleButton";
import { ComponentStory, ComponentMeta } from "@storybook/react";
import { withHarness } from "./withHarness";

export default {
    component: ToggleButton,
    title: "button/ToggleButton",
    argTypes: {
        id: { table: { disable: true } },
        key: { table: { disable: true } },
        style: { table: { disable: true } },
        class_name: { table: { disable: true } },
        setProps: { table: { disable: true } },
        loading_state: { table: { disable: true } },
        n_clicks: { table: { disable: true } },
        checked: { table: { disable: true } },
    },
    decorators: [withHarness],
} as ComponentMeta<typeof ToggleButton>;

const Template: ComponentStory<typeof ToggleButton> = (args) => {
    const { children, ...otherArgs } = args;
    const [props, setProps] = useState({ checked: false });
    return (
        <ToggleButton setProps={setProps} {...otherArgs} {...props}>
            {children}
        </ToggleButton>
    );
};

export const Primary = Template.bind({});
Primary.args = {
    appearance: "primary",
    size: "medium",
    shape: "rounded",
    disabled: false,
    children: "Button",
};
