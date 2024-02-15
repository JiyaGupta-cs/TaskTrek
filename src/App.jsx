import "./App.css";
import "./style.css";
import React, { useState } from "react";
import { FaTrashCan } from "react-icons/fa6";

export default function App() {
  const [items, setItems] = useState([
    { id: 1, name: "Buy Grocery", checked: true },
    { id: 2, name: "Make a TODO", checked: false },
    { id: 3, name: "Update today's assignments", checked: true },
  ]);
  const handleCheck = (id) => {
    const listItems = items.map((item) =>
      item.id == id ? { ...item, checked: !item.checked } : item,
    );
    setItems(listItems);
  };
 

  return (
    <main>
      <ul className="items">
        {items.map((item) => (
          <li className="m-5 text-3xl item" key={item.id}>
            <input
              onChange={() => {
                handleCheck(item.id);
              }}
              checked={item.checked}
              type="checkbox"
            />
            <label
              style={(item.checked)?{textDecoration:'line-through'}:null}
              className="text-6xl font-bold underline">{item.name}</label>

            <FaTrashCan role="button" tabIndex="0" />
          </li>
        ))}
      </ul>
    </main>
  );
}
