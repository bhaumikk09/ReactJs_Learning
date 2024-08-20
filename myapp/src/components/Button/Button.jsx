import { useState } from "react";
import "./Button.css";

const Button = () => {

  const[count,setCount]=useState(0);

  function handleClick ()
  {     
    setCount (count+1);
    console.log(count);
    
  };

    return (
      <button className="btn" onClick={handleClick}>
        Click Me
      </button>

    );
    
  };
  



export default Button;
