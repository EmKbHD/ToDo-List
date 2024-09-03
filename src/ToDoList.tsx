import { useState } from "react";

function ToDoList() {
  const [tasks, setTasks] = useState([
    "Do my Bed",
    "Take a shower",
    "Eat Breakfast",
  ]);
  const [newTask, setNewTask] = useState("");

  function handleInputChange(event) {
    setNewTask(event.target.value);
  }

  function addTask() {
    // here we're adding a new task and if statement is to test the input area not to be empty
    if (newTask.trim() !== "") {
      setTasks((t) => [...t, newTask]);
      setNewTask("");
    }
  }

  function deleteTask(index: number) {
    const updatedTasks = tasks.filter((_, i) => i !== index);
    setTasks(updatedTasks);
  }

  function moveTaskUp(index: number) {
    if (index > 0) {
      const updatedTasks = [...tasks];
      // This code will swipe two elements within an array
      [updatedTasks[index], updatedTasks[index - 1]] = [
        updatedTasks[index - 1],
        updatedTasks[index],
      ];
      //set our tasks updating the array
      setTasks(updatedTasks);
    }
  }

  function moveTaskDown(index: number) {
    // If an element is already at the bottom we do not wanna move it any further here
    if (index < tasks.length - 1) {
      const updatedTasks = [...tasks];
      // This code will swipe two elements within an array but notice we added +1 instead here
      [updatedTasks[index], updatedTasks[index + 1]] = [
        updatedTasks[index + 1],
        updatedTasks[index],
      ];
      //set our tasks updating the array
      setTasks(updatedTasks);
    }
  }

  return (
    <div className="to-do-list">
      <h1>My ToDo List</h1>
      <div className="input-todo">
        <input
          type="text"
          placeholder="Add a new task..."
          value={newTask}
          onChange={handleInputChange}
        />
        <button className="add-button" onClick={addTask}>
          Add Task
        </button>
      </div>
      <ol>
        {tasks.map((task, index) => (
          <li key={index} className="list-todo">
            <span className="text">{task}</span>
            <button className="delete-button" onClick={() => deleteTask(index)}>
              Delete
            </button>
            <button className="move-button" onClick={() => moveTaskUp(index)}>
              Up
            </button>
            <button className="move-button" onClick={() => moveTaskDown(index)}>
              Down
            </button>
          </li>
        ))}
      </ol>
    </div>
  );
}
export default ToDoList;
