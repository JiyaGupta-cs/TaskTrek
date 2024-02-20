import "./App.css";
import React, { useState, useEffect } from "react";
import Navbar from "./Navbar";
import Content from "./Content";
import AddItem from "./AddItem";
import SearchItem from "./SearchItem";

export default function App() {
  const [items, setItems] = useState(JSON.parse(localStorage.getItem("shoppingList")) || []); //if list is not present in the local storage it would give error
  const [newItem, setNewItem] = useState('');
  const [search, setSearch] = useState("");

  const addItem = (item) => {
    const id = items.length ? items[items.length - 1].id + 1 : 1;
    const myNewItem = { id, checked: false, name: item };
    const listItems = [...items, myNewItem];
    setItems(listItems);
    console.log(listItems)
  }

  const handleCheck = (id) => {
    const listItems = items.map((item) =>
      item.id == id ? { ...item, checked: !item.checked } : item);
    //It creates a new object using the spread syntax { ...item } which copies all properties from the original item.
    setItems(listItems);
  };

  const handleDelete = (id) => {
    const listItems = items.filter((item) => item.id != id);
    setItems(listItems);
  }

  const handleSubmit = (e) => {
    e.preventDefault();
    if (!newItem) return;
    addItem(newItem);
    setNewItem("");
  }

  useEffect(() => {
    localStorage.setItem('shoppingList', JSON.stringify(items));
  },[items])


  return (
    <main className="h-screen flex flex-col">

      <Navbar title={"TaskTrek"} />
      <AddItem newItem={newItem} setNewItem={setNewItem} handleSubmit={handleSubmit} />
      <SearchItem search={search} setSearch={setSearch} />
      <Content items={items.filter(item => ((item.name).toLowerCase()).includes(search.toLowerCase()))} handleCheck={handleCheck} handleDelete={handleDelete} />

    </main>
  );
}
