import { useState } from 'react'
import './App.css'
import BuggyCounter from './components/BuggyCounter'
import ErrorBoundary from './components/ErrorBoundary'
import Color from './components/Color'

function App() {


  return (
    <>
    {/* <h1>Simulation 1</h1> */}
    {/* <ErrorBoundary>
      <BuggyCounter />
      <BuggyCounter />
    </ErrorBoundary>
    <h1>Simulation 2</h1>
    <ErrorBoundary>
      <BuggyCounter/>
    </ErrorBoundary>
    <ErrorBoundary>
      <BuggyCounter/>
    </ErrorBoundary>
    <h1>Simulation 3</h1>
    <BuggyCounter /> */}

    <Color />
    </>
    
  )
}

export default App
