import "./App.css";
import React, { useState } from "react";
import Navbar from "./Navbar";
import Content from "./Content";

export default function App() {
  const [items, setItems] = useState([
    { id: 1, name: "Buy Grocery", checked: true },
    { id: 2, name: "Make a TODO", checked: false },
    { id: 3, name: "Update today's assignments", checked: true },
  ]);
  const handleCheck = (id) => {
    const listItems = items.map((item) =>
      item.id == id ? { ...item, checked: !item.checked } : item );
      //It creates a new object using the spread syntax { ...item } which copies all properties from the original item.
    setItems(listItems);
    localStorage.setItem('shoppingList', JSON.stringify(listItems));
  };

  const handleDelete=(id)=>{
    const listItems=items.filter((item)=>item.id!=id);
    setItems(listItems);
    localStorage.setItem('shoppingList', JSON.stringify(listItems));
  }
 

  return (
    <main className="h-screen flex flex-col">

      <Navbar title={"TaskTrek2"}/>
      <Content items={items} handleCheck={handleCheck} handleDelete={handleDelete} />
    </main>
  );
}
