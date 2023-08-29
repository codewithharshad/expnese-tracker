 
interface ExpenseProps{
    id: number;
    desc:  string;
    amount: number;
    cat: string;
}


interface Props{
    expenses: ExpenseProps[];
    onDelete: (id: number) => void;
}

const ExpenseTable = ({expenses, onDelete}:Props) => {
  return (
    <div>
        <table className="table table-bordered">
            <thead>
                <tr>
                    <th>Desc</th>
                    <th>Amount</th>
                    <th>Category</th>
                    <th> </th>
                </tr>
            </thead>
            <tbody>
                {expenses.map((expense)=>
                <tr key={expense.id}>
                    <td>{expense.desc}</td>
                    <td>{expense.amount}</td>
                    <td>{expense.cat}</td>
                    <td className="text-center">
                        <button className="btn btn-outline-danger"
                        onClick={()=>onDelete(expense.id)}
                        >Delete</button>
                    </td>
                </tr>)
                }
                
            </tbody>
            <tfoot>
                <tr>
                    <td>Total</td>
                    <td>$
                        {expenses.reduce((acc,expense)=> expense.amount+acc, 0).toFixed(2)}
                    </td>
                    <td></td>
                    <td></td>
                </tr>
            </tfoot>
        </table>
    </div>
  )
}

export default ExpenseTable