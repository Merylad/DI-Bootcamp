import { useState , useEffect} from "react"


const Color = () => {
    const [favColor, setFavColor] = useState('red')
    useEffect( ()=> {
        alert ('useEffect reached')
        setFavColor('yellow')
    }, [])
    return(
        <>
            <h1>My favorite color is {favColor} </h1>
            <button onClick={()=>setFavColor('blue')} >Change color</button>
        </>
    )
}

export default Color