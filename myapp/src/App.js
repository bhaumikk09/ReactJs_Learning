// import Form from "./components/Form";
import { useState } from "react";
import ExpenseList from "./expense-tracker/components/ExpenseList";


export default function App() {
  const [expenses,setExpenses] = useState([
  {id : 1,description : 'aaa',amount : 10, categories : 'grocerry'},
  {id : 2,description : 'bbb',amount : 10, categories : 'grocerry'},
  {id : 3,description : 'ccc',amount : 10, categories : 'grocerry'},
  {id : 4,description : 'ddd',amount : 10, categories : 'grocerry'},
])



  return (
        <div>
          <ExpenseList expenses={expenses} onDelete={(id)=> setExpenses(expenses.filter(e => e.id !== id))}/>
        </div>
   
   );
  
}
