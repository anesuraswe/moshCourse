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

