import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import { createContext, useState } from 'react'
import SwitchTheme from './components/SwitchTheme'
import CharCounter from './components/CharCounter'

export const themeContext = createContext()

function App() {
  const [theme, setTheme] = useState('light')
  

  return (
    <>
      {/* <themeContext.Provider value={{theme, setTheme}}>
        <SwitchTheme />
      </themeContext.Provider> */}

      <CharCounter />
    </>
  )
}

export default App
