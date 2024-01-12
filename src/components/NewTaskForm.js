import React, { useState } from "react";

function NewTaskForm({ categories, onTaskFormSubmit }) {
  const categoryOption = categories.filter(category => category !== 'All')
  const [newTask, setNewTask] = useState('')
  const [newCategory, setNewCategory] = useState('Code')

  function handleDetails(e){
    setNewTask(e.target.value)
  }

  function handleCategory(e){
    setNewCategory(e.target.value)
  }

  function handleSubmit(e){
    e.preventDefault();
    const newTaskObj = {
      text: newTask,
      category: newCategory
    }
    onTaskFormSubmit(newTaskObj)
  }
  
  return (
    <form className="new-task-form" onSubmit={handleSubmit}>
      <label>
        Details
        <input type="text" name="text" onChange={handleDetails}/>
      </label>
      <label>
        Category
        <select name="category" onChange={handleCategory}>
          {categoryOption.map((category, index) =>
          <option key={index+1}>{category}</option>)}
        </select>
      </label>
      <input type="submit" value="Add task" />
    </form>
  );
}

export default NewTaskForm;
