/* eslint-disable @typescript-eslint/no-empty-function */
import React, { useState } from "react";
import TabbedPages from "../../components/templates/TabbedPages";
import Page from "../../components/templates/Page";
import { ComponentStory, ComponentMeta } from "@storybook/react";
import { withHarness, omitArgs } from "../withHarness";

export default {
    component: TabbedPages,
    title: "templates/TabbedPage",
    argTypes: {
        ...omitArgs,
        style: { table: { disable: true } },
        class_name: { table: { disable: true } },
        loading_state: { table: { disable: true } },
        n_clicks: { table: { disable: true } },
    },
    decorators: [withHarness],
} as ComponentMeta<typeof TabbedPages>;

const Template: ComponentStory<typeof TabbedPages> = (args) => {
    const { ...otherArgs } = args;
    const [props, setProps] = useState({ selected_key: "page-1" });

    return (
        <TabbedPages setProps={setProps} {...otherArgs} {...props}>
            <Page key="page-1" page_key="page-1">
                Hello
            </Page>
            <Page key="page-2" page_key="page-2">
                World
            </Page>
        </TabbedPages>
    );
};

export const Primary = Template.bind({});
Primary.args = {};
