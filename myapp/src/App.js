import { useState } from "react";


export default function App() {

const [cart,setCart] = useState({
  discount : .1,
  items:[
    {id:1,title:'Product1',quantity:1},
    {id:2,title:'Product2',quantity:1}]
});

const handleClick = () =>
{
  setCart({...cart,items:cart.items.map(item => item.id ===1 ? {...item,quantity:item.quantity + 1 }: item)})
}


  return (
        <div>
          <h1>Cart Info:</h1>
          {/* <p>Cart Name : {pizza.name}</p> */}
          <p>Discount : {cart.discount * 100}%</p>
          <h2>Items :</h2>
          <ul>
            {cart.items.map(item => (<li key={item.id}>{item.title}-Quantity : {item.quantity}</li>))}
          </ul>

          <button onClick={handleClick}>change</button>
        </div>
   
   );
  
}
