import { useState } from "react";
import "./app.css";
import Task from "./components/Task";

import TaskHookForm from "./components/TaskHookForm";
import PeopleForm from "./components/PeopleForm";
import { initialTasks, initialTeam } from "./tasks";
import { toast } from "react-toastify";
import { nanoid } from "nanoid";

function App() {
  const [tasks, setTasks] = useState(initialTasks);
  const [team, setTeam] = useState(initialTeam);

  function handleTaskSubmit(yeniTask) {
    const newTask = { ...yeniTask, id: nanoid(5) };
    setTasks([newTask, ...tasks]);
    toast.success("Yeni görev oluşturuldu.");
  }

  function handlePeopleSubmit(yeniKisi) {
    setTeam([...team, yeniKisi]);
    toast.success("Yeni kişi oluşturuldu.");
  }

  function handleComplete(id) {
    const updatedTasks = tasks.map((t) => {
      if (t.id === id) {
        return {
          ...t,
          status: "yapıldı",
        };
      } else {
        return t;
      }
    });
    setTasks(updatedTasks);
    toast.success(`${id} id'li görev tamamlandı.`);
  }

  return (
    <div className="app">
      <div className="formColumn">
        <div className="form-container">
          <h2>Yeni Task</h2>
          <TaskHookForm kisiler={team} submitFn={handleTaskSubmit} />
        </div>

        <div className="form-container">
          <h2>Yeni Kişi</h2>
          <PeopleForm kisiler={team} submitFn={handlePeopleSubmit} />
        </div>
      </div>
      <div className="columns">
        <div className="column">
          <h2 className="column-title">Yapılacaklar</h2>
          <div className="column-list">
            {tasks
              .filter((t) => t.status === "yapılacak")
              .map((t) => (
                <Task key={t.id} taskObj={t} onComplete={handleComplete} />
              ))}
          </div>
        </div>
        <div className="column">
          <h2 className="column-title">Tamamlananlar</h2>
          <div className="column-list">
            {tasks
              .filter((t) => t.status === "yapıldı")
              .map((t) => (
                <Task key={t.id} taskObj={t} />
              ))}
          </div>
        </div>
      </div>
    </div>
  );
}

export default App;
