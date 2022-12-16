/* eslint-disable @typescript-eslint/no-empty-function */
import React from "react";
import Button from "../components/button/Button";
import { ComponentStory, ComponentMeta } from "@storybook/react";
import { withHarness } from "./withHarness";

const setProps = (): void => {};

export default {
    component: Button,
    title: "button/Button",
    argTypes: {
        id: { table: { disable: true } },
        key: { table: { disable: true } },
        style: { table: { disable: true } },
        class_name: { table: { disable: true } },
        setProps: { table: { disable: true } },
        loading_state: { table: { disable: true } },
        n_clicks: { table: { disable: true } },
    },
    decorators: [withHarness],
} as ComponentMeta<typeof Button>;

const Template: ComponentStory<typeof Button> = (args) => {
    const { children, ...otherArgs } = args;
    return (
        <Button setProps={setProps} {...otherArgs}>
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
