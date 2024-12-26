import { useState, useEffect } from "react";
import quotesDB from "../data/QuotesDB";
import backgroundColors from '../data/Colors'
import './Quote.css'

const Quote = () => {
    const [index, setIndex] = useState(0)
    const [colorIdx, setColorIdx] = useState(0)
    let randomQuote = quotesDB[index]
    let backColor = backgroundColors[colorIdx]

    const getRandomQuote = () => {
        while(true){
            const randomIdx = Math.floor(Math.random() * quotesDB.length)
            if(randomIdx != index){
                setIndex(randomIdx)
                break
            }
        }

        while(true){
            const i = Math.floor(Math.random() * backgroundColors.length)
            if(i != colorIdx){
                setColorIdx(i)
                break
            }
        } 

    }

    return(
        <>
            <section style={{ backgroundColor: backColor, height: "100vh" }}>
                <div className="card" style={{color : backColor}}>
                    <h1>"{randomQuote.quote}"</h1>
                    <h5>{randomQuote.author != '' ? `-${randomQuote.author}-` : '-Unknown- '}</h5>
                    <button onClick={()=>getRandomQuote()} style={{backgroundColor: backColor}}>New Quote</button>
                </div>
            </section>
        </>
    )
}

export default Quote