import { useState } from 'react'
import BuggyCounter from './components/BuggyCounter'
import ErrorBoundary from './components/ErrorBoundary'
import Color from './components/Color'
import FormComponent from './components/FormComponent'

function App() {

  const [name, setName] = useState('')
  const [lastName, setLastName] = useState('')
  const [age, setAge] = useState('')
  const [gender, setGender] = useState('')
  const [destination, setDestination] = useState('')
  const [nuts, setNuts] = useState(false)
  const [lactose, setLactose] = useState(false)
  const [vegan, setVegan] = useState(false)

  const formData = { name,lastName, age, gender, destination, nuts, lactose, vegan };
  const formHandlers = { setName, setLastName, setAge, setGender, setDestination, setNuts, setLactose, setVegan };


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

    {/* <Color /> */}
    <FormComponent formData={formData} formHandlers={formHandlers} />
    </>
    
  )
}

export default App
