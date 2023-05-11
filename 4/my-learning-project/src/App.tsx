// import Alert from "./components/Alert";
// import ListGroup from "./components/ListGroup";
// import Button from "./components/Botton";
// import Header from "./components/Header";

import { useState } from "react";
import ExpenseList from "./components/expense-tracker/components/ExpenseList";
import ExpenseFilter from "./components/expense-tracker/components/ExpenseFilter";
import Expenseform from "./components/expense-tracker/ExpenseForm";
// import categories from "./components/expense-tracker/categories";

// import categories from "./expense-tracker/categories";

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
  const [selectCategory, setSelectCategory] = useState("");

  const [expenses, setExpenses] = useState([
    { id: 1, description: "aaa", amount: 10, category: "Utilities" },
    { id: 2, description: "bbb", amount: 10, category: "Utilities" },
    { id: 3, description: "ccc", amount: 10, category: "Utilities" },
    { id: 4, description: "eee", amount: 10, category: "Utilities" },
  ]);

  const visableCategories = selectCategory
    ? expenses.filter((e) => e.category === selectCategory)
    : expenses;

  return (
    <div>
      <div className="mb-5">
        <Expenseform
          onSubmit={(expense) =>
            setExpenses([...expenses, { ...expense, id: expenses.length + 1 }])
          }
        />
      </div>
      <div className="mb-3">
        <ExpenseFilter
          onSelectCategories={(category) => setSelectCategory(category)}
        />
      </div>
      <ExpenseList
        expenses={visableCategories}
        onDelete={(id) => setExpenses(expenses.filter((exp) => exp.id !== id))}
      />
      {/* <ListGroup items={items} heading={heading} /> */}
      {/* <Alert onClose={() => setAlertVisable(false)}>hello world</Alert> */}
      {/* {alertVisable && (
        <Alert onClose={() => setAlertVisable(false)}>my Alert</Alert>
      )} */}
      {/* <Button onClick={() => setAlertVisable(true)} color="secondary ">
        my button
      </Button> */}
      {/* <Counter /> */}
      {/* <Header /> */}
    </div>
  );
};

export default App;
