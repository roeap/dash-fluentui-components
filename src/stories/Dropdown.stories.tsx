/* eslint-disable @typescript-eslint/no-empty-function */
import React, { useState } from "react";
import Dropdown from "../components/dropdown/Dropdown";
import { ComponentStory, ComponentMeta } from "@storybook/react";

export default {
    component: Dropdown,
    title: "select/Dropdown",
    argTypes: {
        id: { table: { disable: true } },
        key: { table: { disable: true } },
        setProps: { table: { disable: true } },
        style: { table: { disable: true } },
        value: { table: { disable: true } },
    },
} as ComponentMeta<typeof Dropdown>;

export const Basic: ComponentStory<typeof Dropdown> = (args) => {
    const [props, setProps] = useState({ value: [] });
    return <Dropdown setProps={setProps} {...args} {...props} />;
};

Basic.args = {
    label: "Dropdown label",
    placeholder: "Select an option",
    multiselect: false,
    disabled: false,
    options: [
        { value: "0", label: "Option 1" },
        { value: "1", label: "Option 2" },
        { value: "3", label: "Disabled option", disabled: true },
    ],
};
