import axios from "axios";
import { useEffect, useState } from "react";

interface User {
  id: number;
  name: string;
}
function App() {
  const [users, setUsers] = useState<User[]>([]);

  useEffect(() => {
    axios
      .get<User[]>("https://jsonplaceholder.typicode.com/users")
      .then(res => setUsers(res.data))}, [])

  return <ul>
{users.map(user => <li key={user.id}>{user.name}</li>)}
  </ul>;
}

export default App;

// axios.get("https://jsonplaceholder.typicode.com/users");  returns a promise
// a promise is an object that holds the eventual result or failure of an asynchronous (long running) operation
