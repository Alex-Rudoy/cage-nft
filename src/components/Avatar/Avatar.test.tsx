export default {};
// import React from 'react';
// import Avatar from "./Avatar.component.tsx";
// import { render, screen } from "@testing-library/react";
// import { hex2rgb } from "../../../utils/hex2rgb";

// describe("Avatar", () => {
//   it("renders with valid user", () => {
//     render(
//       <Avatar
//         user={{
//           id: "123",
//           email: "testmail@hikvision.ru",
//           firstName: "Андрей",
//           middleName: "Викторович",
//           lastName: "Орлов",
//           roles: [0, 1],
//           groups: [0],
//           territory: 0,
//           color: "#FFFFFF",
//           avatar: "",
//           regDate: new Date(2021, 5, 19).getTime(),
//           status: "active",
//         }}
//         size="32"
//         id="test"
//       />
//     );
//     expect(screen.getByText("АО")).toBeInTheDocument;
//     expect(document.getElementById("test").style.backgroundColor).toBe(
//       hex2rgb("#FFFFFF")
//     );
//     expect(document.getElementsByTagName("image")).toBeNull;
//   });

//   it("renders with avatar image", () => {
//     render(
//       <Avatar
//         user={{
//           id: "123",
//           email: "testmail@hikvision.ru",
//           firstName: "Андрей",
//           middleName: "Викторович",
//           lastName: "Орлов",
//           roles: [0, 1],
//           groups: [0],
//           territory: 0,
//           color: "#FFFFFF",
//           avatar: "/images/logo.png",
//           regDate: new Date(2021, 5, 19).getTime(),
//           status: "active",
//         }}
//         size="32"
//         id="test"
//       />
//     );
//     expect(screen.queryByText("АО")).toBeNull;
//     expect(document.getElementsByTagName("image")).toBeInTheDocument;
//   });

//   it("renders with empty name", () => {
//     render(
//       <Avatar
//         user={{
//           id: "123",
//           email: "testmail@hikvision.ru",
//           firstName: "",
//           middleName: "",
//           lastName: "",
//           roles: [0, 1],
//           groups: [0],
//           territory: 0,
//           color: "#FFFFFF",
//           avatar: "",
//           regDate: new Date(2021, 5, 19).getTime(),
//           status: "active",
//         }}
//         size="32"
//         id="test"
//       />
//     );
//     expect(screen.queryByText("АО")).toBeNull;
//     expect(document.querySelector("p")).toBeEmptyDOMElement;
//   });

//   it("renders with default color", () => {
//     render(
//       <Avatar
//         user={{
//           id: "123",
//           email: "testmail@hikvision.ru",
//           firstName: "Андрей",
//           middleName: "Викторович",
//           lastName: "Орлов",
//           roles: [0, 1],
//           groups: [0],
//           territory: 0,
//           color: "",
//           avatar: "",
//           regDate: new Date(2021, 5, 19).getTime(),
//           status: "active",
//         }}
//         size="32"
//         id="test"
//       />
//     );
//     expect(screen.getByText("АО")).toBeInTheDocument;
//     expect(document.getElementById("test").style.backgroundColor).toBe(
//       hex2rgb("#F2994A")
//     );
//   });

//   it("renders with custom class", () => {
//     render(
//       <Avatar
//         user={{
//           id: "123",
//           email: "testmail@hikvision.ru",
//           firstName: "Андрей",
//           middleName: "Викторович",
//           lastName: "Орлов",
//           roles: [0, 1],
//           groups: [0],
//           territory: 0,
//           color: "",
//           avatar: "",
//           regDate: new Date(2021, 5, 19).getTime(),
//           status: "active",
//         }}
//         size="32"
//         id="test"
//         className="testClass"
//       />
//     );
//     expect(document.querySelector(".testClass")).toBeInTheDocument;
//   });
// });
