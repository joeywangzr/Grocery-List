import React, { useState } from "react";

// components
import data from "./data.json";
import {Header, GroceryList, CompletedList, AddItem} from "./components";

function App() {
  
  const [groceryList, setGroceryList] = useState(data);

  // toggle task completion
  const handleToggle = (id) => {
    // call function on every element in array
    let mapped = groceryList.map((task) => {
      // if id matches 
      return task.id === Number(id)
        // if true
        ? { ...task, complete: !task.complete }
        // if false
        : { ...task };
    });
    setGroceryList(mapped);
  };

  // form to add
  const addTask = (userInput ) => {
    let copy = [...groceryList];
    copy = [...copy, { id: groceryList.length + 1, task: userInput, complete: false }];
    setGroceryList(copy);
  }

  const handleFilter = (id) => {
    let filtered = groceryList.filter(task => task.id !== Number(id));
    setGroceryList(filtered);
  }

  return (
    <div className="App">
      <Header />
      <AddItem addTask={addTask}/>
      <GroceryList groceryList={groceryList} handleToggle={handleToggle} handleFilter={handleFilter}/>
      <CompletedList groceryList={groceryList} handleToggle={handleToggle} handleFilter={handleFilter}/>
    </div>
  );
}

export default App;
