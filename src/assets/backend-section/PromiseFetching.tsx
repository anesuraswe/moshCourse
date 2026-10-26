import axios from "axios";
import { useEffect, useState } from "react";

interface User {
  id: number;
  name: string;
}
function App() {
  const [users, setUsers] = useState<User[]>([]);
const [error, setError] = useState('')
  useEffect(() => {
    axios
      .get<User[]>("https://jsonplaceholder.typicode.com/xusers")
      .then((res) => setUsers(res.data))
      .catch(err => setError(err.message))
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


// AWAIT AND TRY 
/**
 * import axios, { AxiosError } from "axios";
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
 */


// get -> await promise -> res/ err


// CANCELLING A FETCH REQUEST
/**
 * import axios, { CanceledError } from "axios";
import { useEffect, useState } from "react";

interface User {
  id: number;
  name: string;
}
function App() {
  const [users, setUsers] = useState<User[]>([]);
  const [error, setError] = useState("");
  useEffect(() => {
    const controller = new AbortController();
    axios
      .get<User[]>("https://jsonplaceholder.typicode.com/users", {
        signal: controller.signal,
      })
      .then((res) => setUsers(res.data))
      .catch((err) => {
        if (err instanceof CanceledError) return;
        setError(err.message);
      });

    return () => controller.abort();
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

 */