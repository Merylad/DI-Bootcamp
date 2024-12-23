import { useState } from 'react'
import Garage from './Garage'



const Car = (props) => {
    const {name, model} = props.info
    const [carColor, setCarColor] = useState ('grey')
    return (
        <>
            <h3>This car is a {name} </h3>
            <h3>This car is a {carColor} {model} </h3>
            <Garage size = 'small' />
        </>
    )
}

export default Car