/* eslint-disable @typescript-eslint/no-empty-function */
import React from "react";
import ChoiceGroup from "../src/components/choice_group/ChoiceGroup";
import { Story, Meta } from "@storybook/react/types-6-0";

const setProps = (): void => {};

export default {
    component: ChoiceGroup,
    title: "dash-argus/Fluent UI/ChoiceGroup",
    argTypes: {
        id: { table: { disable: true } },
        style: { table: { disable: true } },
        setProps: { table: { disable: true } },
        loading_state: { table: { disable: true } },
        options: { control: { type: "object" } },
    },
} as Meta;

export const Basic: Story = (args) => {
    return <ChoiceGroup setProps={setProps} {...args} />;
};

Basic.args = {
    label: "Choice group label",
    value: "first",
    options: [
        { key: "first", text: "Option 1" },
        { key: 2, text: "Option 2" },
        { value: 3, label: "Option 3" },
        { value: "disabled", label: "Disabled option", disabled: true },
    ],
};
