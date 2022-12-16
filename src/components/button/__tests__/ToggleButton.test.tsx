import React from "react";
import { render } from "@testing-library/react";
import userEvent from "@testing-library/user-event";
import ToggleButton from "../ToggleButton";

describe("ToggleButton", () => {
    test("renders its content", () => {
        const { container } = render(
            <ToggleButton>Some button content</ToggleButton>
        );

        expect(container).toHaveTextContent("Some button content");
    });

    test("tracks clicks with n_clicks", async () => {
        const user = userEvent.setup();
        const mockSetProps = jest.fn();

        const container = render(
            <ToggleButton setProps={mockSetProps}>Clickable</ToggleButton>
        );

        expect(mockSetProps.mock.calls).toHaveLength(0);
        await user.click(container.getByText("Clickable"));

        expect(mockSetProps.mock.calls).toHaveLength(1);
        expect(mockSetProps.mock.calls[0][0].n_clicks).toBe(1);
    });

    test("tracks checked status", async () => {
        const user = userEvent.setup();
        const mockSetProps = jest.fn();

        const container = render(
            <ToggleButton setProps={mockSetProps} checked={false}>
                Clickable
            </ToggleButton>
        );

        expect(mockSetProps.mock.calls).toHaveLength(0);
        await user.click(container.getByText("Clickable"));

        expect(mockSetProps.mock.calls).toHaveLength(1);
        expect(mockSetProps.mock.calls[0][0].checked).toBe(true);
    });

    test("doesn't track clicks if disabled", async () => {
        const user = userEvent.setup();
        const mockSetProps = jest.fn();
        const container = render(
            <ToggleButton disabled={true} setProps={mockSetProps}>
                Clickable
            </ToggleButton>
        );

        expect(mockSetProps.mock.calls).toHaveLength(0);

        await user.click(container.getByText("Clickable"));

        expect(mockSetProps.mock.calls).toHaveLength(0);
    });
});
