import { MouseEvent } from "react";
function ListGroup() {
  const cities = ["Harare", "Bulawayo", "Mutare", "Gweru", "Masvingo"];
  
  const handleClick = (event: MouseEvent) => console.log(event)
  return (
    <>
      <h1>List</h1>
      <ul className="list-group">
        {cities.map((city, index) => (
          <li
            className="list-group-item"
            key={city}
            onClick={handleClick}
          >
            {city}
          </li>
        ))}
      </ul>
    </>
  );
}
export default ListGroup;
