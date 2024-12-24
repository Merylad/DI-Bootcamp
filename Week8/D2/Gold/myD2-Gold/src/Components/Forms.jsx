import { useState, useEffect } from "react"

const Forms = () => {
    const [username, setUsername] = useState('')
    const [age, setAge] = useState(null)
    const [errorMessage, setErrorMessage] = useState('')
    const [textArea, setTextArea] = useState('Text area initialized with some value')
    let header = ''
    if (username != '' & age != null){
        header = `Hello ${username} ${age}`
    }

    const handleClick = (e)=> {
        alert (`You are submitting ${e.target.name.value}`)
    }

    const handleAge = (e) => {
        const value = e.target.value; 
        setAge(value); 
        const isNumeric = /^[0-9]+$/.test(value); 
        if (!isNumeric & value !='') {
            setErrorMessage('Your age must be a number!');
        } else {
            setErrorMessage('');
    }
    }
    

    return (
        <>
        <form onSubmit={(e)=>handleClick(e)}>
            <h1>{header} </h1>
            <label htmlFor="name">Enter your name : </label> <br />
            <input type="text" id="name" name="name" onChange={(e)=> setUsername(e.target.value)} /> <br />
            <input type="submit" /> <br />
            <label htmlFor="age">Enter your age: </label> <br />
            <input type="text" id="age" name="age" onChange={(e)=> handleAge(e)} />
            <p> {errorMessage} </p>
            <textarea name="text" id="text" defaultValue={textArea}></textarea>
            <select name="selectedCar" defaultValue="volvo">
                <option value="volvo">Volvo</option>
                <option value="ford">Ford</option>
                <option value="mustang">Mustang</option>
            </select>
        </form>
        </>
    )
}

export default Forms