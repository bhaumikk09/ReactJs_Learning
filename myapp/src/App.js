import { useState } from "react";

export default function App() {
  const [item, setItem] = useState(["matchbox", "knife"]);

  const handleClick = () => {
    setItem([...item, "biscuit"]);

    setItem(item.map((item) => (item === "knife" ? "cutter" : item)));
  };
  return (
    <>
      <ul>
        {item.map((item, index) => (
          // Map over the array and return a JSX element for each item
          <li key={index}>{item}</li>
        ))}
      </ul>
      <button onClick={handleClick}>Click here</button>
    </>
  );
}
