import React, { ReactNode } from "react";
import { DashComponentProps } from "../../props";

type Props = {
    /**
     * Array that holds PivotItem components
     */
    children: ReactNode;

    /**
     * Value corresponding to keys in parent pivot element.
     */
    value: string | string[];
} & DashComponentProps;

const PivotItem = (props: Props) => {
    const { children } = props;

    return <>{children}</>;
};

export default PivotItem;
