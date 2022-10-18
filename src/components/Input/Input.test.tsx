export default {};
// import "@testing-library/jest-dom/extend-expect";
// import { fireEvent, render, screen } from "@testing-library/react";
// import React, { useState } from "react";
// import Input from "./Input";

// describe("Input", () => {
//   it("renders with minimum data", async () => {
//     render(<Input value="" name="test" />);

//     expect(document.getElementById("test")).toBeInTheDocument;
//     fireEvent.change(document.querySelector("input"), { target: { value: "qwe" } });
//   });

//   it("renders with floating label", async () => {
//     render(<Input value="" name="test" floatingLabel="test label" />);

//     expect(screen.getByText("test label")).toBeInTheDocument;
//   });

//   it("renders with placeholder", async () => {
//     render(<Input value="" name="test" placeholder="test placeholder" />);

//     expect(document.querySelector("input").placeholder).toBe("test placeholder");
//   });

//   it("renders with width", async () => {
//     render(<Input value="" name="test" width="lg" />);

//     expect(document.querySelector(".input")).toHaveClass("input_width_lg");
//   });

//   it("renders with height", async () => {
//     render(<Input value="" name="test" height="lg" />);

//     expect(document.querySelector(".input")).toHaveClass("input_height_lg");
//   });

//   it("renders with errorMessage", async () => {
//     render(<Input value="" name="test" errorMessage="test error" />);

//     expect(screen.getByText("test error")).toBeInTheDocument;

//     fireEvent.focus(document.querySelector("input"));
//     expect(screen.queryByText("test error")).toBeNull;

//     fireEvent.blur(document.querySelector("input"));
//     expect(screen.getByText("test error")).toBeInTheDocument;
//   });

//   it("renders with disabled", async () => {
//     render(<Input value="" name="test" disabled />);

//     expect(document.querySelector("input")).toBeDisabled();
//   });

//   it("renders with onChange", async () => {
//     const Wrapper: React.FC = () => {
//       const [value, setValue] = useState("");

//       const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => setValue(e.target.value);
//       return <Input name="test" value={value} onChange={handleChange} validator={/ /} />;
//     };

//     render(<Wrapper />);

//     const input = document.querySelector("input");
//     fireEvent.change(input, { target: { value: "qwe" } });

//     expect(input.value).toBe("qwe");
//   });

//   it("renders with onFocus", async () => {
//     const func = jest.fn();
//     render(<Input value="" name="test" onFocus={func} />);

//     fireEvent.focus(document.querySelector("input"));
//     expect(func).toBeCalledTimes(1);
//   });

//   it("renders with onBlur", async () => {
//     const func = jest.fn();
//     render(<Input value="" name="test" onBlur={func} />);

//     fireEvent.blur(document.querySelector("input"));
//     expect(func).toBeCalledTimes(1);
//   });

//   it("renders with rightBlock", async () => {
//     const func = jest.fn();
//     render(<Input value="" name="test" rightBlock={<div className="test"></div>} onClickRightBlock={func} />);

//     expect(document.querySelector(".rightBlock")).toBeInTheDocument;

//     fireEvent.click(document.querySelector(".rightBlock"));
//     expect(func).toBeCalledTimes(1);
//   });

//   it("renders with rightBlock", async () => {
//     render(<Input value="" name="test" rightBlock={<div className="test"></div>} />);

//     expect(document.querySelector(".rightBlock")).toBeInTheDocument;

//     fireEvent.click(document.querySelector(".rightBlock"));
//     expect(document.querySelector("input")).toHaveFocus();
//   });

//   it("renders with validator function", async () => {
//     const func = jest.fn();
//     render(<Input value="" name="test" validator={func} />);

//     fireEvent.change(document.querySelector("input"), { target: { value: "qwe" } });
//     expect(func).toBeCalledTimes(1);
//   });

//   it("renders with custom class", () => {
//     render(<Input value="" name="test" className="testClass" />);
//     expect(document.querySelector(".testClass")).toBeInTheDocument;
//   });
// });
