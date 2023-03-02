import React from "react";
import { render } from "@testing-library/react";
import Divider from "../Divider";

describe("Divider", () => {
    test("renders its content", () => {
        const { container } = render(<Divider>content</Divider>);

        expect(container).toHaveTextContent("content");
    });
});
