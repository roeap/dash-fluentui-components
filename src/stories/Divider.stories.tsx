import React from "react";
import Divider from "../components/divider/Divider";
import { ComponentStory, ComponentMeta } from "@storybook/react";
import { withHarness, omitArgs } from "./withHarness";

export default {
    component: Divider,
    title: "divider/Divider",
    argTypes: {
        ...omitArgs,
    },
    decorators: [withHarness],
} as ComponentMeta<typeof Divider>;

const Template: ComponentStory<typeof Divider> = (args) => {
    const { children, ...otherArgs } = args;
    return <Divider {...otherArgs}>{children}</Divider>;
};

export const Primary = Template.bind({});
Primary.args = {
    align_content: "center",
    apperance: "default",
    inset: false,
    vertical: false,
    children: "Button",
};
