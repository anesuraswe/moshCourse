import ListGroup from "./components/ListGroup";

function App() {

  let cities = ["Harare", "Bulawayo", "Mutare", "Gweru", "Masvingo"];
  return (
    <div>
      <ListGroup cities={cities} heading="Cities"/>
    </div>
  );
}

export default App;
