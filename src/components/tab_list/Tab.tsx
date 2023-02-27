import * as React from "react";
import { Tab as FluentTab } from "@fluentui/react-components";
import { DashComponentProps, StyledComponentProps } from "../../props";

type Props = {
    value: string;
    /**
     * Array that holds PivotItem components
     */
    children: React.ReactNode;

    icon?: JSX.Element;
} & DashComponentProps &
    StyledComponentProps;

const Tab = (props: Props) => {
    const { children, style, value, icon } = props;

    return (
        <FluentTab value={value} style={style} icon={icon}>
            {children}
        </FluentTab>
    );
};

Tab.defaultProps = {};

export default Tab;
