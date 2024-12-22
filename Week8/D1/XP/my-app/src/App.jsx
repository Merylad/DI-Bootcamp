import "bootstrap/dist/css/bootstrap.min.css";
import './App.css'
import UserFavoriteAnimals from './UserFavoriteAnimals';
import Exercise3 from './Exercise3';
import BootstrapCard from './BootstrapCard'
import Planets from "./Planets";

const myelement = <h1>I Love JSX!</h1>
const sum = 5+5

const user = {
  firstName: 'Bob',
  lastName: 'Dylan',
  favAnimals : ['Horse','Turtle','Elephant','Monkey']
};

const celebrities = [
  {
      title: 'Bob Dylan',
      imageUrl: 'https://miro.medium.com/max/4800/1*_EDEWvWLREzlAvaQRfC_SQ.jpeg',
      buttonLabel: 'Go to Wikipedia',
      buttonUrl: 'https://en.wikipedia.org/wiki/Bob_Dylan',
      description:
          'Bob Dylan (born Robert Allen Zimmerman, May 24, 1941) is an American singer/songwriter, author, and artist who has been an influential figure in popular music and culture for more than five decades.',
  },
  {
      title: 'McCartney',
      imageUrl:
          'https://upload.wikimedia.org/wikipedia/commons/thumb/d/d6/Paul_McCartney_in_October_2018.jpg/240px-Paul_McCartney_in_October_2018.jpg',
      buttonLabel: 'Go to Wikipedia',
      buttonUrl: 'https://en.wikipedia.org/wiki/Paul_McCartney',
      description:
          'Sir James Paul McCartney CH MBE (born 18 June 1942) is an English singer, songwriter, musician, composer, and record and film producer who gained worldwide fame as co-lead vocalist and bassist for the Beatles.',
  },
]

const planets = ['Mars','Venus','Jupiter','Earth','Saturn','Neptune' ];

function App() {
 

  return (
    <>
      {/* <p>Hello World !</p>
      {myelement}
      <h3>React is {sum} times better with JSX! </h3>

      <h3>{user.firstName} </h3>
      <h3>{user.lastName} </h3>

      <UserFavoriteAnimals favAnimals = {user.favAnimals} />
      <Exercise3 /> */}

      {/* {celebrities.map(celebrity => {
        return <BootstrapCard info = {celebrity} />
      })} */}

      <ul class="list-group">
        {planets.map(item => {
          return <Planets planet = {item}/>
        })}
      </ul>
    </>
  )
}

export default App
