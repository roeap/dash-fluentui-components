import React, { useState } from "react";
import Button from "../components/button/Button";
import { ComponentStory, ComponentMeta } from "@storybook/react";
import { withHarness, omitArgs } from "./withHarness";

export default {
    component: Button,
    title: "button/Button",
    argTypes: {
        ...omitArgs,
        style: { table: { disable: true } },
        class_name: { table: { disable: true } },
        loading_state: { table: { disable: true } },
        n_clicks: { table: { disable: true } },
    },
    decorators: [withHarness],
} as ComponentMeta<typeof Button>;

const Template: ComponentStory<typeof Button> = (args) => {
    const [props, setProps] = useState({ n_clicks: 0 });
    const { children, ...otherArgs } = args;
    return (
        <Button setProps={setProps} {...otherArgs} {...props}>
            {children}
        </Button>
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
