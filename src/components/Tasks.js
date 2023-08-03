import React from "react";
import { BiEdit } from "react-icons/bi";
import { AiFillDelete } from "react-icons/ai";

const Tasks = ({ title, description, updateMode, deleteTask }) => {
  return (
    <div className="container">
      <div className="task">
        <div className="task-body">
          <h5>{title}</h5>
          <div>
            <input
              className="check"
              type="checkbox"
              // checked={task.completed}
              // onChange={() => onCheckboxChange(task._id)}
            />
            <button onClick={updateMode} className="btn btn-primary">
              Edit <BiEdit />
            </button>
            <button onClick={deleteTask} className="btn btn-danger">
              Delete <AiFillDelete />
            </button>
          </div>
        </div>
        <div>
          <p>{description}</p>
        </div>
      </div>
    </div>
  );
};

export default Tasks;
