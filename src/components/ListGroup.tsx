function ListGroup() {
  const cities = ["Harare", "Bulawayo", "Mutare", "Gweru", "Masvingo"];
  return (
    <>
      <h1>List</h1>
      <ul className="list-group">
        {cities.map((city) => (
          <li key={city}>{city}</li>
        ))}
      </ul>
    </>
  );
}
export default ListGroup;
