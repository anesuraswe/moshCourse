import { useState } from "react";

function App() {
  const [tags, setTags] = useState(["happy", "cheerful"]);
  // Updating the array
  const handleClick = () => {
    // add
    setTags([...tags, "exciting"]);

    // remove
    setTags(tags.filter((tag) => tag !== "happy"));

    // update
    setTags(tags.map((tag) => (tag === "happy" ? "happiness" : tag)));
  };
  return (
    <div>
      <button onClick={handleClick}>Click me</button>
      <p>{}</p>
    </div>
  );
}

export default App;
