import { useState } from 'react'

const Events = () => {
    const [isToggleOn, setIsToggleOn] = useState(true)

    const clickMe = () => {
        alert ('I was clicked!')
    }

    const handleKeyDown = (e) => {
        if (e.key === 'Enter'){
            alert (`The ENTER key was pressed, your input is : ${e.target.value}`)
        }
    }

    return (
        <>
            <button onClick={()=> clickMe()}>Click me !</button>
            <input onKeyDown={(e)=> handleKeyDown(e) } placeholder="Press the ENTER key!" />
            <button onClick={()=> setIsToggleOn(!isToggleOn)}> {isToggleOn ? 'ON' : 'OFF'} </button>
        </>
    )
}

export default Events