import React from "react";
import { render } from "@testing-library/react";
import userEvent from "@testing-library/user-event";
import CompoundButton from "../CompoundButton";

describe("Button", () => {
    test("renders its secondary content", () => {
        const { container } = render(
            <CompoundButton secondary_content="secondary">
                Some button content
            </CompoundButton>
        );

        expect(container).toHaveTextContent("secondary");
    });

    test("tracks clicks with n_clicks", async () => {
        const user = userEvent.setup();
        const mockSetProps = jest.fn();

        const container = render(
            <CompoundButton setProps={mockSetProps}>Clickable</CompoundButton>
        );

        expect(mockSetProps.mock.calls).toHaveLength(0);
        await user.click(container.getByText("Clickable"));

        expect(mockSetProps.mock.calls).toHaveLength(1);
        expect(mockSetProps.mock.calls[0][0].n_clicks).toBe(1);
    });

    test("doesn't track clicks if disabled", async () => {
        const user = userEvent.setup();
        const mockSetProps = jest.fn();
        const container = render(
            <CompoundButton disabled={true} setProps={mockSetProps}>
                Clickable
            </CompoundButton>
        );

        expect(mockSetProps.mock.calls).toHaveLength(0);

        await user.click(container.getByText("Clickable"));

        expect(mockSetProps.mock.calls).toHaveLength(0);
    });
});
