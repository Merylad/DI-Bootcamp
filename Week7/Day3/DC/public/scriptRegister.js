const register = async (e) => {
    e.preventDefault ()

    const firstName = e.target.firstName.value
    const lastName = e.target.lastName.value
    const email = e.target.email.value
    const username = e.target.username.value
    const password = e.target.password.value

    const data = {
        firstName,
        lastName,
        email,
        username,
        password
    }

    try {
        const response = await fetch('http://localhost:3500/register', {
            method : 'POST',
            headers : {
                'content-type' : 'application/json'
            },
            body : JSON.stringify(data)
        })
        
        const result = await response.json()
        
        const p = document.getElementById('results')
        p.textContent = result
    } catch (error) {
        console.log(error)
    }
}