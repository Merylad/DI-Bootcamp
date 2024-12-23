import { useState } from 'react'

import './App.css'

const styleDiv = {
  display : 'flex',
  flexWrap : 'wrap',
  justifyContent : 'space-around',
  gap : '20px',
  backgroundColor : 'orange',
  width : '400px',
  border : '1px solid grey',
  margin : '10px'

}

function App() {
  const [languages, setLanguages] = useState([
    {name: "Php", votes: 0},
    {name: "Python", votes: 0},
    {name: "JavaSript", votes: 0},
    {name: "Java", votes: 0}
  ])

  const handleVote = (name) => {
    const newLanguages = [...languages]
    const index = languages.findIndex (lang => lang.name === name)
    newLanguages[index].votes +=1

    setLanguages(newLanguages)
  }

  return (
    <>
    <h1>Vote Your Language!</h1>
      {
        languages.map ( (language) => {
          return (
            <div key = {language.name} style={styleDiv} >
              <p> {language.votes} </p>
              <p> {language.name} </p>
              <button onClick={()=>handleVote(language.name)}>Vote for me !</button>
            </div>
          )
        })
      }
    </>
  )
}

export default App
