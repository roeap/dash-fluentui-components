import React from "react";
import { render } from "@testing-library/react";
import CounterBadge from "../CounterBadge";

describe("CounterBadge", () => {
    test("renders its content", () => {
        const { container } = render(<CounterBadge count={1} />);

        expect(container).toHaveTextContent("1");
    });
});
