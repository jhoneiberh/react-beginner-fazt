import { useState, useContext } from "react";
import { TaskContext } from "../context/TaskContext";

function TaskForm() {
  const [title, setTitle] = useState("");
  const [description, setDescription] = useState("");

  const { createTask } = useContext(TaskContext);

  // console.log(value);

  const valor = useContext(TaskContext);
  console.log(valor);

  const handleSubmit = (event) => {
    event.preventDefault();

    console.log(title, description);

    createTask({
      title: title,
      description: description,
    });
    // actualizar estado a vacio
    setTitle("");
    setDescription("");
  };

  return (
    <div className="max-w-md mx-auto pt-4">
      
      <form onSubmit={handleSubmit} className="bg-zinc-900 p-10 mb-8 rounded-lg">
      <h1 className="text-center text-3xl uppercase text-white pb-8">Crea tu tarea</h1>
        <input className="bg-slate-500 p-3 rounded-lg w-full mb-3"
          placeholder="Escribe tu tarea"
          onChange={(e) => {
            setTitle(e.target.value);
          }}
          value={title}
          autoFocus
        />
        <textarea className="bg-slate-500 p-3 rounded-lg w-full mb-3"
          cols="30"
          rows="3"
          placeholder="Escribe la descripción de la tarea"
          onChange={(e) => {
            setDescription(e.target.value);
          }}
          value={description}
        ></textarea>
        <button className="bg-green-500 px-4 py-1 rounded-lg text-gray-50 text-lg hover:bg-green-700">Guardar</button>
      </form>
    </div>
  );
}

export default TaskForm;
