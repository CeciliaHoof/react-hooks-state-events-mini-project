import React, { useState } from "react";
import CategoryFilter from "./CategoryFilter";
import NewTaskForm from "./NewTaskForm";
import TaskList from "./TaskList";

import { CATEGORIES, TASKS } from "../data";
console.log("Here's the data you're working with");
// console.log({ CATEGORIES, TASKS });

function App() {
  const [selectedCategory, setSelectedCategory] = useState("");
  const [tasksArr, setTaskArr] = useState(TASKS)
  const filterTasks = tasksArr.filter(task => 
    {if(selectedCategory === 'All'){return true}
    else if(selectedCategory === ''){return true}
    else {return task.category === selectedCategory}})
  
  function deleteItem(deleteObj){
    const taskToRender = tasksArr.filter(task => task.text !== deleteObj.text)
    setTaskArr(taskToRender)
  }

  function clickHandler(e){
    setSelectedCategory(e.target.id)
  }

  function submitTask(newTask){
    setTaskArr([...tasksArr, newTask])
  }


  return (
    <div className="App">
      <h2>My tasks</h2>
      <CategoryFilter categories={CATEGORIES} onSelect={clickHandler} selectedCategory={selectedCategory}/>
      <NewTaskForm categories={CATEGORIES} onTaskFormSubmit={submitTask}/>
      <TaskList tasks={filterTasks} onDelete={deleteItem}/>
    </div>
  );
}

export default App;
