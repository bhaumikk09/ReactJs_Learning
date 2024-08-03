import { useState } from "react";

const Button = () => {

  const[count,setCount]=useState(0);

  function handleClick ()
  {
      
    setCount (count+1);

      

    };

    return (
      <>
      <button onClick={handleClick}>
        Click Me

      </button>
      <p>Clicked {count}</p>
      </>
    );
    
  };
  



export default Button;
