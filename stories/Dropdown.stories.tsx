/* eslint-disable @typescript-eslint/no-empty-function */
import React from "react";
import Dropdown from "../src/components/dropdown/Dropdown";
import { Story, Meta } from "@storybook/react/types-6-0";

const setProps = (): void => {};

export default {
    component: Dropdown,
    title: "dash-argus/Fluent UI/Dropdown",
    argTypes: {
        id: { table: { disable: true } },
        setProps: { table: { disable: true } },
        loading_state: { table: { disable: true } },
        style: { table: { disable: true } },
    },
} as Meta;

export const Basic: Story = (args) => {
    return <Dropdown setProps={setProps} {...args} />;
};

Basic.args = {
    label: "Dropdown label",
    placeholder: "Select an option",
    options: [
        { key: 0, text: "Option 1" },
        { value: 1, label: "Option 2" },
        { key: 2, text: "Option with icon", icon: "Add" },
        { key: 3, text: "Disabled option", disabled: true, icon: "Add" },
    ],
};

export const Grouped: Story = (args) => {
    return <Dropdown setProps={setProps} {...args} />;
};

Grouped.args = {
    label: "Dropdown label",
    placeholder: "Select an option",
    options: {
        Group_1: [
            { key: 0, text: "Option 1" },
            { value: 1, label: "Option 2" },
        ],
        Group_2: [
            { key: 2, text: "Option with icon", icon: "Add" },
            { key: 3, text: "Disabled option", disabled: true, icon: "Add" },
        ],
    },
};
