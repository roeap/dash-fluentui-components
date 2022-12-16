/* eslint-disable @typescript-eslint/no-empty-function */
import React from "react";
import Label from "../components/text/Label";
import { ComponentStory, ComponentMeta } from "@storybook/react";
import { withHarness } from "./withHarness";

const setProps = (): void => {};

export default {
    component: Label,
    title: "text/Label",
    argTypes: {
        id: { table: { disable: true } },
        key: { table: { disable: true } },
        style: { table: { disable: true } },
        class_name: { table: { disable: true } },
        setProps: { table: { disable: true } },
    },
    decorators: [withHarness],
} as ComponentMeta<typeof Label>;

const Template: ComponentStory<typeof Label> = (args) => {
    const { children, ...otherArgs } = args;
    return (
        <Label setProps={setProps} {...otherArgs}>
            {children}
        </Label>
    );
};

export const Default = Template.bind({});
Default.args = {
    size: "medium",
    weight: "regular",
    required: false,
    disabled: false,
    children: "This is a label",
};
