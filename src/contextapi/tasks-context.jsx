import { createContext } from "react";
import { useState } from "react";
import axios from "axios";

const BASE_URL = "http://localhost:3006/tasks/";

const TasksContext = createContext();

function ContextProvider(dogukanProps) {
  axios.defaults.baseURL = BASE_URL;

  const [taskArray, setTaskArray] = useState([]);

  const sendItemtoAPI = async (title1, desc1) => {
    const response = await axios.post(BASE_URL, {
      id: Math.round(Math.random() * 999999),
      title: title1,
      desc: desc1,
    });
    const createdTask = [
      ...taskArray,
      {
        id: response.data.id,
        taskTitle: response.data.title,
        taskDesc: response.data.desc,
      },
    ];

    setTaskArray(createdTask);
  };

  const deleteTask = async (task) => {
    await axios.delete(`${task.id}`);
    const afterDeletion = taskArray.filter((deletedTask) => {
      return deletedTask.id !== task.id;
    });

    setTaskArray(afterDeletion);
  };

  const onMasterUpdateTask = async (id, title, taskDesc) => {
    const response = await axios.put(`${id}`, {
      taskTitle: title,
      taskDesc: taskDesc,
    });

    const updatedTask = taskArray.map((task) => {
      if (task.id === response.data.id) {
        task.id = response.data.id;
        task.taskTitle = response.data.taskTitle;
        task.taskDesc = response.data.taskDesc;
      }
      return task;
    });

    setTaskArray(updatedTask);
  };

  const getItems = async () => {
    const response = await axios.get("");

    setTaskArray(response.data);
  };

  const sharedItems = {
    sendItemtoAPI,
    getItems,
    onMasterUpdateTask,
    deleteTask,
    taskArray,
  };

  return (
    <TasksContext.Provider value={sharedItems}>
      {dogukanProps.children}
    </TasksContext.Provider>
  );
}

export { ContextProvider };
export default TasksContext;
