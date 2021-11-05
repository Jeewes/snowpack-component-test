import React, { PureComponent } from "react";
import ReactDOM from "react-dom";

const response = [
  {
    shop: "Stockholm",
    date: "2021-11-05",
    status: "open",
  },
  {
    shop: "New York",
    date: "2021-11-05",
    status: "open",
  },
];

function List({ items }) {
  return (
    <ul>
      {items.map((item) => (
        <li>{item.shop}</li>
      ))}
    </ul>
  );
}

export default List;

ReactDOM.render(
  <div>
    "HELLO REACT" <List items={response} />
  </div>,
  document.getElementById("root")
);
