import { ReactElement, useEffect, useState } from "react";

interface UserI {
    id: string,
    name : string,
    username: string
    email : string
}

const UserList = ():ReactElement => {
    const [loading, setLoading] = useState<boolean>(false)
    const [error, setError] = useState<string | null>(null)
    const [users, setUsers] = useState<UserI[]>([])

    useEffect(():void=> {
        
            setLoading(true)
            getUsers()
        
    },[])

    const getUsers = async ():Promise<void> => {
        try {
            const response = await fetch ('https://jsonplaceholder.typicode.com/users')
            if(response.ok) {
                const data = await response.json()               
                setLoading(false) 
                setUsers(data)
            } else {
                throw new Error ('Failed to fetch the users')
            }
        } catch (error) {
            setLoading(false) 
            console.log('Fetch user error', error)
            setError('An error has occured, try again later')
        }
    }

    if(loading) return <h1>Loading...</h1>
    if(error) return <h1>{error}</h1>


    return (
        <>
            <h3>User List</h3>
            {users.map ((user :UserI)=> {
                return(
                    <div key={user.id}>
                        <h4>Name :{user.name}</h4>
                        <h5>Username :{user.username}</h5>
                        <h6>{user.email}</h6>
                    </div>
                )
            })}
        </>
    )
}

export default UserList