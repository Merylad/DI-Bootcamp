import { useState } from "react"

const Phone = () => {
    const [phoneInfo, setPhoneInfo] = useState({brand: "Samsung",
        model: "Galaxy S20",
        color: "black",
        year: 2020})
    
    const changeColor = () => {
        setPhoneInfo({...phoneInfo, color : 'blue'})
    }

    return (
        <>
            <h1>My phone is a {phoneInfo.brand} </h1>
            <h4>It is a {phoneInfo.color} {phoneInfo.model} from {phoneInfo.year} </h4>
            <button onClick={()=>changeColor()}>Change Color</button>
        </>
    )

}

export default Phone