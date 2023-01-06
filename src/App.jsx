import React, { useEffect, useState } from "react";
import TasksList from "./components/TasksList.jsx";
import TasForm from "./components/TaskForm.jsx";
import { tasks as data } from "./Tasks";
import "./styles/App.css";

function App() {
  const [tasks, setTasks] = useState([]);

  const createTask = (task) => {
    setTasks([
      ...tasks,
      {
        title: task.title,
        id: tasks.length,
        description: task.description,
      },
    ]);
  };

  function deleteTasks(taskId) {
    setTasks(tasks.filter((tasks) => tasks.id !== taskId));
  }

  useEffect(() => {
    setTasks(data);
  }, []);

  return (
    <>
      <section className="cont-general">
        <div className="container" >
          <TasForm createTask={createTask} />
          <TasksList tasks={tasks} deleteTasks={deleteTasks} />
        </div>
      </section>
    </>
  );
}

export default App;
