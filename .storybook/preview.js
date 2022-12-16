import {
    FluentProvider,
    webLightTheme,
    webDarkTheme,
    teamsLightTheme,
    teamsDarkTheme,
} from "@fluentui/react-components";

export const globalTypes = {
    theme: {
        name: "Theme",
        description: "Global theme for components",
        defaultValue: "light",
        toolbar: {
            icon: "circlehollow",
            // Array of plain string values or MenuItem shape (see below)
            items: ["light", "dark", "teamsLight", "teamsDark"],
            // Property that specifies if the name of the item will be displayed
            showName: true,
            // Change title based on selected value
            dynamicTitle: true,
        },
    },
};

export const parameters = {
    actions: { argTypesRegex: "^on[A-Z].*" },
    controls: {
        matchers: {
            color: /(background|color)$/i,
            date: /Date$/,
        },
    },
};

// Function to obtain the intended theme
const getTheme = (themeName) => {
    switch (themeName) {
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
};

const withThemeProvider = (Story, context) => {
    const theme = getTheme(context.globals.theme);
    return (
        <FluentProvider theme={theme}>
            <Story />
        </FluentProvider>
    );
};
export const decorators = [withThemeProvider];
