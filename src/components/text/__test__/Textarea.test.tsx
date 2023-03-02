import React from "react";
import { render } from "@testing-library/react";
import Textarea from "../Textarea";

describe("Textarea", () => {
    test("renders its content", () => {
        const { container } = render(<Textarea>content</Textarea>);

        expect(container).toHaveTextContent("content");
    });
});
