import React from "react";
import { render } from "@testing-library/react";
import Label from "../Label";

describe("Label", () => {
    test("renders its content", () => {
        const { container } = render(<Label>content</Label>);

        expect(container).toHaveTextContent("content");
    });
});
