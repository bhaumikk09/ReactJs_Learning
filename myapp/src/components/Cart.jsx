import React from 'react'
import PropTypes from 'prop-types'

const Cart = ({cartItems}) => {
  return (
    <>
    <div>Cart</div>
    <ul>
    {cartItems.map(item => <li key={item}>{item}</li>)}
    </ul>
    </>
  )
}
Cart.propTypes={
    cartItems: PropTypes.string,
};

export default Cart