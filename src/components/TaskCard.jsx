import { useContext } from "react";
import { TaskContext } from "../context/TaskContext";

function TaskCard({ task }) {
  const { deleteTask } = useContext(TaskContext);

  return (
    <div className="bg-gray-800 text-gray-100 p-3 capitalize rounded-md">
      {/* <p>{task.id}</p> */}
      <h1 className="text-xl font-semibold">{task.title}</h1>
      <p className="text-gray-300 text-sm">{task.description}</p>
      <button className="bg-red-500 rounded-md px-2 py-1 mt-4  hover:bg-green-500"
        onClick={() => {
          deleteTask(task.id);
        }}
      >
        Eliminar tarea
      </button>
    </div>
  );
}

export default TaskCard;
