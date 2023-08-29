import { useState } from "react"
import ExpenseTable from "./component/expense-tracker/ExpenseTable"
import ExpenseFilter from "./component/expense-tracker/ExpenseFilter"

 const App = () => {
   // cosnt [name, setName] = useState()
   const [slectedCat, setSelectedCat] = useState('')
  
   const [expense, setExpense] = useState([
      {id: 1, desc: 'Lunch time', amount: 10.888, cat: 'Food'},
      {id: 2, desc: 'To Delhi', amount: 10, cat: 'Travel'},
      {id: 3, desc: 'To Mysore', amount: 5, cat: 'Travel'},
      {id: 4, desc: 'Ebill of june', amount: 20, cat: 'Utility'},
      {id: 5, desc: 'Office rent', amount: 10, cat: 'Rent'},
      {id: 6, desc: 'Flat rent', amount: 10, cat: 'Rent'},
      {id: 7, desc: 'Swiggy', amount: 20, cat: 'Food'},
    ])
   
    //filteredExpense
    const filteredExpense = slectedCat ? expense.filter((ele)=> ele.cat === slectedCat) : expense;

 
  return (
     <div className="m-5">
     <div className="mb-3">
     <ExpenseFilter 
     onSelectedItem={(cat) => 
      setSelectedCat(cat)
   }
      />
     </div>
      <ExpenseTable expenses={filteredExpense} 
       onDelete={(id)=> setExpense(expense.filter(
         (ele)=> ele.id !== id))}
      />
     </div>
  )
}

export default App

 