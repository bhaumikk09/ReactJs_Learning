import { useState } from "react";

export default function App() {
  const [drink, setDrink] = useState({
    title: "Coffee",
    price: 1,
  });

  const handleClick = () => {
    setDrink({ ...drink, price: 3 });
  };
  return (
    <>
      {drink.price}
      <button onClick={handleClick}>Click here</button>
    </>
  );
}
