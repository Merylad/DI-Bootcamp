
import './App.css'
import Greetings from './components/Greetings'
import Counter from './components/Counter'
import UserCards from './components/UserCard'
import UserList from './components/UserList'

function App() {
  

  return (
    <>
      <Greetings name = {'Raquel'} messageCount = {1}/>
      <Counter />
      <UserCards name={'John'} role={'Enginner'}/>
      <UserList />
    </>
  )
}

export default App
