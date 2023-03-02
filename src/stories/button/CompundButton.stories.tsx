import React, { useState } from "react";
import CompoundButton from "../../components/button/CompoundButton";
import { ComponentStory, ComponentMeta } from "@storybook/react";
import { withHarness, omitArgs } from "../withHarness";

export default {
    component: CompoundButton,
    title: "button/CompoundButton",
    argTypes: {
        ...omitArgs,
        style: { table: { disable: true } },
        class_name: { table: { disable: true } },
        loading_state: { table: { disable: true } },
        n_clicks: { table: { disable: true } },
    },
    decorators: [withHarness],
} as ComponentMeta<typeof CompoundButton>;

const Template: ComponentStory<typeof CompoundButton> = (args) => {
    const [props, setProps] = useState({ n_clicks: 0 });
    const { children, ...otherArgs } = args;
    return (
        <CompoundButton setProps={setProps} {...otherArgs} {...props}>
            {children}
        </CompoundButton>
    );
};

export const Primary = Template.bind({});
Primary.args = {
    appearance: "primary",
    size: "medium",
    shape: "rounded",
    disabled: false,
    secondary_content: "secondary content",
    children: "main content",
};
