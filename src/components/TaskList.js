import React, { useContext } from "react";
import { TaskListContext } from "../contexts/TaskListContext";
import Task from "./Task";
import Board from "./DragDrop/board";
import Card from "./DragDrop/Card";

const TaskList = () => {
  const { tasks } = useContext(TaskListContext);
  const activeTasks = tasks.filter((task) => {
    return task.todoStatus === "todo";
  });
  const progressTasks = tasks.filter((task) => {
    return task.todoStatus === "progress";
  });
  const doneTasks = tasks.filter((task) => {
    return task.todoStatus === "done";
  });
  return (
    <>
      <div className="div-1">
        <p className="btns-todo">Active</p>
        {tasks.length ? (
          <Board id="board-1" className="list">
            {activeTasks.map((task) => (
              <Card id={task.id} className="card" draggable="true">
                <Task task={task} key={task.id} />
              </Card>
            ))}
          </Board>
        ) : (
          <div className="list-2">
            <p>No Todos</p>
          </div>
        )}
      </div>
      <div className="div-2">
        <p className="btns-progress">In Progress</p>
        {tasks.length ? (
          <Board id="board-2" className="list">
            {progressTasks.map((task) => (
              <Card id={task.id} className="card" draggable="true">
                <Task task={task} key={task.id} />
              </Card>
            ))}
          </Board>
        ) : (
          <div className="list-2">
            <p>No Todos</p>
          </div>
        )}
      </div>
      <div className="div-3">
        <p className="btns-done">Done</p>
        {tasks.length ? (
          <Board id="board-2" className="list">
            {doneTasks.map((task) => (
              <Card id={task.id} className="card" draggable="true">
                <Task task={task} key={task.id} />
              </Card>
            ))}
          </Board>
        ) : (
          <div className="list-2">
            <p>No Todos</p>
          </div>
        )}
      </div>
    </>
  );
};

export default TaskList;
