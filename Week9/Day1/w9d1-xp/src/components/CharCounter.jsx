import { useState, useRef } from "react";

const CharCounter = () => {
    const [count, setCount] = useState(0)
    const inputRef = useRef()

    const handleInput = () => {
        const inputLength = inputRef.current.value.length
        setCount(inputLength)
    }
    return(
        <>
            <h1>Count : {count}</h1>
            <input ref = {inputRef} onInput={() => handleInput()} placeholder="Type Something..."/>
        </>
    )
}

export default CharCounter