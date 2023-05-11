import { useState } from "react";

const Header = () => {
  const [click, setClick] = useState(false);
  console.log(click);
  const [change, setChange] = useState();
  const arr = ["home", "about", "contact"];

  const classes = {
    backgroundColor: "red",
    padding: "8px 12px",
  };
  const sty = {
    display: "flex",
    alignItems: "center",
    justifyContent: "space-around",
  };
  const blue = {
    backgroundColor: "blue",
  };
  const clicked = (e) => {
    setChange(e.target.outerText);
  };
  const bl = change;
  return (
    <div style={sty}>
      <h1 style={change == bl ? blue : classes} onClick={clicked}>
        home
      </h1>
      <h1 style={change == bl ? blue : classes} onClick={clicked}>
        about
      </h1>
      <h1 style={change == bl ? blue : classes} onClick={clicked}>
        contact
      </h1>
      <h1 style={change == bl ? blue : classes} onClick={clicked}>
        location
      </h1>
    </div>
  );
};

export default Header;
