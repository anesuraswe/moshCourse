import axios, { CanceledError } from "axios";
import { useEffect, useState } from "react";


interface User {
  id: number;
  name: string;
}
function App() {
  const [users, setUsers] = useState<User[]>([]);
  const [error, setError] = useState("");
  const [isLoading, setLoading] = useState(false);

  useEffect(() => {
    const controller = new AbortController();

    setLoading(true);
    axios
      .get<User[]>("https://jsonplaceholder.typicode.com/users", {
        signal: controller.signal,
      })
      .then((res) => {
        setUsers(res.data);
        setLoading(false);
      })
      .catch((err) => {
        if (err instanceof CanceledError) return;
        setError(err.message);
        setLoading(false);
      });
    // .finally(() => {
    //   setLoading(false);
    // }); Does not work with strict mode turned on - but is the most efficient way

    return () => controller.abort();
  }, []);

  const deleteUser = (user: User) => {
    const originalUsers = [...users]
    setUsers(users.filter(u => u.id !== user.id));

    axios
      .delete("https://jsonplaceholder.typicode.com/users" + user.id)
      .catch((err) => {
        setError(err.message);
        setUsers(originalUsers)
      });
  };

  return (
    <>
      {error && <p className="text-danger">{error} </p>}
      {isLoading && <div className="spinner-border"></div>}
      <ul className="list-group">
        {users.map((user) => (
          <li
            className="list-group-item d-flex justify-content-between"
            key={user.id}
          >
            {user.name}
            <button
              onClick={() => deleteUser(user)}
              className="btn btn-outline-danger"
            >
              Delete
            </button>
          </li>
        ))}
      </ul>
    </>
  );
}

export default App;

// axios.get("https://jsonplaceholder.typicode.com/users");  returns a promise
// a promise is an object that holds the eventual result or failure of an asynchronous (long running) operation
