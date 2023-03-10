import React from "react";
import { render } from "@testing-library/react";
import Checkbox from "../Checkbox";
import userEvent from "@testing-library/user-event";

describe("Checkbox", () => {
    test("renders its label", () => {
        const { container } = render(
            <Checkbox label="Checkbox label"></Checkbox>
        );

        expect(container).toHaveTextContent("Checkbox label");
    });

    test("tracks checked with checked", async () => {
        const user = userEvent.setup();
        const mockSetProps = jest.fn();

        const container = render(
            <Checkbox setProps={mockSetProps} label="Clickable" />
        );

        expect(mockSetProps.mock.calls).toHaveLength(0);
        await user.click(container.getByText("Clickable"));

        expect(mockSetProps.mock.calls).toHaveLength(1);
        expect(mockSetProps.mock.calls[0][0].checked).toBe(true);
    });
});
