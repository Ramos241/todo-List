import React from "react";
import "../styles/TasksCard.css";

const TasksCard = ({ tasks, deleteTasks }) => {
  return (
    <>
      <div className="card">
        <h1 className="title-card">{tasks.title}</h1>
        <p className="descrip-card">{tasks.description}</p>
        <button className="button-card" onClick={() => deleteTasks(tasks.id)}>
          Eliminar
        </button>
      </div>
    </>
  );
};

export default TasksCard;
