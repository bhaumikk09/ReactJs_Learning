import React from 'react'
import PropTypes from 'prop-types'
import categories from './categories'

const ExpenseFilter = ({onSelectCategory}) => {
  return (
    <select className="form-select" onChange={(event)=> onSelectCategory(event.target.value)}>
        <option value=''>All Categories</option>
        {categories.map(category => <option key={category} value={category}>{category}</option> )}
    </select>
    
  )
}

ExpenseFilter.propTypes={
    onSelectCategory: PropTypes.func.isRequired,
};

export default ExpenseFilter