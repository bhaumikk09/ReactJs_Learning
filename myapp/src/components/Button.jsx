import React from 'react'
import { useState } from 'react';

const Button = () => {

  // const [count,setState] = useState(0);

  return (
    <button onClick={()=>console.log("Clicked")
    }>
      Click Me
    </button>
  );
}

export default Button
