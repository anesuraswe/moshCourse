import { useState } from "react";

function App() {
  const [game, setGame] = useState({
    id: 1,
    player: {
      name: "Anesu",
    },
  });

  const handleClick = () => {
    setGame({ ...game, player: { name: "Deloris" } });
  };

  return (
    <div>
      {game.player.name}
      <button onClick={handleClick}>Click Me</button>
    </div>
  );
}

export default App;
