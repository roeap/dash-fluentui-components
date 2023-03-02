import React from "react";
import { render } from "@testing-library/react";
import Badge from "../Badge";

describe("Badge", () => {
    test("renders its content", () => {
        const { container } = render(<Badge>content</Badge>);

        expect(container).toHaveTextContent("content");
    });
});
