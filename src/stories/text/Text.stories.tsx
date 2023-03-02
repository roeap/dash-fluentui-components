/* eslint-disable @typescript-eslint/no-empty-function */
import React from "react";
import Text from "../../components/text/Text";
import { ComponentStory, ComponentMeta } from "@storybook/react";
import { withHarness, omitArgs } from "../withHarness";

const setProps = (): void => {};

export default {
    component: Text,
    title: "text/Text",
    argTypes: {
        ...omitArgs,
        style: { table: { disable: true } },
        class_name: { table: { disable: true } },
    },
    decorators: [withHarness],
} as ComponentMeta<typeof Text>;

const Template: ComponentStory<typeof Text> = (args) => {
    const { children, ...otherArgs } = args;
    return (
        <Text setProps={setProps} {...otherArgs}>
            {children}
        </Text>
    );
};

export const Default = Template.bind({});
Default.args = {
    align: "start",
    block: false,
    font: "base",
    italic: false,
    size: 300,
    strikethrough: false,
    truncate: false,
    underline: false,
    weight: "regular",
    wrap: true,
    children: "This is an example of the Text component's usage",
};
