import { useNavigate } from "react-router";
import Search from './Search';
import { Link } from 'react-router';



const NavBar = () => {    
    const navigate = useNavigate();
    const handleSubmit = (e) => {
        e.preventDefault()
        const input = e.target.userInput.value
        navigate(`/search/${input}`)
    }
    return(
        <>
            <h1>SnapShot</h1>
            <form onSubmit={handleSubmit}>
            <input type="text" name="userInput" placeholder="Search..." />
            <button>Search !</button>
            </form>
            <button><Link to={`/search/mountain`}>Mountain</Link></button>
            <button><Link to={`/search/beach`}>Beach</Link></button>
            <button><Link to={`/search/food`}>Food</Link></button>
            <button><Link to={`/search/dog`}>Dog</Link></button>
            
        </>
    )
}

export default NavBar