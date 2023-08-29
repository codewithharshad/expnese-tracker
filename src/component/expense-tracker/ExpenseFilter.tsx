import React from 'react'

interface Props{
    onSelectedItem: (cat: string) => void;
}
const ExpenseFilter = ({onSelectedItem}:Props) => {
  return (
    <div>
        {/* <select className='form-select' onChange={(event)=>{onSelectedItem(event.target.value)}}> */}
        <select className='form-select' onChange={(event)=>{onSelectedItem(event.target.value)}}>
            <option value="">All</option>
            <option value="Travel">Travel</option>
            <option value="Utility">Utility</option>
            <option value="Rent">Rent</option>
            <option value="Food">Food</option>
        </select>
    </div>
  )
}

export default ExpenseFilter