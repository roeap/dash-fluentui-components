/* eslint-disable @typescript-eslint/no-empty-function */
import React from "react";
import Toggle from "../src/components/toggle/Toggle";
import { Story, Meta } from "@storybook/react/types-6-0";

const setProps = (): void => {};

export default {
    component: Toggle,
    title: "dash-argus/Fluent UI/Toggle",
    argTypes: {
        id: { table: { disable: true } },
        setProps: { table: { disable: true } },
        loading_state: { table: { disable: true } },
    },
} as Meta;

export const Basic: Story = (args) => {
    return <Toggle setProps={setProps} {...args} />;
};

Basic.args = {
    toggled: true,
    disabled: false,
    on_text: "On",
    off_text: "Off",
    inline_label: true,
    label: "Toggle label",
};
