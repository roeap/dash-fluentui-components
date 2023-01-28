import React, { useState } from "react";
import ComboBox from "../components/dropdown/ComboBox";
import { ComponentStory, ComponentMeta } from "@storybook/react";
import { withHarness, omitArgs } from "./withHarness";

export default {
    component: ComboBox,
    title: "select/ComboBox",
    argTypes: {
        ...omitArgs,
        style: { table: { disable: true } },
        value: { table: { disable: true } },
    },
    decorators: [withHarness],
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
