import React from 'react'
import PropTypes from 'prop-types'

const ExpandableText = ({children}) => {
  return (
    <div>{children}</div>
  )
}
ExpandableText.propTypes={
    children : PropTypes.string,
}

export default ExpandableText