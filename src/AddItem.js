import React from 'react'
import { FaPlus } from 'react-icons/fa6'

const AddItem = () => {
    return (
        <form className='addForm'>
            <label htmlFor="addItem">Add Item</label>
            <input
                autoFocus
                type="text"
                id='addItem'
                placeholder='Add Item'
                required />
            <button
                type='submit'
                aria-label='Add Item'>
                <FaPlus />
            </button>
        </form>
    )
}

export default AddItem
