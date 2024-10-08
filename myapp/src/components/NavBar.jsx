import React from 'react'
import PropTypes from 'prop-types';

const NavBar = ({cartItemsCount}) => {
  return (
    <div>NavBar : {cartItemsCount}</div>
  )
}
NavBar.propTypes={
    cartItemsCount: PropTypes.number.isRequired,
};

export default NavBar