import { useState } from "react";

const Counter = () => {
  const [click, setClick] = useState(false);
  const arr = [
    { name: "home", id: 0 },
    { name: "about", id: 2 },
    { name: "contact", id: 3 },
  ];
  const classes = {
    backgroundColor: "red",
    padding: "8px 12px",
  };
  const blue = {
    backgroundColor: "blue",
  };
  return (
    <>
      {arr.map((item, index) => {
        return (
          <ul key={index}>
            <li
              // onClick={index === item.id ? setClick(!click) : ""}
              style={click ? blue : classes}
              onClick={index == item.id ? setClick(!click) : false}
            >
              {item.name}
            </li>
          </ul>
        );
      })}
    </>
  );
};

export default Counter;
