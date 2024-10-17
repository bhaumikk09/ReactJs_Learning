// import Form from "./components/Form";
import { useState } from "react";
import ExpenseList from "./expense-tracker/components/ExpenseList";
import ExpenseFilter from "./expense-tracker/components/ExpenseFilter";


export default function App() {

  const [selectedCategory,setSelectedCategory]=useState('')

  const [expenses,setExpenses] = useState([
  {id : 1,description : 'aaa',amount : 10, category : 'Utilities'},
  {id : 2,description : 'bbb',amount : 10, category : 'Groceries'},
  {id : 3,description : 'ccc',amount : 10, category : 'Groceries'},
  {id : 4,description : 'ddd',amount : 10, category : 'Utilities'},
])

const visibleExpenses = selectedCategory ? expenses.filter((e) => e.category === selectedCategory) : expenses ;

  return (
        <div>
          <ExpenseFilter onSelectCategory={category => setSelectedCategory(category)}></ExpenseFilter>
          <ExpenseList expenses={visibleExpenses} onDelete={(id)=> setExpenses(expenses.filter(e => e.id !== id))}/>
        </div>
   
   );
  
}
