import { useEffect, useState } from "react"

const Hello = () => {
    const [msg, setMsg] = useState('')
    const [postRequest, setPostRequest] = useState('')
    useEffect(()=> {
        getHello()
    }, [])

    const getHello = async () => {
        try {
            const response = await fetch ('http://localhost:3000/api/hello')
            const data = await response.json()
            setMsg(data.message)
        } catch (error) {
            console.log(error)
        }
    }

    const handleSubmit = async (e) => {
        e.preventDefault()
        const client = e.target.client.value

        const data = {client}

        try {
            const response = await fetch ('http://localhost:3000/api/world', {
                method: 'POST',
                headers: {
                  'Content-Type': 'application/json',       
                },
                body: JSON.stringify(data) 
            })
            const answer = await response.json()
            setPostRequest(answer.message)
        } catch (error) {
            console.log(e)
        }
    }

    return (
        <>
            <h2>{msg} </h2>
            <h1>Post to server : </h1>
            <form onSubmit={handleSubmit}>
            <input type="text" placeholder="Write something..." name="client"/>
            <input type="submit" value='Submit' />
            </form>
            <h2>{postRequest} </h2>
        </>
    )
}

export default Hello