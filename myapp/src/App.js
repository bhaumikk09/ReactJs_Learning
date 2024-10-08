import { useState } from "react";
import NavBar from "./components/NavBar";
import Cart from "./components/Cart";
// import Title from "./components/Title";

export default function App() {

const [cartItems,setCartItems] = useState(['Product1','Product2']);

  return (
        <div>
          <NavBar cartItemsCount={cartItems.length}/>
          <Cart cartItems={cartItems}/>
        </div>
   
   );
  
}
