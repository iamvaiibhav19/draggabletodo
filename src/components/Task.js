import React, { useContext } from "react";
import { TaskListContext } from "../contexts/TaskListContext";

const Task = ({ task }) => {
  const { removeTask, findItem } = useContext(TaskListContext);
  console.log(task);

  const style1 = {
    color: "white",
  };

  const style2 = {
    color: "grey",
  };

  const style3 = {
    color: "skyblue",
  };
  return (
    <div className="list-item">
      <div className="combine">
        <div style={style1}>{task.title} </div>
        <div className="btnss">
          <button
            className="btn-delete task-btn"
            onClick={() => removeTask(task.id)}
          >
            <i className="fas fa-trash-alt"></i>
          </button>
          <button
            className="btn-edit task-btn"
            onClick={() => findItem(task.id)}
          >
            <i className="fas fa-pen"></i>
          </button>
        </div>
      </div>

      <div style={style2}>{task.description} </div>
      <div style={style3}>{task.dueDate} </div>
    </div>
  );
};

export default Task;
