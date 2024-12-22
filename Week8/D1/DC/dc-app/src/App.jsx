import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import DemoCarousel from './DemoCaroussel'
import "bootstrap/dist/css/bootstrap.min.css";
import NavBar from './Components/Navbar'
import Card from './Components/Card'
import Contact from './Components/Contact'

const info = [
  {
    title : 'About the company',
    icon : 'bi bi-building'
  },
  {
    title : 'Our Values',
    icon : "bi bi-info-circle"
  },
  {
    title : 'Our Mission',
    icon : "bi bi-arrow-down-up"
  }

]
function App() {
 

  return (
    <>
    
   {/* <DemoCarousel /> */}
   <NavBar />

   {info.map(detail => {
    return <Card info = {detail}/>
   })}

   <Contact />
    </>
  )
}

export default App
