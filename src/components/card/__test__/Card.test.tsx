import React from "react";
import { render } from "@testing-library/react";
import Card from "../Card";

describe("Card", () => {
    test("renders its content", () => {
        const { container } = render(<Card>content</Card>);

        expect(container).toHaveTextContent("content");
    });
});
