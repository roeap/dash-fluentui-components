import React from "react";
import { render } from "@testing-library/react";
import Text from "../Text";

describe("Text", () => {
    test("renders its content", () => {
        const { container } = render(<Text>content</Text>);

        expect(container).toHaveTextContent("content");
    });
});
