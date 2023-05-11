// function my(mess: string): never {
//   while (true) {
//     mess + "";
//   }
// }
// console.log("hello");

// function myFunc<T>(data: T): T {
//   console.log(typeof data);

//   return data;
// }
// // myFunc("hello");
// console.log(myFunc<string>("null"));
import React from "react";

type Props = {
  name: string;
};

const Script = ({ name }: Props): JSX.Element => {
  return <div>{name}</div>;
};

export default Script;
