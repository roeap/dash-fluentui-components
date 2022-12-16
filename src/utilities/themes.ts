/* eslint no-magic-numbers: 0 */
import { PartialTheme } from "@fluentui/react";

export const lightTheme: PartialTheme = {
    defaultFontStyle: {
        fontFamily:
            '-apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, Oxygen, Ubuntu, Cantarell, Fira Sans, Droid Sans, "Helvetica Neue", sans-serif',
    },
    palette: {
        themePrimary: "#004894",
        themeLighterAlt: "#f1f6fb",
        themeLighter: "#c8daee",
        themeLight: "#9cbcdf",
        themeTertiary: "#4c84bf",
        themeSecondary: "#1358a1",
        themeDarkAlt: "#004085",
        themeDark: "#003670",
        themeDarker: "#002853",
        neutralLighterAlt: "#faf9f8",
        neutralLighter: "#f3f2f1",
        neutralLight: "#edebe9",
        neutralQuaternaryAlt: "#e1dfdd",
        neutralQuaternary: "#d0d0d0",
        neutralTertiaryAlt: "#c8c6c4",
        neutralTertiary: "#a19f9d",
        neutralSecondary: "#605e5c",
        neutralPrimaryAlt: "#3b3a39",
        neutralPrimary: "#323130",
        neutralDark: "#201f1e",
        black: "#000000",
        white: "#ffffff",
    },
    effects: {
        elevation4:
            "0 1.6px 3.6px 0 rgba(0, 0, 0, 0.132), 0 0.3px 0.9px 0 rgba(0, 0, 0, 0.108)",
        elevation8:
            "0 3.2px 7.2px 0 rgba(0, 0, 0, 0.132), 0 0.6px 1.8px 0 rgba(0, 0, 0, 0.108)",
        elevation16:
            "0 6.4px 14.4px 0 rgba(0, 0, 0, 0.132), 0 1.2px 3.6px 0 rgba(0, 0, 0, 0.108)",
        elevation64:
            "0 25.6px 57.6px 0 rgba(0, 0, 0, 0.22), 0 4.8px 14.4px 0 rgba(0, 0, 0, 0.18)",
    },
};

export const darkTheme_: PartialTheme = {
    defaultFontStyle: {
        fontFamily:
            '-apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, Oxygen, Ubuntu, Cantarell, Fira Sans, Droid Sans, "Helvetica Neue", sans-serif',
    },
    palette: {
        themePrimary: "#e49106",
        themeLighterAlt: "#fefaf4",
        themeLighter: "#fbecd4",
        themeLight: "#f7dcaf",
        themeTertiary: "#eebb64",
        themeSecondary: "#e69e22",
        themeDarkAlt: "#cc8406",
        themeDark: "#ac6f05",
        themeDarker: "#7f5204",
        neutralLighterAlt: "#201f1e",
        neutralLighter: "#201f1e",
        neutralLight: "#1e1e1d",
        neutralQuaternaryAlt: "#1c1b1b",
        neutralQuaternary: "#1b1a19",
        neutralTertiaryAlt: "#1a1918",
        neutralTertiary: "#e4e4e4",
        neutralSecondary: "#e8e8e8",
        neutralPrimaryAlt: "#ededed",
        neutralPrimary: "#d6d6d6",
        neutralDark: "#f6f6f6",
        black: "#fafafa",
        white: "#201f1e",
    },
};

export const darkTheme: PartialTheme = {
    defaultFontStyle: {
        fontFamily:
            '-apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, Oxygen, Ubuntu, Cantarell, Fira Sans, Droid Sans, "Helvetica Neue", sans-serif',
    },
    palette: {
        themePrimary: "#e49106",
        themeLighterAlt: "#fefaf4",
        themeLighter: "#fbecd4",
        themeLight: "#f7dcaf",
        themeTertiary: "#eebb64",
        themeSecondary: "#e69e22",
        themeDarkAlt: "#cc8406",
        themeDark: "#ac6f05",
        themeDarker: "#7f5204",
        neutralLighterAlt: "#1c1c1c",
        neutralLighter: "#252525",
        neutralLight: "#343434",
        neutralQuaternaryAlt: "#3d3d3d",
        neutralQuaternary: "#454545",
        neutralTertiaryAlt: "#656565",
        neutralTertiary: "#ececec",
        neutralSecondary: "#efefef",
        neutralPrimaryAlt: "#f2f2f2",
        neutralPrimary: "#e4e4e4",
        neutralDark: "#f9f9f9",
        black: "#fcfcfc",
        white: "#111111",
    },
    effects: {
        elevation4:
            "0 1.6px 3.6px 0 rgba(255, 255, 255, 0.132), 0 0.3px 0.9px 0 rgba(255, 255, 255, 0.108)",
        elevation8:
            "0 3.2px 7.2px 0 rgba(255, 255, 255, 0.132), 0 0.6px 1.8px 0 rgba(255, 255, 255, 0.108)",
        elevation16:
            "0 6.4px 14.4px 0 rgba(255, 255, 255, 0.132), 0 1.2px 3.6px 0 rgba(255, 255, 255, 0.108)",
        elevation64:
            "0 25.6px 57.6px 0 rgba(255, 255, 255, 0.22), 0 4.8px 14.4px 0 rgba(255, 255, 255, 0.18)",
    },
};

export enum StyleConstants {
    sidebarWidth = 260,
    sidebarWidthCollapsed = 50,
    headerHeight = 50,
    toolbarHeight = 50,
    pageTopOffset = 100,
}

export enum ColorSlots {
    backgroundMainArea = "neutralLighterAlt",
    backgroundSidebar = "neutralLighter",
}

export enum BASFColors {
    darkBlue = "#004A96",
    lightBlue = "#21A0D2",
    darkGreen = "#00793A",
    lightGreen = "#65AC1E",
    red = "#C50022",
    orange = "#F39500",
}
