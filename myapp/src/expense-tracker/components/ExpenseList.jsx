import React from 'react'
import PropTypes from 'prop-types'

const ExpenseList = ({expenses,onDelete}) => {
  return (
    <table>
        <thead>
            <tr>
                <th>Description</th>
                <th>Amount</th>
                <th>Category</th>
                <th></th>
            </tr>
        </thead>
        <tbody>
          {expenses.map(expense => <tr key={expense.id}>
            <td>{expense.description}</td>
            <td>{expense.amount}</td>
            <td>{expense.category}</td>
            <td>
              <button onClick={()=> onDelete(expense.id)}>Delete</button>
            </td>
          </tr>)}
        </tbody>
        <tfoot>
          <tr>
            <td>Total</td>
            <td>${expenses.reduce((acc,expense)=>expense.amount + acc,0 ).toFixed(2)}</td>
            <td></td>
            <td></td>
          </tr>
        </tfoot>
    </table>
  )
}

const expense= PropTypes.shape({
  id : PropTypes.number.isRequired,
  description : PropTypes.string.isRequired,
  amount : PropTypes.number.isRequired,
  category : PropTypes.string.isRequired,
});

ExpenseList.propTypes =
{
  expenses : PropTypes.arrayOf(expense),
  onDelete : PropTypes.func.isRequired,
};

export default ExpenseList