import { useState } from "react";

const Button = () => {

  const[count,setCount]=useState(0);

  function handleClick ()
  {     
    setCount (count+1);
    console.log(count);
    
  };

    return (
      <button onClick={handleClick}>
        Click Me
      </button>

    );
    
  };
  



export default Button;
