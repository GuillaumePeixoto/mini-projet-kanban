import { useState } from 'react'
import './App.css'
import Header from './components/Header'
import SideBar from './components/SideBar'
import Footer from './components/Footer'
import Board from './pages/Board'
import taskData from "./assets/data/tasksData.json"

function App() {

  const [tasksData, setTasksData] = useState(taskData);

  const deleteTask = (idElement) => {
    setTasksData(tasksData.filter((task) => task.id !== idElement))
  }

  return (
    <>
      <Header></Header>
      <main>
          <SideBar></SideBar>
          <div className='content'>
              <Board tasks={tasksData} onDelete={deleteTask} />
          </div>
      </main>
      <Footer/>
    </>
  )
}

export default App
