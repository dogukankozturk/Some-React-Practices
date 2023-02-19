import { createContext } from "react";
import { useState } from "react";
import axios from "axios";

const BASE_URL = "http://localhost:3006/tasks/";

const TasksContext = createContext();

function ContextProvider(props) {
  axios.defaults.baseURL = BASE_URL;
  axios.defaults.timeout = 1000;

  const [taskArray, setTaskArray] = useState([]);

  const sendItemtoAPI = async (title1, desc1) => {
    try {
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

      debugger;
      setTaskArray(createdTask);
    } catch (error) {
      debugger;
    }
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
    try {
      const response = await axios.get("");
      setTaskArray(response.data);
      console.log("Get Items");
    } catch (error) {
      console.log("Cant Get Items");
    }
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
      {props.children}
    </TasksContext.Provider>
  );
}

export { ContextProvider };
export default TasksContext;
