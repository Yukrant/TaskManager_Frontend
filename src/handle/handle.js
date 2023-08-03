import axios from "axios";

const baseUrl = "https://taskmanager-backend-09rt.onrender.com";

const getAllTask = (setTask) => {
  axios.get(baseUrl).then(({ data }) => {
    console.log("data ---> ", data);
    setTask(data);
  });
};

const addTask = (title, setTitle, description, setDescription, setTask) => {
  axios
    .post(`${baseUrl}/save`, { title, description })
    .then((data) => {
      console.log(data);
      setTitle("");
      setDescription("");
      getAllTask(setTask);
    })
    .catch((err) => console.log(err));
};

const updateTask = (
  TaskId,
  title,
  description,
  setTask,
  setTitle,
  setDescription,
  setIsUpdating
) => {
  axios
    .post(`${baseUrl}/update`, { _id: TaskId, title, description })
    .then((data) => {
      setTitle("");
      setDescription("");
      setIsUpdating(false);
      getAllTask(setTask);
    })
    .catch((err) => console.log(err));
};

const deleteTask = (_id, setTask) => {
  axios
    .post(`${baseUrl}/delete`, { _id })
    .then((data) => {
      console.log(data);
      getAllTask(setTask);
    })
    .catch((err) => console.log(err));
};

export { getAllTask, addTask, updateTask, deleteTask };
