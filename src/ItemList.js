import React from 'react'
import Item from './Item';

const ItemList = ({items, handleCheck, handleDelete}) => {
  return (
    <div>
      <ul className="flex flex-col gap-4">
        {items.map((item) => (
          <Item key={item.id} item={item} handleCheck={handleCheck} handleDelete={handleDelete} />
        ))}
      </ul>
    </div>
  )
}

export default ItemList
