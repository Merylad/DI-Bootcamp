import { useDispatch, useSelector } from "react-redux"
import { getData } from "./userSlice"
import { useEffect } from "react"

const UserData = () => {
    const users = useSelector(state => state.userReducer.users)
    const status = useSelector(state => state.userReducer.status)

    const dispatch = useDispatch()

    useEffect (()=> {
        dispatch(getData())
    }, [])

    if (status === 'loading') return <h3>Loading...</h3>
    if (status === 'failed') return <h3>Something went wrong, try again in a few minutes :)</h3>

    return (
        <>
        <h1>Users</h1>
        
        {users.map(user => {
            return(
                <div key={user.id} style={{border : '1px solid blue', padding : '10px', margin : '10px'}}>
                    <h3>{user.name}</h3>
                    <h4>{user.email}</h4>
                    <h6>{user.phone}</h6>
                </div>
            )
        })}
        

        </>
    )
}
export default UserData