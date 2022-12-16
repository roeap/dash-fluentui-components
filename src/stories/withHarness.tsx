import React from "react";

export const withHarness = (Story) => (
    <div style={{ padding: "3em" }}>
        <Story />
    </div>
);

export const omitArgs = {
    id: { table: { disable: true } },
    key: { table: { disable: true } },
    setProps: { table: { disable: true } },
};
