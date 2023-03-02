import React from "react";
import { render } from "@testing-library/react";
import Switch from "../Switch";
import userEvent from "@testing-library/user-event";

describe("Switch", () => {
    test("renders its label", () => {
        const { container } = render(<Switch label="Switch label"></Switch>);

        expect(container).toHaveTextContent("Switch label");
    });

    test("tracks checked with checked", async () => {
        const user = userEvent.setup();
        const mockSetProps = jest.fn();

        const container = render(
            <Switch setProps={mockSetProps} label="Clickable" />
        );

        expect(mockSetProps.mock.calls).toHaveLength(0);
        await user.click(container.getByText("Clickable"));

        expect(mockSetProps.mock.calls).toHaveLength(1);
        expect(mockSetProps.mock.calls[0][0].checked).toBe(true);
    });
});
