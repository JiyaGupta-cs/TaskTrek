import "./App.css";
import React, { useState } from "react";
import { FaTrashCan } from "react-icons/fa6";
import Navbar from "./Navbar";

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

      <Navbar/>
      {items.length?(
      <div className="flex justify-center items-center ">
     
      <section className=" w-3/5">
        
      <ul className="flex flex-col gap-4">
        {items.map((item) => (
          <li className="bg-gray-300 p-4 flex justify-between items-center" key={item.id}>
            <input
            className="w-5 h-5"
              onChange={() => {handleCheck(item.id);}}
              checked={item.checked}
              type="checkbox"
            />
            <label
            className="text-lg"
              style={(item.checked)?{textDecoration:'line-through'}:null}
              onDoubleClick={() => {handleCheck(item.id);}}
              >{item.name}              
              </label>

            <FaTrashCan className="w-5 h-5 text-blue-600 hover:text-red-600 hover:w-6 hover:h-6 ease-in duration-200" role="button" tabIndex="0" onClick={()=>{handleDelete(item.id)}} 
            // anonymous function to pass arguments in function 
            />
          </li>
        ))}
      </ul>
      
      </section>
      </div>
      ): (<p className="mt-8 text-center">Add tasks to the list</p>) }
    </main>
  );
}
