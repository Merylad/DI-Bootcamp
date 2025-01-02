import { useDispatch, useSelector } from "react-redux"
import { ageUpAsynch, ageDownAsynch } from "./ageSlice"

const AgeTracker = () => {
    const age = useSelector(state => state.ageReducer.age)
    const status = useSelector(state => state.ageReducer.status)
    const dispatch = useDispatch()
    return (
        <>
            <h1>Age Tracker</h1>
            <h3>{age}</h3>
            <button onClick={()=>dispatch(ageUpAsynch())}>UP</button>
            <button onClick={()=>dispatch(ageDownAsynch())}>DOWN</button> 
            {status === 'pending' ? <h2>Loading...</h2> : null}
            {status === 'failed' ? <h2>'Error please try again later'</h2> : null}
        </>
    )
}

export default AgeTracker