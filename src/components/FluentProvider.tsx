import React, { useMemo } from "react";
import {
    FluentProvider as InnerFluentProvider,
    webLightTheme,
    webDarkTheme,
    teamsDarkTheme,
    teamsLightTheme,
} from "@fluentui/react-components";
import { DashComponentProps } from "../props";

type Props = {
    /**
     * Array that holds PivotItem components
     */
    children: React.ReactNode;
    theme?: "light" | "dark" | "teamsLight" | "teamsDark";
} & DashComponentProps;

const FluentProvider = (props: Props) => {
    const { children, theme } = props;

    const chosenTheme = useMemo(() => {
        switch (theme) {
            case "light":
                return webLightTheme;
            case "dark":
                return webDarkTheme;
            case "teamsLight":
                return teamsLightTheme;
            case "teamsDark":
                return teamsDarkTheme;

            default:
                return webLightTheme;
        }
    }, [theme]);

    return (
        <InnerFluentProvider theme={chosenTheme}>
            {children}
        </InnerFluentProvider>
    );
};

FluentProvider.defaultProps = { theme: "light" };

export default FluentProvider;
