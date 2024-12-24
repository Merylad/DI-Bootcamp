import './Form.css'

const FormComponent = ({ formData, formHandlers }) => {
    const { name, lastName, age, gender, destination, nuts, lactose, vegan } = formData;
    const { setName,setLastName, setAge, setGender, setDestination, setNuts, setLactose, setVegan } = formHandlers;

    
    return (
        <>
            <h1 id='sampleform'>Sample Form</h1>
            <form >
                
                <input type="text" placeholder="First Name" name="name" onChange={(e) => setName(e.target.value)}/>
                <input type="text" placeholder="Last Name" name="lastname" onChange={(e) => setLastName(e.target.value)}/>
                <input type="text" placeholder="age" name="age" onChange={(e) => setAge(e.target.value)} />
                <div className='radio'>
                <label>
                    <input type="radio" name="gender" value='male' onChange={(e) => setGender(e.target.value)}/> Male
                </label>
                <label>
                    <input type="radio" name="gender" value='female' onChange={(e) => setGender(e.target.value)} /> Female
                </label>
                </div>
                <p>Select your destination</p>
                <select name="destination" onChange={(e) => setDestination(e.target.value)} >
                <option value="" >-- Please Choose a destination --</option>
                    <option value="israel">Israel</option>
                    <option value="france">France</option>
                    <option value="canada">Canada</option>
                </select>
                <p>Dietary restrictions :</p>
                <div className='radio'>
                <label>
                    <input type="checkbox" name="nuts" onChange={(e) => setNuts(e.target.checked)}/> Nuts free
                 </label>
                <label>
                    <input type="checkbox" name="lactose" onChange={(e) => setLactose(e.target.checked)}/> Lactose free
                </label>
                <label>
                    <input type="checkbox" name="vegan" onChange={(e) => setVegan(e.target.checked)}/> Vegan
                </label>
                </div>
                <button>Submit</button>
            </form> <hr />
            <section id='answers'>
                <h1>Entered informations : </h1>
                <p>Your name : {name} {lastName} </p>
                <p>Your age : {age} </p>
                <p>Your gender : {gender} </p>
                <p>Your destination : {destination} </p>
                <p>Your diatary restrictions :</p>
                <p>**Nuts free : {nuts ? 'Yes' : 'No'}</p>
                <p>**Lactose free : {lactose ? 'Yes' : 'No'}</p>
                <p>**Vegan : {vegan ? 'Yes' : 'No'}</p>
            </section>
        </>
    )
}

export default FormComponent