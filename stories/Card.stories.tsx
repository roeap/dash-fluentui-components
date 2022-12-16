/* eslint-disable @typescript-eslint/no-empty-function */
/* eslint-disable no-magic-numbers */
import React from "react";
import { Card } from "../src/components/card/Card";
import { Story, Meta } from "@storybook/react/types-6-0";

const setProps = (): void => {};

export default {
    component: Card,
    title: "dash-argus/Argus/Card",
    argTypes: {
        id: { table: { disable: true } },
        style: { table: { disable: true } },
        setProps: { table: { disable: true } },
        loading_state: { table: { disable: true } },
        options: { control: { type: "object" } },
    },
} as Meta;

const Template: Story = (args) => {
    return (
        <Card setProps={setProps} {...args}>
            <div />
        </Card>
    );
};

export const Basic = Template.bind({});

Basic.args = {
    label: "Card label",
};

export const Loading = Template.bind({});

Loading.args = {
    label: "Card label",
    loading_state: {
        is_loading: true,
    },
};

export const WithMessage = Template.bind({});

WithMessage.args = {
    label: "Card label",
    message_props: {
        message: "I am an error message.",
        show: true,
        status: "error",
    },
};
