import React, { ReactNode, useState, useMemo, useContext, FC } from "react";
import { tokens } from "@fluentui/react-theme";
import {
    makeStyles,
    MenuList,
    MenuItem,
    shorthands,
    Divider,
} from "@fluentui/react-components";
import {
    parseChildrenToArray,
    getComponentProps,
    getComponentType,
} from "../../utilities/dashCompat";
import { DashComponentProps, DashLoadingState } from "../../props";
import { ResizePanel, ResizeHandleRight, ResizeContent } from "./ResizePanel";

type Props = {
    /**
     * Array of @link(Page) components
     */
    children?: ReactNode;

    /**
     * Key of the currently selected page item in navigation controls.
     */
    selected_key?: string;

    /**
     * whether the Sidebar element should be collapsible.
     */
    collapsible?: boolean;

    /**
     * whether the Sidebar element is collapsed.
     */
    collapsed?: boolean;

    /**
     * width of the PagesWithSidebar element.
     */
    sidebar_width?: number;

    /**
     * width of the collapsed Sidebar element.
     */
    sidebar_collapsed_width?: number;

    /**
     * Object that holds the loading state object coming from dash-render+er
     */
    loading_state?: DashLoadingState;

    /**
     * Defines CSS styles which will be applied to content container.
     */
    content_style?: object;
} & DashComponentProps;

const useStyles = makeStyles({
    root: {
        backgroundColor: tokens.colorNeutralBackground2,
        display: "flex",
        height: "100vh",
        width: "100%",
    },
    sidebar: {
        height: "100vh",
        backgroundColor: tokens.colorNeutralBackground1,
        display: "flex",
        flexDirection: "column",
    },
    controls: {
        flexGrow: 1,
        ...shorthands.padding("5px", "5px", "5px", "8px"),
    },
    content: {
        flexGrow: 1,
        backgroundColor: tokens.colorNeutralBackground2,
        height: "100vh",
        display: "flex",
    },
    menu: { ...shorthands.padding("5px", "5px", "5px", "5px") },
    menuItemSelected: {
        backgroundColor: tokens.colorNeutralBackground1Selected,
    },
    resizeHandle: {
        cursor: "col-resize",
        width: "3px",
        height: "100%",
        borderRightWidth: "1px",
        borderRightStyle: "solid",
        borderRightColor: tokens.colorNeutralBackground1Hover,
        boxSizing: "border-box",
        ":hover": {
            backgroundColor: tokens.colorBrandForeground1,
        },
    },
    controlsHidden: { display: "none" },
});

type Context = {
    selectedKey: string;
    cbControls: React.Dispatch<
        React.SetStateAction<Record<string, React.ReactNode>>
    >;
};

export const PagesContext = React.createContext<Context>({
    selectedKey: "",
    cbControls: undefined,
});

type ControlProps = {
    page_key: string;
};

const Controls: FC<ControlProps> = (props) => {
    const { children, page_key } = props;
    const classes = useStyles();
    const { selectedKey } = useContext(PagesContext);
    return (
        <div
            className={
                selectedKey === page_key
                    ? classes.controls
                    : classes.controlsHidden
            }
        >
            {children}
        </div>
    );
};

export const PagesWithSidebar = (props: Props) => {
    const {
        selected_key,
        children,
        sidebar_width,
        content_style,
        // collapsible,
        // sidebar_collapsed_width,
        setProps,
    } = props;
    const classes = useStyles();
    const [controls, setControls] = useState<Record<string, ReactNode>>({});

    const menu = useMemo(() => {
        const menuItems = parseChildrenToArray(children)
            .filter((c) => getComponentType(c) === "Page")
            .map((c) => {
                const componentProps = getComponentProps(c);
                const className =
                    componentProps.page_key === selected_key
                        ? classes.menuItemSelected
                        : undefined;
                return (
                    <MenuItem
                        key={componentProps.page_key as string}
                        className={className}
                        onClick={() =>
                            setProps({ selected_key: componentProps.page_key })
                        }
                    >
                        {componentProps.page_key}
                    </MenuItem>
                );
            });
        if (menuItems.length < 1) return null;
        return (
            <div className={classes.menu}>
                <MenuList>{menuItems}</MenuList>
                <Divider appearance="brand">Controls</Divider>
            </div>
        );
    }, [children, classes, selected_key, setProps]);

    return (
        <PagesContext.Provider
            value={{ selectedKey: selected_key, cbControls: setControls }}
        >
            <div className={classes.root}>
                <ResizePanel initialWidth={sidebar_width} minWidth={200}>
                    <ResizeContent>
                        <div className={classes.sidebar}>
                            {menu}
                            {Object.entries(controls).map(([key, node]) => (
                                <Controls key={key} page_key={key}>
                                    {node}
                                </Controls>
                            ))}
                        </div>
                    </ResizeContent>
                    <ResizeHandleRight>
                        <div className={classes.resizeHandle} />
                    </ResizeHandleRight>
                </ResizePanel>
                <div className={classes.content} style={content_style}>
                    {children}
                </div>
            </div>
        </PagesContext.Provider>
    );
};

PagesWithSidebar.defaultProps = {
    collapsible: false,
    collapsed: false,
    sidebar_width: 300,
    sidebar_collapsed_width: 80,
};

export default PagesWithSidebar;
