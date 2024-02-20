import React from 'react'
import ItemList from './ItemList';

const Content = ({items, handleCheck, handleDelete}) => {
  return (
    <div>
      {items.length?(
      <div className="flex justify-center items-center ">     
      <section className=" w-3/5">        
      <ItemList items={items} handleCheck={handleCheck} handleDelete={handleDelete} />      
      </section>
      </div>
      ): (<p className="mt-8 text-center">Add tasks to the list</p>) }
    </div>
  )
}

export default Content
