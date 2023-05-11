"use strict";
// function my(mess: string): never {
//   while (true) {
//     mess + "";
//   }
// }
// console.log("hello");
Object.defineProperty(exports, "__esModule", { value: true });
// function myFunc<T>(data: T): T {
//   console.log(typeof data);
//   return data;
// }
// // myFunc("hello");
// console.log(myFunc<string>("null"));
var react_1 = require("react");
var Script = function (_a) {
    var name = _a.name;
    return <div>{name}</div>;
};
exports.default = Script;
