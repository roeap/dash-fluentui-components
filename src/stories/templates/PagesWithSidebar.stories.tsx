/* eslint-disable @typescript-eslint/no-empty-function */
import React, { useState } from "react";
import PagesWithSidebar from "../../components/templates/PagesWithSidebar";
import Page from "../../components/templates/Page";
import { ComponentStory, ComponentMeta } from "@storybook/react";

export default {
    component: PagesWithSidebar,
    title: "templates/PagesWithSidebar",
    argTypes: {
        id: { table: { disable: true } },
        key: { table: { disable: true } },
        setProps: { table: { disable: true } },
        loading_state: { table: { disable: true } },
        children: { table: { disable: true } },
        collapsed: { table: { disable: true } },
        selected_key: { table: { disable: true } },
    },
} as ComponentMeta<typeof PagesWithSidebar>;

const Template: ComponentStory<typeof PagesWithSidebar> = (args) => {
    const [props, setProps] = useState({
        selected_key: "page-1",
        collapsed: false,
    });
    return (
        <PagesWithSidebar setProps={setProps} {...args} {...props}>
            <Page page_key="page-1" controls="Controls 1">
                Page 1
            </Page>
            <Page page_key="page-2" controls="Controls 2">
                Page 2
            </Page>
        </PagesWithSidebar>
    );
};

export const Default = Template.bind({});
Default.args = {
    collapsible: false,
    sidebar_width: 250,
    sidebar_collapsed_width: 80,
};
