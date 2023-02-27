import * as React from "react";
import {
    TabList as FluentTabList,
    SelectTabEvent,
    SelectTabData,
} from "@fluentui/react-components";
import {
    DashComponentProps,
    DashLoadingState,
    StyledComponentProps,
} from "../../props";

type Props = {
    /**
     * Array that holds PivotItem components
     */
    children: React.ReactNode;

    /**
     * Currently selected key.
     */
    selected_key: string;

    /**
     * Object that holds the loading state object coming from dash-renderer
     */
    loading_state?: DashLoadingState;
} & DashComponentProps &
    StyledComponentProps;

const TabList = (props: Props) => {
    const { children, selected_key, style, setProps } = props;

    const onTabSelect = (_event: SelectTabEvent, data: SelectTabData) => {
        setProps({ selected_key: data.value });
    };

    return (
        <FluentTabList
            selectedValue={selected_key}
            onTabSelect={onTabSelect}
            style={style}
        >
            {children}
        </FluentTabList>
    );
};

TabList.defaultProps = {
    selected_key: "",
};

export default TabList;
