import { useState } from "react"
import './Calculator.css'

const Calculator = () => {
    const [num1, setNum1] = useState(0)
    const [num2, setNum2] = useState(0)
    const [result, setResult] = useState(0)
    const [errorMsg, setErrorMsg] = useState('')

    const handleSubmit = (e) => {
        e.preventDefault()
        const firstNum = Number(e.target.num1.value)
        const secondNum = Number(e.target.num2.value)
        const operation = e.target.operation.value

        if(isNaN(firstNum)||isNaN(secondNum)){
            setErrorMsg('Only numbers are accepted!')
        } else {
            setErrorMsg('')
            if (operation == ''){
                setErrorMsg('You need to chose an operation!')
            }
            if(operation === 'div' && secondNum === 0){
                setErrorMsg('You can not divide by 0!')
            } else {
                operation === 'add' ?
                setResult(firstNum + secondNum) :
                operation === 'sub' ?
                setResult(firstNum - secondNum) :
                operation === 'mult' ?
                setResult(firstNum*secondNum) :
                setResult(firstNum/secondNum)
            }
        }
    }

    return (
        <>
            <section>
                <h2>Operation with two numbers</h2>
                <form onSubmit={handleSubmit}>
                    <div id="inputs">
                        <input type="text"  defaultValue={0} name="num1" />
                        <input type="text"  defaultValue={0} name="num2" />
                    </div>
                <select name="operation" id="operation">
                    <option value="">-Select an operation-</option>
                    <option value="add">Addition</option>
                    <option value="sub">Substractiton</option>
                    <option value="mult">Multiplication</option>
                    <option value="div">Division</option>
                
                </select>
                <input type="submit" value={'Go!'} id="btn"/>
                </form>
                <div>
                    <p id="error">{errorMsg}</p>
                    <p id="result">{result}</p>
                </div>
            </section>
        </>
    )
}

export default Calculator