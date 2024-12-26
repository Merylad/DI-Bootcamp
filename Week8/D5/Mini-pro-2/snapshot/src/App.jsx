import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import {Routes, Route} from 'react-router'
import './App.css'
import NavBar from './components/Navbar'
import Search from './components/Search'

function App() {


  return (
    <>
      <NavBar />
      <Routes>
        <Route path = '/search/:element' element = {<Search/>}/>
      </Routes>
      
    </>
  )
}

export default App
