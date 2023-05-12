import axios from "axios";
import { useState, useEffect } from "react";

const App = () => {
  interface User {
    id: number;
    name?: string;
    phone?: string;
    usernames?: string;
  }

  const [users, setUsers] = useState<User[]>();
  const [error, setError] = useState<string>();
  const [loading, setLoading] = useState(false);

  useEffect(() => {
    setLoading(true);
    axios
      .get<User[]>("https://jsonplaceholder.typicode.com/users")
      .then((response) => {
        setUsers(response.data);
        setLoading(false);
      })
      .catch((error) => {
        setError(error.message);
        setLoading(false);
      });
  }, []);

  // delete function started
  const deleteUser = (user: User) => {
    const originalUser = users && [...users];
    setUsers(users?.filter((u) => u.id !== user.id));

    axios
      .delete("https://jsonplaceholder.typicode.com/users/" + user.id)
      .catch((error) => {
        setError(error.message);
        setUsers(originalUser);
      });
  };
  // delete function finished

  return (
    <div>
      <h1>Users json server</h1>
      {error && <p className="text-danger">{error}</p>}
      {loading && <div className="spinner-border"></div>}
      {users?.map((user) => {
        return (
          <div
            className="list-group-item d-flex justify-content-between"
            key={user.id}
          >
            <h2>{user.name}</h2> <h3>{user.phone}</h3>{" "}
            <button
              className="btn btn-outline-danger"
              onClick={() => deleteUser(user)}
            >
              delete
            </button>
          </div>
        );
      })}
    </div>
  );
};

export default App;
