import React from 'react'
import { FaTrashCan } from "react-icons/fa6";

const Item = ({item, handleCheck, handleDelete}) => {
  return (
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

            <FaTrashCan
            className="w-5 h-5 text-blue-600 hover:text-red-600 hover:w-6 hover:h-6 ease-in duration-200" 
            role="button" 
            tabIndex="0" 
            onClick={()=>{handleDelete(item.id)}} 
            // anonymous function to pass arguments in function 
            aria-label={`Delete ${item.item}`}

            />
          </li>
  )
}

export default Item
