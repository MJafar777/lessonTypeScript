// import Alert from "./components/Alert";
import { useState } from "react";
// import ListGroup from "./components/ListGroup";
// import Button from "./components/Botton";
import Header from "./components/Header";

const App = () => {
  // const items = [
  //   "An item",
  //   "A second item",
  //   "A third item",
  //   "A fourth item",
  //   "And a fifth one",
  // ];

  // const heading = "List";

  // const [alertVisable, setAlertVisable] = useState(false);
  return (
    <div>
      {/* <ListGroup items={items} heading={heading} /> */}
      {/* <Alert onClose={() => setAlertVisable(false)}>hello world</Alert> */}

      {/* {alertVisable && (
        <Alert onClose={() => setAlertVisable(false)}>my Alert</Alert>
      )} */}

      {/* <Button onClick={() => setAlertVisable(true)} color="secondary ">
        my button
      </Button> */}
      {/* <Counter /> */}
      <Header />
    </div>
  );
};

export default App;
