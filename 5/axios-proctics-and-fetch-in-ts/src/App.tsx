import axios from "axios";
import { useState, useEffect } from "react";

const App = () => {
  interface User {
    id: number;
    name: string;
    phone: string;
    usernames: string;
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

  return (
    <div>
      <h1>Users json server</h1>
      {error && <p className="text-danger">{error}</p>}
      {loading && <div className="spinner-border"></div>}
      {users?.map((user) => {
        return (
          <div
            style={{
              display: "flex",
              alignItems: "center",
              justifyContent: "space-between",
            }}
            key={user.id}
          >
            <h2>{user.name}</h2> <h3>{user.phone}</h3>
          </div>
        );
      })}
    </div>
  );
};

export default App;
