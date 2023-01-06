import TasksCard from "./TasksCard";
import "../styles/tasksList.css";

const TasksList = ({ tasks, deleteTasks }) => {
  if (tasks.length === 0) {
    return <h1>No hay tareas</h1>;
  }

  return (
    <div className="row">
      <div className="list">
        {tasks.map((tasks) => (
          <TasksCard key={tasks.id} tasks={tasks} deleteTasks={deleteTasks} />
        ))}
      </div>
    </div>
  );
};
export default TasksList;
