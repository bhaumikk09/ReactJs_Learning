import { useState } from "react";


export default function App() {

const [pizza,setPizza] = useState({
  name : 'Paneer',
  toppings : ['Mushroom']
});

const handleClick = () =>
{
  setPizza({...pizza,toppings:[...pizza.toppings,'Cheese']})
}


  return (
        <div>
          <h1>Menu Info:</h1>
          <p>Pizza Name : {pizza.name}</p>
          <p>Toppings :</p>
          <ul>
            {pizza.toppings.map((toppings,index) => (<li key={index}>{toppings}</li>))}
          </ul>

          <button onClick={handleClick}>change</button>
        </div>
   
   );
  
}
