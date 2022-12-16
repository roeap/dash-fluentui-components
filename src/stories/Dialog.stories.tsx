/* eslint-disable @typescript-eslint/no-empty-function */
import React, { useState } from "react";
import { Dialog } from "../components/dialog";
import { ComponentStory, ComponentMeta } from "@storybook/react";
import { Button } from "@fluentui/react-components";
import { withHarness, omitArgs } from "./withHarness";

export default {
    component: Dialog,
    title: "dialog/Dialog",
    argTypes: {
        ...omitArgs,
        open: { table: { disable: true } },
        children: { table: { disable: true } },
    },
    decorators: [withHarness],
} as ComponentMeta<typeof Dialog>;

const Template: ComponentStory<typeof Dialog> = (args) => {
    const { modal_type } = args;
    const [props, setProps] = useState({ open: false });
    return (
        <Dialog
            modal_type={modal_type}
            {...props}
            setProps={setProps}
            title="Dialog title"
            trigger={<Button>Open dialog</Button>}
            trigger_action={<Button appearance="secondary">Close</Button>}
            actions={<Button appearance="primary">Do Something</Button>}
        >
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Quisquam
            exercitationem cumque repellendus eaque est dolor eius expedita
            nulla ullam? Tenetur reprehenderit aut voluptatum impedit voluptates
            in natus iure cumque eaque?
        </Dialog>
    );
};

export const Primary = Template.bind({});
Primary.args = { modal_type: "modal", open: true };
