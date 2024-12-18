const login = async (e) => {
    e.preventDefault()

    const username = e.target.username.value
    const password = e.target.password.value

    const data = {
        username, 
        password
    }

    try {
        const response = await fetch('http://localhost:3500/login', {
            method : 'POST',
            headers : {
                'content-type' : 'application/json'
            },
            body : JSON.stringify(data)
        })
        
        const result = await response.json()
        
        const p = document.getElementById('result')
        p.textContent = result
    } catch (error) {
        console.log(error)
    }
}