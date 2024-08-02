import { useState } from "react";


const Button ()=>
{
    const [count,setCount] = useState(0);


    return(
        <button onClick={()=>setCount(count+1)}>Click Me</button>
    );
};

export default Button;