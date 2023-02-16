import Button from "@mui/material/Button";
import React from "react";
import Stack from "@mui/material/Stack";
import "../Task.css";
import { useState } from "react";
import TaskCreate from "./TaskCreate";
import TasksContext from "../../../contextapi/tasks-context";
import { useContext } from "react";

const SingleTask = ({ task }) => {
  const { deleteTask } = useContext(TasksContext);

  const handleDelete = () => {
    deleteTask(task);
  };

  const handleViewUpdate = () => {
    setIsEdit(!isEdit);
  };

  const [isEdit, setIsEdit] = useState(false);

  if (!isEdit) {
    return (
      <div className="singleTask border-solid">
        <label>Göreviniz</label>
        <label>{task.taskTitle}</label>
        <label>Açıklamanız</label>
        <label>{task.taskDesc}</label>
        <div className="singleTaskButtons">
          <Stack direction="row" spacing={2}>
            <Button
              onClick={handleDelete}
              variant="outlined"
              color="error"
              className="deleteButton"
            >
              Sil
            </Button>

            <Button
              onClick={handleViewUpdate}
              variant="contained"
              color="primary"
              className="updateButton"
            >
              Güncelle
            </Button>
          </Stack>
        </div>
      </div>
    );
  } else {
    return (
      <div>
        <TaskCreate task={task} handleViewUpdate={handleViewUpdate} />
      </div>
    );
  }
};

export default SingleTask;
