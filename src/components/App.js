import React, { useState } from "react";
import CategoryFilter from "./CategoryFilter";
import NewTaskForm from "./NewTaskForm";
import TaskList from "./TaskList";

import { CATEGORIES, TASKS } from "../data";
console.log("Here's the data you're working with");
// console.log({ CATEGORIES, TASKS });

function App() {
  const [selectedCategory, setSelectedCategory] = useState("");
  const [taskList, setTaskList] = useState(TASKS.map((task, index) => 
  ({...task, id: index + 1})))
  
  function clickHandler(e){
    setSelectedCategory(e.target.id)
    const displayCategory = taskList.filter(task => selectedCategory === 'All' ? task : task.category === selectedCategory)
  }

  function deleteItem(deleteObj){
    const taskToRender = taskList.filter(task => task.text !== deleteObj.text)
    setTaskList(taskToRender)
  }

  return (
    <div className="App">
      <h2>My tasks</h2>
      <CategoryFilter categories={CATEGORIES} onSelect={clickHandler} selected={selectedCategory}/>
      <NewTaskForm />
      <TaskList tasks={taskList} selectedCat={selectedCategory} onDelete={deleteItem}/>
    </div>
  );
}

export default App;
