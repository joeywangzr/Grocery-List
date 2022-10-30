// todo: formatting, edit task, add number of item, backend w/ individual users, figure out a better way to cut down the string lenghts

import React, { useState } from "react";

// components
import data from "./data.json";
import {Header, GroceryList, CompletedList, AddItem, PriorityList} from "./components";

function App() {
  const [groceryList, setGroceryList] = useState(data[0]);
  const [isSorted, setSorted] = useState(false); 

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
    copy = [...copy, { id: groceryList.length + 1, task: userInput, complete: false, priority: false, users: ["Joey"]} ];
    setGroceryList(copy);
  }

  const handleFilter = (id) => {
    let filtered = groceryList.filter(task => task.id !== Number(id));
    setGroceryList(filtered);
  }

  const handleSort = () => {
    setSorted(!isSorted);
  };

  // toggle task completion
  const handlePrio = (id) => {
    // call function on every element in array
    let prio = groceryList.map((task) => {
      // if id matches 
      return task.id === Number(id)
        // if true
        ? { ...task, priority: !task.priority }
        // if false
        : { ...task };
    });
    setGroceryList(prio);
  };
  
  return (
    <div className="App">
      <Header />
      <AddItem addTask={addTask}/>
      <PriorityList groceryList={groceryList} handleToggle={handleToggle} handleFilter={handleFilter} handlePrio={handlePrio} handleSort={handleSort} isSorted={isSorted}/>
      <GroceryList groceryList={groceryList} handleToggle={handleToggle} handleFilter={handleFilter} handlePrio={handlePrio} isSorted={isSorted}/>
      <CompletedList groceryList={groceryList} handleToggle={handleToggle} handleFilter={handleFilter} handlePrio={handlePrio}/>
    </div>
  );
}

export default App;
