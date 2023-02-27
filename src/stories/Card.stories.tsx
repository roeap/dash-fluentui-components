/* eslint-disable @typescript-eslint/no-empty-function */
import React from "react";
import Card from "../components/card/Card";
import { ComponentStory, ComponentMeta } from "@storybook/react";
import { withHarness, omitArgs } from "./withHarness";

const setProps = (): void => {};

export default {
    component: Card,
    title: "card/Card",
    argTypes: {
        ...omitArgs,
        style: { table: { disable: true } },
        class_name: { table: { disable: true } },
        loading_state: { table: { disable: true } },
        n_clicks: { table: { disable: true } },
    },
    decorators: [withHarness],
} as ComponentMeta<typeof Card>;

const Template: ComponentStory<typeof Card> = (args) => {
    const { children, ...otherArgs } = args;
    return (
        <Card setProps={setProps} {...otherArgs}>
            {children}
        </Card>
    );
};

export const Primary = Template.bind({});
Primary.args = {
    children: "Card",
};
