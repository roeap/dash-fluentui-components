/* eslint-disable @typescript-eslint/no-empty-function */
import React from "react";
import DatePicker from "../src/components/date_picker/DatePicker";
import { Story, Meta } from "@storybook/react/types-6-0";

const setProps = (): void => {};

export default {
    component: DatePicker,
    title: "dash-argus/Fluent UI/DatePicker",
    argTypes: {
        id: { table: { disable: true } },
        setProps: { table: { disable: true } },
        loading_state: { table: { disable: true } },
        style: { table: { disable: true } },
    },
} as Meta;

export const Basic: Story = (args) => {
    return <DatePicker setProps={setProps} {...args} />;
};

Basic.args = {
    label: "DatePicker label",
};
