import React from 'react'
import PropTypes from 'prop-types'


const ExpenseFilter = ({onSelectCategory}) => {
  return (
    <select className="form-select" onChange={(event)=> onSelectCategory(event.target.value)}>
        <option value=''>All Categories</option>
        <option value='Groceries'>Groceries</option>
        <option value='Utilities'>Utilities</option>
        <option value='Entertainment'>Entertainment</option>
    </select>
    
  )
}

ExpenseFilter.propTypes={
    onSelectCategory: PropTypes.func.isRequired,
};

export default ExpenseFilter