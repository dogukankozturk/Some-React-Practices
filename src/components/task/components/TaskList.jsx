import React, { useContext } from "react";
import SingleTask from "./SingleTask";
import "../Task.css";
import TasksContext from "../../../contextapi/tasks-context";

const TaskList = () => {
  const { taskArray } = useContext(TasksContext);

  const createTask = (tasks) => {
    return (
      <div className="taskList">
        {taskArray.map((task) => {
          return <SingleTask key={task.id} task={task} />;
        })}
      </div>
    );
  };

  return <div className="allActiveTasks">{createTask(taskArray)}</div>;
};

export default TaskList;
