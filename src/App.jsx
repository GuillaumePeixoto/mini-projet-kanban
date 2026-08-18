import { useState } from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import "./App.css";
import Header from "./components/Header";
import SideBar from "./components/SideBar";
import Footer from "./components/Footer";
import Board from "./pages/Board";
import taskData from "./assets/data/tasksData.json";
import { Route, Routes } from "react-router-dom";
import About from "./pages/About";
import NotFound from "./pages/NotFoundPage";
import FormTask from "./pages/FormTask";

function App() {
  const [tasksData, setTasksData] = useState(taskData);

  const addTask = (element) => {
    setTasksData([...tasksData, element]);
  };

  const updateTask = (element) => {
    let copyOfTasks = taskData;
    let taskToUpdate = copyOfTasks.map((task) => task.id).indexOf(element.id);
    copyOfTasks[taskToUpdate] = element;
    setTasksData(copyOfTasks);
  };

  const deleteTask = (idElement) => {
    setTasksData(tasksData.filter((task) => task.id !== idElement));
  };

  const [draggedTaskId, setDraggedTaskId] = useState(null);

  function handleDragStart(taskId) {
    setDraggedTaskId(taskId);
  }

  function handleDrop(newStatus) {
    setTasksData((prevTasks) =>
      prevTasks.map((task) =>
        task.id === draggedTaskId ? { ...task, status: newStatus } : task,
      ),
    );
    setDraggedTaskId(null);
  }

  return (
    <>
      <Header></Header>
      <main>
        <SideBar></SideBar>
        <div className="content">
          <Routes>
            <Route
              path="/"
              element={
                <Board
                  tasks={tasksData}
                  onDelete={deleteTask}
                  onDragStart={handleDragStart}
                  onDrop={handleDrop}
                />
              }
            ></Route>
            <Route
              path="/addTask"
              element={<FormTask addTask={addTask} />}
            ></Route>
            <Route path="/About" element={<About />}></Route>
            <Route
              path="/update-task/:id"
              element={<FormTask tasks={tasksData} updateTask={updateTask} />}
            ></Route>
            <Route path="*" element={<NotFound />}>
              {" "}
            </Route>
          </Routes>
        </div>
      </main>
      <Footer />
    </>
  );
}

export default App;
