import React, { useState, useContext, useEffect } from "react";
import { TaskListContext } from "../contexts/TaskListContext";

const TaskForm = () => {
  const { addTask, clearList, editTask, editItem } =
    useContext(TaskListContext);
  const [title, setTitle] = useState("");
  const [description, setDescription] = useState("");
  const [dueDate, setDueDate] = useState("");
  const [todoStatus, setTodoStatus] = useState(null);

  const handleSubmit = (e) => {
    e.preventDefault();
    if (!editItem) {
      addTask(title, description, dueDate, todoStatus);
      setTitle("");
      setDescription("");
      setDueDate("");
      setTodoStatus("");
    } else {
      editTask(title, description, dueDate, todoStatus, editItem.id);
    }
  };

  const handleTitle = (e) => {
    setTitle(e.target.value);
  };
  const handleDesc = (e) => {
    setDescription(e.target.value);
  };
  const handleDD = (e) => {
    setDueDate(e.target.value);
  };
  const handelStatus = (e) => {
    setTodoStatus(e.target.value);
    // console.log(todoStatus)
  };

  useEffect(() => {
    if (editItem) {
      setTitle(editItem.title);
      setDescription(editItem.description);
      setDueDate(editItem.dueDate);
      setTodoStatus(editItem.todoStatus);
      console.log(editItem);
    } else {
      setTitle("");
      setDescription("");
      setDueDate("");
      setTodoStatus("");
    }
  }, [editItem]);

  const style = {
    color: "#ccc",
  };
  const current = new Date();
  const date = `${current.getFullYear()}-${
    current.getMonth() + 1
  }-${current.getDate()}`;
  console.log(date);

  return (
    <form onSubmit={handleSubmit} className="form">
      <input
        type="text"
        placeholder="Add Todo..."
        value={title}
        onChange={handleTitle}
        required
        className="task-input"
      />
      <textarea
        type="text"
        placeholder="Add Description..."
        value={description}
        onChange={handleDesc}
        required
        className="task-input"
      />
      <input
        type="date"
        placeholder="Add Due Date..."
        value={dueDate}
        style={style}
        onChange={handleDD}
        min={`${date}`}
        max="2030-12-31"
        required
        className="task-input"
      />
      <select
        id="status"
        placeholder="status.."
        required
        name="status"
        className="task-input"
        onChange={handelStatus}
      >
        <option value="" disabled selected hidden>
          status
        </option>
        <option value="todo">Todo</option>
        <option value="progress">In Progress</option>
        <option value="done">Done</option>
      </select>

      <div className="buttons">
        <button type="submit" className="btn add-task-btn">
          {editItem ? "Edit Todo" : "Add Todo"}
        </button>
        <button className="btn clear-btn" onClick={clearList}>
          Clear Todos
        </button>
      </div>
    </form>
  );
};

export default TaskForm;

/*

*/
