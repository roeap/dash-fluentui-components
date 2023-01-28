/* eslint-disable @typescript-eslint/no-empty-function */
import React, { useState } from "react";
import ComboBox from "../components/dropdown/ComboBox";
import { ComponentStory, ComponentMeta } from "@storybook/react";

export default {
    component: ComboBox,
    title: "select/ComboBox",
    argTypes: {
        id: { table: { disable: true } },
        key: { table: { disable: true } },
        setProps: { table: { disable: true } },
        style: { table: { disable: true } },
        value: { table: { disable: true } },
    },
} as ComponentMeta<typeof ComboBox>;

export const Basic: ComponentStory<typeof ComboBox> = (args) => {
    const [props, setProps] = useState({ value: [] });
    return <ComboBox setProps={setProps} {...args} {...props} />;
};

Basic.args = {
    label: "ComboBox label",
    placeholder: "Select or type an option",
    multiselect: false,
    disabled: false,
    freeform: false,
    options: [
        { value: "pandas", label: "Pandas" },
        { value: "polars", label: "Polars" },
        { value: "datafusion", label: "Datafusion" },
        { value: "pyarrow", label: "Pyarrow" },
    ],
};
