import { useEffect } from "react";

const connect = () => console.log("Connecting...");
const disconnect = () => console.log("Disconecting!");

function App() {
  useEffect(() => {
    connect();

    return () => disconnect(); // this is the clean-up function
    // the cleanup function should undo whatever the effect was doing
    // e.g. if we were showing a modal, it should close the modal
    
  });
  return <div></div>;
}

export default App;
