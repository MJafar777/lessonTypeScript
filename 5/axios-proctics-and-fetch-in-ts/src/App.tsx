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

  useEffect(() => {
    axios
      .get<User[]>("https://jsonplaceholder.typicode.com/users")
      .then((response) => {
        setUsers(response.data);
      });
    return;
  }, []);

  return (
    <div>
      <h1>Users json server</h1>
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
