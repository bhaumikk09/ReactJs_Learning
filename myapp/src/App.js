import { useState } from "react";

export default function App() {
  const [drink, setDrink] = useState({
    title: "Coffee",
    price: 1,
  });

  const handleClick = () => {
    const newDrink = {
      title: drink.title,
      price: 2,
    };
    setDrink(newDrink);
  };
  return (
    <>
      {drink.price}
      <button onClick={handleClick}>Click here</button>
    </>
  );
}
