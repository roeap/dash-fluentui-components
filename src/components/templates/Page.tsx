import React, { ReactNode, useContext, useEffect } from "react";
import {
    DashComponentProps,
    DashLoadingState,
    StyledComponentProps,
} from "../../props";
import { PagesContext } from "./PagesWithSidebar";

export type Props = {
    /**
     * child components
     */
    children?: ReactNode;
    /**
     * child components
     */
    controls?: ReactNode;
    /**
     * Show clear button
     */
    label?: string;
    /**
     * Show clear button
     */
    page_key?: string;
    /**
     * Icon for display in page navigation
     */
    icon?: ReactNode;
    /**
     * Object that holds the loading state object coming from dash-renderer
     */
    loading_state?: DashLoadingState;
} & DashComponentProps &
    StyledComponentProps;

/**
 * A page within a multi page layout
 */
const Page = (props: Props) => {
    const { children, page_key, controls } = props;
    const { selectedKey, cbControls } = useContext(PagesContext);

    useEffect(() => {
        cbControls((curr) => ({ ...curr, [page_key]: controls }));
    }, [selectedKey, cbControls, controls, page_key]);

    if (selectedKey !== page_key) return null;
    return <>{children}</>;
};

Page.defaultProps = {};

export default Page;
