import { useEffect, useState } from "react";
import Tasks from "./components/Tasks";
import { addTask, getAllTask, updateTask, deleteTask } from "./handle/handle";

function App() {
  const [Task, setTask] = useState([]);
  const [title, setTitle] = useState("");
  const [description, setDescription] = useState("");
  const [isUpdating, setIsUpdating] = useState(false);
  const [TaskId, setTaskId] = useState("");

  useEffect(() => {
    getAllTask(setTask);
  }, []);

  const updateMode = (_id, title, description) => {
    setIsUpdating(true);
    setTitle(title);
    setDescription(description);
    setTaskId(_id);
  };

  const onCheckboxChange = () => {};

  return (
    <div className="App">
      <div>
        <nav className="navbar navbar-expand-lg bg-body-tertiary">
          <div className="container-fluid">
            <h1>
              <a className="navbar-brand" href="/">
                Task Manager
              </a>
            </h1>
          </div>
        </nav>

        <div className="container-1">
          <h4 className="title">{isUpdating ? "Update " : "Add"} Task</h4>
          <input
            type="text"
            placeholder="Title"
            value={title}
            onChange={(e) => setTitle(e.target.value)}
            required
          />
          <textarea
            type="text"
            placeholder="Description"
            value={description}
            onChange={(e) => setDescription(e.target.value)}
            required
          />

          <button
            className="btn-add"
            onClick={
              isUpdating
                ? () =>
                    updateTask(
                      TaskId,
                      title,
                      description,
                      setTask,
                      setTitle,
                      setDescription,
                      setIsUpdating
                    )
                : () =>
                    addTask(
                      title,
                      setTitle,
                      description,
                      setDescription,
                      setTask
                    )
            }
          >
            {isUpdating ? "Update " : "Add"}
          </button>
        </div>

        <div className="list">
          {Task.map((item) => (
            <Tasks
              key={item._id}
              title={item.title}
              description={item.description}
              updateMode={() => updateMode(item._id, item.text)}
              deleteTask={() => deleteTask(item._id, setTask)}
              // onCheckboxChange={onCheckboxChange}
            />
          ))}
        </div>
      </div>
    </div>
  );
}

export default App;
