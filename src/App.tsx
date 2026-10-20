import ListGroup from "./components/ListGroup";

function App() {
  let cities = ["Harare", "Bulawayo", "Mutare", "Gweru", "Masvingo"];
  const handleSelectItem = (city: string) => {
    console.log(city);
  };
  return (
    <div>
      <ListGroup
        cities={cities}
        heading="Cities"
        onSelectItem={handleSelectItem}
      />
    </div>
  );
}

export default App;
