import { ListFormat } from "typescript";
import "./App.css";
import { useState } from "react";

export default function App() {
  const [items, setItem] = useState([
    { id: 1, name: "Buy Grocery", checked: true },
    { id: 2, name: "Make a TODO", checked: false },
    { id: 3, name: "Update today's assignments", checked: true },
  ]);

  return (
    <main>
      <ul>
        {items.map((item) => (
      <li>
      <input checked={item.checked} type="checkbox"/>
      <label>{item.name}</label>
        </li>
        ))}
        
      </ul>
    </main>
  );
}
