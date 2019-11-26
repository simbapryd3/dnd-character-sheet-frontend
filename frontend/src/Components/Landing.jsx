import React, {useState} from 'react';

const statForm = {
    step: 1,
    username: "",
    charactername: "",
    dndClass: "",
    race: "",
    alignment: "",
    strength: "",
    dexterity: "",
    consitution: "",
    charisma: "",
    wisdom: "",
    intelligence: "",
    subscribe: false
}

function Landing (props) {
    const [state, setState] = useState(statForm)
    
    function handleChange (event) {
        const name = event.target.name;
        const val = event.target.value;
        const newState = state
        newState[name] = val; 

        setState(newState)
        console.log(state);
    }

    return (
        <form className="userForm">
            <label>
                Enter your username: 
                <input type="text" onChange={handleChange} name="username"/>
            </label>
            <label>
                Enter your email: 
                <input type="text" onChange={handleChange} name="email"/>
            </label>
            <label>
                Subscribe to our newsletter?
                <input type="checkbox" onChange={handleChange} name="subscribe"/>
            </label>
        </form>
    )
}




export default Landing;