import React from "react";
import { render } from "@testing-library/react";
import Checkbox from "../Checkbox";

describe("Checkbox", () => {
    test("renders its label", () => {
        const { container } = render(
            <Checkbox label="Checkbox label"></Checkbox>
        );

        expect(container).toHaveTextContent("Checkbox label");
    });
});
