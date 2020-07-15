import React from "react";
import "./Listitems.css";

function ListItems(props) {
  const items = props.items;
  const listItems = items.map((item) => {
    return (
      <div className="list" key={item.key}>
        <p>
          <input
            type="text"
            id={item.key}
            value={item.text}
            onChange={(e) => {
              props.setUpdate(e.target.value, item.key);
            }}
          />
          <span onClick={() => props.deleteItem(item.key)}>DEL</span>
        </p>
      </div>
    );
  });
  return (
    // <h1>From ListItem.js</h1>
    <div>{listItems}</div>
  );
}
export default ListItems;
