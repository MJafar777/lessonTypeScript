import { useState, useEffect } from "react";
import api_client from "./services/api_client";
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

  // get API function started
  useEffect(() => {
    setLoading(true);
    api_client
      .get<User[]>("/users")
      .then((response) => {
        setUsers(response.data);
        setLoading(false);
      })
      .catch((error) => {
        setError(error.message);
        setLoading(false);
      });
  }, []);

  // get API function finished

  // delete function started
  const deleteUser = (user: User) => {
    const originalUser = users && [...users];
    setUsers(users?.filter((u) => u.id !== user.id));

    api_client.delete("/users/" + user.id).catch((error) => {
      setError(error.message);
      setUsers(originalUser);
    });
  };
  // delete function finished

  // Add user function started
  const addUser = () => {
    const originalUser = users && [...users];

    const newUser = { id: 0, name: "Jafar" };

    setUsers(users && [newUser, ...users]);
    api_client
      .post("/users", newUser)
      .then(({ data: savedUser }) => setUsers(users && [savedUser, ...users]))
      .catch((err) => setError(err.message));
    setUsers(originalUser);
  };
  // Add user function finished

  // update function started
  const update = (user: User) => {
    const originalUser = users && [...users];
    const updatedUser = { ...user, name: user.name + "!" };
    setUsers(users?.map((u) => (u.id === user.id ? updatedUser : u)));

    api_client.patch("/users/" + user.id).catch((err) => {
      setError(err.message);
      setUsers(originalUser);
    });
  };
  // update function finished

  return (
    <div>
      <h1>Users json server</h1>

      {error && <p className="text-danger">{error}</p>}

      {loading && <div className="spinner-border"></div>}

      <button className="btn-primary btn mb-3" onClick={addUser}>
        Add
      </button>

      {users?.map((user) => {
        return (
          <div
            className="list-group-item d-flex justify-content-between"
            key={user.id}
          >
            <h2>{user.name}</h2>{" "}
            <div className="d-flex">
              <button
                className="btn-secondary btn mx-1"
                onClick={() => update(user)}
              >
                Update
              </button>
              <button
                className="btn btn-outline-danger"
                onClick={() => deleteUser(user)}
              >
                delete
              </button>
            </div>
          </div>
        );
      })}
    </div>
  );
};

export default App;
