import { useEffect, useState } from "react";
import axios from "axios";

export default function Home() {
  const [tasks, setTasks] = useState([]);

  function loadTasks() {
    axios.get("http://localhost:3000/tasks").then((response) => {
      setTasks(response.data);
    });
  }

  useEffect(() => {
    loadTasks();
  }, []);

  function createNewTask() {
    const title = prompt("Task name?");

    if (title) {
      axios
        .post("http://localhost:3000/tasks/create", {
          title,
        })
        .then(() => {
          loadTasks();
        });
    }
  }

  function editTask(task) {
    const editedTitle = prompt("Edit?", task.title);

    if (editedTitle) {
      axios
        .put(`http://localhost:3000/tasks/update/${task.id}`, {
          title: editedTitle,
        })
        .then(() => {
          loadTasks();
        });
    }
  }

  function deleteTask(id) {
    if (confirm("Delete?")) {
      axios.delete(`http://localhost:3000/tasks/delete/${id}`).then(() => {
        loadTasks();
      });
    }
  }

  return (
    <main className="container mx-auto my-10 ">
      <button className="mb-2 btn btn-primary" onClick={createNewTask}>
        New task
      </button>
      {tasks.map((task) => (
        <div key={task.id} className="mb-2 shadow card bg-base-100">
          <div className="card-body">
            <div className="flex items-center">
              <div className="flex-1">{task.title}</div>
              <button
                className="btn btn-ghost btn-sm"
                onClick={() => editTask(task)}
              >
                Edit
              </button>
              <button
                className="btn btn-ghost btn-sm"
                onClick={() => deleteTask(task.id)}
              >
                Delete
              </button>
            </div>
          </div>
        </div>
      ))}
    </main>
  );
}
