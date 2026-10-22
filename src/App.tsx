import { useState } from "react";

function App() {
  const [pizza, setPizza] = useState({
    name: 'Spicy Pepperoni',
    toppings: ['Mushroom']
  });

  const handleClick = () => {
    setPizza({ ...pizza, toppings: [...pizza.toppings, 'Bacon'] });
   };

  return (
    <div>
      {}
      <button onClick={handleClick}>Click Me</button>
    </div>
  );
}

export default App;
