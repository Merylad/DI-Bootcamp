import { ReactElement } from "react";
import { useState } from "react";

const Counter = () :ReactElement => {
    const [counter, setCounter] = useState<number>(0)
    const [lastAction, setLastAction] = useState<string>('')

    const increment = () :void => {
        setCounter(counter+1)
        setLastAction('increment counter')
    }

    const decrement = () :void => {
        setCounter(counter-1)
        setLastAction('decrement counter')

    }

    console.log(lastAction)

    return (
        <>
            <h3>Counter</h3>
            <h3>{counter}</h3>
            <button onClick={increment}>+</button>
            <button onClick={decrement}>-</button>
        </>
    )
}

export default Counter