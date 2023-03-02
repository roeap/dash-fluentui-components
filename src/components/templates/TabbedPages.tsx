import React, { FC, useMemo } from "react";
import { tokens } from "@fluentui/react-theme";
import { PagesContext } from "./PagesWithSidebar";
import {
    makeStyles,
    TabList,
    Tab,
    SelectTabEvent,
    SelectTabData,
} from "@fluentui/react-components";
import {
    parseChildrenToArray,
    getComponentProps,
    getComponentType,
} from "../../utilities/dashCompat";
import { DashComponentProps } from "../../props";

const useStyles = makeStyles({
    root: { flexGrow: 1, flexDirection: "column", display: "flex" },
    tabList: { width: "100%" },
    content: {
        flexGrow: 1,
        backgroundColor: tokens.colorNeutralBackground2,
        display: "flex",
    },
});

type Props = {
    header?: JSX.Element;

    /**
     * Key of the currently selected page item in navigation controls.
     */
    selected_key?: string;
} & DashComponentProps;

export const TabbedPages: FC<Props> = (props) => {
    const classes = useStyles();
    const { children, selected_key, header, setProps } = props;

    const menu = useMemo(() => {
        return parseChildrenToArray(children)
            .filter((c) => getComponentType(c) === "Page")
            .map((c) => {
                const componentProps = getComponentProps(c);
                return (
                    <Tab
                        key={componentProps.page_key as string}
                        value={componentProps.page_key as string}
                    >
                        {componentProps.page_key as string}
                    </Tab>
                );
            });
    }, [children]);

    const onTabSelect = (_event: SelectTabEvent, data: SelectTabData) => {
        setProps({ selected_key: data.value });
    };

    return (
        <PagesContext.Provider
            value={{ selectedKey: selected_key, cbControls: () => ({}) }}
        >
            <div className={classes.root}>
                {header}
                <TabList
                    className={classes.tabList}
                    selectedValue={selected_key}
                    onTabSelect={onTabSelect}
                >
                    {menu}
                </TabList>
                <div className={classes.content}>{children}</div>
            </div>
        </PagesContext.Provider>
    );
};

TabbedPages.defaultProps = {};

export default TabbedPages;
