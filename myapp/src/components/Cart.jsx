import React from 'react'
import PropTypes from 'prop-types'

const Cart = ({cartItems,onClear}) => {
  return (
    <>
    <div>Cart</div>
    <ul>
    {cartItems.map(item => <li key={item}>{item}</li>)}
    </ul>
    <button onClick={onClear}>Clear</button>
    </>
  )
}
Cart.propTypes={
    cartItems: PropTypes.string,
    onClear: PropTypes.func,
};

export default Cart