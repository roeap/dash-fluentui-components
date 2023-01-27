import React, { ReactNode, useState, useMemo } from "react";
import { tokens } from "@fluentui/react-theme";
import {
    makeStyles,
    MenuList,
    MenuItem,
    shorthands,
} from "@fluentui/react-components";
import {
    parseChildrenToArray,
    getComponentProps,
    getComponentType,
} from "../../utilities/dashCompat";
import { DashComponentProps, DashLoadingState } from "../../props";

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
} & DashComponentProps;

const useStyles = makeStyles({
    root: {
        display: "grid",
        gridTemplateRows: "100vh",
        width: "100vw",
    },
    sidebar: {
        gridColumnStart: 1,
        gridColumnEnd: 1,
        backgroundColor: tokens.colorNeutralBackground1,
    },
    content: {
        gridColumnStart: 2,
        gridColumnEnd: 2,
        backgroundColor: tokens.colorNeutralBackground2,
    },
    menu: { ...shorthands.padding("5px", "5px", "5px", "5px") },
    menuItemSelected: {
        backgroundColor: tokens.colorNeutralBackground1Selected,
    },
});

type Context = {
    selectedKey: string;
    cbControls: (node: ReactNode) => void;
};

export const PagesContext = React.createContext<Context>({
    selectedKey: "",
    cbControls: undefined,
});

export const PagesWithSidebar = (props: Props) => {
    const {
        selected_key,
        children,
        sidebar_width,
        // collapsible,
        // sidebar_collapsed_width,
        setProps,
    } = props;
    const classes = useStyles();
    const [controls, setControls] = useState<ReactNode>(undefined);

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
        return <MenuList className={classes.menu}>{menuItems}</MenuList>;
    }, [children, classes, selected_key, setProps]);

    return (
        <PagesContext.Provider
            value={{ selectedKey: selected_key, cbControls: setControls }}
        >
            <div
                className={classes.root}
                style={{ gridTemplateColumns: `${sidebar_width}px auto` }}
            >
                <div className={classes.sidebar}>
                    {menu}
                    {controls}
                </div>
                <div className={classes.content}>{children}</div>
            </div>
        </PagesContext.Provider>
    );
};

PagesWithSidebar.defaultProps = {
    collapsible: false,
    collapsed: false,
    sidebar_width: 250,
    sidebar_collapsed_width: 80,
};

export default PagesWithSidebar;
