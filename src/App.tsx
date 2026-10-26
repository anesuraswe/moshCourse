import axios, { AxiosError } from "axios";
import { useEffect, useState } from "react";

interface User {
  id: number;
  name: string;
}
function App() {
  const [users, setUsers] = useState<User[]>([]);
  const [error, setError] = useState("");
  useEffect(() => {
    const fetchUsers = async () => {
      try {
        const res = await axios.get<User[]>("https://jsonplaceholder.typicode.com/xusers");
        setUsers(res.data);
      } catch (err) {
        setError((err as AxiosError).message);
      }
    };
    fetchUsers();
  }, []);

  return (
    <>
      {error && <p className="text-danger">{error} </p>}
      <ul>
        {users.map((user) => (
          <li key={user.id}>{user.name}</li>
        ))}
      </ul>
    </>
  );
}

export default App;

// axios.get("https://jsonplaceholder.typicode.com/users");  returns a promise
// a promise is an object that holds the eventual result or failure of an asynchronous (long running) operation

// get -> await promise -> res/ err
