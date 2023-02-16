import "../Task.css";
import { useState } from "react";
import { Button, Input } from "antd";
import { useContext } from "react";
import TasksContext from "../../../contextapi/tasks-context";

const TaskCreate = ({ task, handleViewUpdate }) => {
  const [id, setId] = useState(task ? task.id : 0);
  const [title, setTitle] = useState(task ? task.taskTitle : "");
  const [taskDesc, setTaskDesc] = useState(task ? task.taskDesc : "");
  const [titleStatus, setTitleStatus] = useState("");
  const [titleStatusPlaceHolder, setTitleStatusPlaceHolder] =
    useState("Başlık Giriniz..");
  const [descStatus, setDescStatus] = useState("");
  const [descStatusPlaceHolder, setDescStatusPlaceHolder] =
    useState("Açıklama Giriniz..");

  const { sendItemtoAPI, onMasterUpdateTask } = useContext(TasksContext);

  const handleChange = (a) => {
    setTitle(a.target.value);
    if (a.target.value.trim() === "") {
      setTitleStatus("error");
      setTitleStatusPlaceHolder("Başlık Boş Olamaz!");
    }
  };

  const handleTaskChange = (a) => {
    setTaskDesc(a.target.value);
    if (a.target.value.trim() === "") {
      setDescStatus("error");
      setDescStatusPlaceHolder("Açıklama Boş Olamaz!");
    }
  };

  const formSubmit = (event) => {
    event.preventDefault();

    if (title.trim() === "" || taskDesc.trim() === "") {
      console.log("boş");
    } else {
      sendItemtoAPI(title, taskDesc);
      setTitle("");
      setTaskDesc("");
    }
  };

  const updateSubmit = (event) => {
    event.preventDefault();
    onMasterUpdateTask(id, title, taskDesc);
    handleViewUpdate();
  };

  if (task == null) {
    return (
      <div className="taskCreate">
        <h3>Lütfen Task Ekleyiniz</h3>

        <form onSubmit={formSubmit} className="taskForm">
          <label className="task-label">Başlık:</label>
          <Input
            value={title}
            placeholder={titleStatusPlaceHolder}
            status={titleStatus}
            onChange={handleChange}
            className="taskTitle"
          />

          <label className="task-label">Açıklama:</label>
          <textarea
            value={taskDesc}
            placeholder={descStatusPlaceHolder}
            status={descStatus}
            onChange={handleTaskChange}
            rows={5}
            className="taskTitle"
          />

          <Button
            className="createButton"
            type="primary"
            size="large"
            onClick={formSubmit}
          >
            Oluştur
          </Button>
        </form>
      </div>
    );
  } else {
    return (
      <div className="updateTask">
        <h3>Lütfen Task Güncelleyiniz</h3>

        <form onSubmit={formSubmit} className="taskForm">
          <label className="task-label">Başlığı Düzenle:</label>
          <Input
            value={title}
            placeholder=""
            status={titleStatus}
            onChange={handleChange}
            className="taskTitle"
          />

          <label className="task-label">Açıklamayı Düzenle:</label>
          <textarea
            value={taskDesc}
            onChange={handleTaskChange}
            placeholder={descStatusPlaceHolder}
            status={descStatus}
            rows={5}
            className="taskTitle"
          />

          <Button
            className="createButton"
            type="primary"
            size="large"
            onClick={updateSubmit}
          >
            Güncelle
          </Button>
        </form>
      </div>
    );
  }
};

export default TaskCreate;
