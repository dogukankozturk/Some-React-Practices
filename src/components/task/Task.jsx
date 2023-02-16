import React from "react";
import TaskCreate from "./components/TaskCreate";
import TaskList from "./components/TaskList";
import "./Task.css";
import { useEffect, useContext } from "react";
import TasksContext from "../../contextapi/tasks-context";

const Task = () => {
  
  const { getItems } = useContext(TasksContext);

  useEffect(() => {
    getItems();
  }, []);

  return (
    <div className="page">
      <div className="createTask">
        <TaskCreate />
        <h1>Görevler</h1>
      </div>
      <TaskList />
    </div>
  );
};

export default Task;
