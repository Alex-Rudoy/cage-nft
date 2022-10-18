export default {};
// import "@testing-library/jest-dom/extend-expect";
// import { fireEvent, render } from "@testing-library/react";
// import React from "react";
// import PasswordInput from "./PasswordInput";

// describe("Input", () => {
//   it("renders with minimum data", async () => {
//     render(<PasswordInput value="" name="test" />);

//     expect(document.getElementById("test")).toBeInTheDocument;
//   });

//   it("shows and hides password", async () => {
//     render(<PasswordInput value="" name="test" />);

//     const input = document.querySelector("input");
//     expect(input.type).toBe("password");

//     fireEvent.click(document.querySelector(".rightBlock"));
//     expect(input.type).toBe("text");

//     fireEvent.click(document.querySelector(".rightBlock"));
//     expect(input.type).toBe("password");
//   });

//   it("renders with custom class", () => {
//     render(<PasswordInput value="" name="test" className="testClass" />);
//     expect(document.querySelector(".testClass")).toBeInTheDocument;
//   });
// });
