
import './App.css'
import UserFavoriteAnimals from './UserFavoriteAnimals';
import Exercise3 from './Exercise3';

const myelement = <h1>I Love JSX!</h1>
const sum = 5+5

const user = {
  firstName: 'Bob',
  lastName: 'Dylan',
  favAnimals : ['Horse','Turtle','Elephant','Monkey']
};

function App() {
 

  return (
    <>
      <p>Hello World !</p>
      {myelement}
      <h3>React is {sum} times better with JSX! </h3>

      <h3>{user.firstName} </h3>
      <h3>{user.lastName} </h3>

      <UserFavoriteAnimals favAnimals = {user.favAnimals} />
      <Exercise3 />
    </>
  )
}

export default App
