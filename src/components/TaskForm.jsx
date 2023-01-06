import React, { useState } from "react";
import "../styles/TasksForm.css";
import Swal from "sweetalert2";

const TaskForm = ({ createTask }) => {
  const [title, setTitle] = useState("");
  const [description, setDescription] = useState("");

  const manejarInput = (e) => {
    setTitle(e.target.value);
  };

  const manejarTextarea = (e) => {
    setDescription(e.target.value);
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    if (title === '' || description === '') {
      Swal.fire({
        title: 'Algo salio mal!',
        text: 'NO PUEDES DEJAR CAMPOS VACIOS',
        icon: 'error',
        confirmButtonText: 'OK',
        confirmButtonColor: 'blue'
      })
    } else {
      createTask({
        title,
        description,
      });
      setTitle("");
      setDescription("");
    }
  };

  return (
    <div className="contenedor-form">
      <form onSubmit={handleSubmit}>
        <h1 className="h1">Crea tu tarea</h1>
        <input
          type="text"
          placeholder="Escribe tu tarea"
          onChange={manejarInput}
          value={title}
          autoFocus
        />
        <textarea
          placeholder="Description"
          onChange={manejarTextarea}
          value={description}
        ></textarea>
        <button>Guardar</button>
      </form>
    </div>
  );
};

export default TaskForm;
