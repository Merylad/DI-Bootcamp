import { ReactElement } from "react";

type GreetingsProp = {
    name : string,
    messageCount : number
}

const Greetings = ({name, messageCount} : GreetingsProp) : ReactElement => {
    return (
        <>
            <h3>Hello {name} you have {messageCount} message !</h3>
        </>
    )
}

export default Greetings