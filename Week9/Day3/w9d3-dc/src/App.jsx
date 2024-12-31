import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import CalendarComponent from './PlannerApp/CalendarComponent'

function App() {
 

  return (
    <>
      <h1>Task Manager</h1>
      <CalendarComponent />
    </>
  )
}

export default App
