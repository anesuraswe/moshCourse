import { useEffect, useState } from "react";

const ProductList = ({category}:{category: string}) => {
  const [products, setProducts] = useState<string[]>([]);

  useEffect(() => {
    console.log("Fetching products in ", category);
    setProducts(["CLothing", "Household"]);
  }, [category]);

  return <div></div>;
};

export default ProductList;

// import { useState } from "react";
// import ProductList from "./components/ProductList";

// function App() {
//   const [category, setCategory] = useState("");

//   return (
//     <div>
//       <select
//         className="form-select"
//         onChange={(event) => setCategory(event.target.value)}
//       >
//         <option value=""></option>
//         <option value="Clothing">Clothing</option>
//         <option value="Household">Household</option>
//       </select>
//       <ProductList category={category}/>
//     </div>
//   );
// }

// export default App;

