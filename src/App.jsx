import { useState } from 'react'
import './App.css'
import Header from './components/Header'
import SideBar from './components/SideBar'
import Footer from './components/Footer'

function App() {
  return (
    <>
      <Header></Header>
      <main>
        <SideBar></SideBar>
        <div className='content'>
          Content
        </div>
      </main>
      <Footer/>
    </>
  )
}

export default App
