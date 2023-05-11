import "./ListGroup.css";
import styled from "styled-components";
import { useState } from "react";

interface Props {
  items: string[];
  heading: string;
}
const ListGroup = ({ items, heading }: Props) => {
  const [state, setstate] = useState(-1);

  if (items.length === 0) {
    return <p>not items</p>;
  }
  const message = items.length === 0 ? <p>not items</p> : null;
  const renderArr = items.map((item, index) => (
    <li
      key={index}
      onClick={() => {
        setstate(index);
      }}
      className={state === index ? "list-group-item active" : "list-group-item"}
    >
      {item}
    </li>
  ));
  return (
    <>
      <h1>{heading}</h1>
      {message}
      <ul className="list-group">{renderArr}</ul>
    </>
  );
};

export default ListGroup;
