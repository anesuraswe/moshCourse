// import { useState } from "react";

// function App() {
//   const [drink, setDrink] = useState({
//     title: "Cascade",
//     price: 1,
//   });
        // UPDATING THE PRICE
//   const handleClick = () => {
//     setDrink({ ...drink, price: 2 });
//   };
//   return (
//     <div>
//       <button onClick={handleClick}>Click me</button>
//       <p>{drink.price}</p>
//     </div>
//   );
// }

// export default App;


// NESTED STATE OBJECT
// import { useState } from "react";

// function App() {
//   const [customer, setCustomer] = useState({
//     name: "Deloris",
//     address: {
//       city: "Masvingo",
//       zipCode: 263,
//     },
//   });
//   // Updating the zipCode
//   const handleClick = () => {
//     setCustomer({ ...customer, address: { ...customer.address, zipCode: 44 } });
//   };
//   return (
//     <div>
//       <button onClick={handleClick}>Click me</button>
//       <p>{customer.address.zipCode}</p>
//     </div>
//   );
// }

// export default App;

// UPDATING STATE ARRAYS
/** import { useState } from "react";

function App() {
  const [customer, setCustomer] = useState({
    name: "Deloris",
    address: {
      city: "Masvingo",
      zipCode: 263,
    },
  });
  // Updating the zipCode
  const handleClick = () => {
    setCustomer({ ...customer, address: { ...customer.address, zipCode: 44 } });
  };
  return (
    <div>
      <button onClick={handleClick}>Click me</button>
      <p>{}</p>
    </div>
  );
}

export default App;
 */

// EXERCISE ONE (1)
// import { useState } from "react";

// function App() {
//   const [game, setGame] = useState({
//     id: 1,
//     player: {
//       name: "Anesu",
//     },
//   });

//   const handleClick = () => {
//     setGame({ ...game, player: { name: "Deloris" } });
//   };

//   return (
//     <div>
//       {game.player.name}
//       <button onClick={handleClick}>Click Me</button>
//     </div>
//   );
// }

// export default App;

// EXERCISE 2
/**
 * import { useState } from "react";
 
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
 
 */

//  EXERCISE 3
/**
 * import { useState } from "react";
 
 function App() {
   const [cart, setCart] = useState({
     discount: 0.1,
     items: [
       { id: 1, title: "Product 1", quantity: 1 },
       { id: 2, title: "Product 2", quantity: 1 },
     ],
   });
 
   const handleClick = () => {
     setCart({
       ...cart,
       items: cart.items.map((item) =>
         item.id === 1 ? { ...item, quantity: 2 } : item,
       ),
     });
   };
 
   return (
     <div>
       {}
       <button onClick={handleClick}>Click Me</button>
     </div>
   );
 }
 
 export default App;
 */