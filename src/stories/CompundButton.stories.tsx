/* eslint-disable @typescript-eslint/no-empty-function */
import React from "react";
import CompoundButton from "../components/button/CompoundButton";
import { ComponentStory, ComponentMeta } from "@storybook/react";
import { withHarness, omitArgs } from "./withHarness";

const setProps = (): void => {};

export default {
    component: CompoundButton,
    title: "button/CompoundButton",
    argTypes: {
        ...omitArgs,
        style: { table: { disable: true } },
        class_name: { table: { disable: true } },
        loading_state: { table: { disable: true } },
        n_clicks: { table: { disable: true } },
    },
    decorators: [withHarness],
} as ComponentMeta<typeof CompoundButton>;

const Template: ComponentStory<typeof CompoundButton> = (args) => {
    const { children, ...otherArgs } = args;
    return (
        <CompoundButton setProps={setProps} {...otherArgs}>
            {children}
        </CompoundButton>
    );
};

export const Primary = Template.bind({});
Primary.args = {
    appearance: "primary",
    size: "medium",
    shape: "rounded",
    disabled: false,
    secondary_content: "secondary content",
    children: "main content",
};
