import { useState } from "react";

interface Props {
  cities: string[];
  heading: string
}

// import { type MouseEvent } from "react";
function ListGroup({cities, heading}: Props) {
  
  // Hook - data/ state will change over time
  // const arr = useState(-1)
  // arr[0] // variable (selectIndex)
  // arr[1] // updater function
  // Below is the typical implementation

  const [selectedIndex, setSelectedIndex] = useState(-1);

  // Event handler3
  // const handleClick = (event: MouseEvent) => console.log(event);
  return (
    <>
      <h1>{heading}</h1>
      <ul className="list-group">
        {cities.map((city, index) => (
          <li
            className={
              selectedIndex === index
                ? "list-group-item active"
                : "list-group-item"
            }
            key={city}
            onClick={() => {
              setSelectedIndex(index);
            }}
          >
            {city}
          </li>
        ))}
      </ul>
    </>
  );
}
export default ListGroup;
