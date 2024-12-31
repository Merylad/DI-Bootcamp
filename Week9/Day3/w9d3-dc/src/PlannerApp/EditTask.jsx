import { useDispatch } from "react-redux"
import { useRef } from "react"
import { editTask } from "./plannerAppSlice"

const EditTask = (props) => {
    const dispatch = useDispatch()
    const id = props.id
    const inputRef = useRef()
    return (
        <>
            <input type="text" ref={inputRef}/>
            <button onClick={()=>dispatch(editTask({id, name : inputRef.current.value }))}>Edit</button>
        </>
    )
}

export default EditTask