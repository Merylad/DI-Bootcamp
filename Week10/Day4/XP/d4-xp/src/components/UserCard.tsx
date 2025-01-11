import { ReactElement } from "react"

type UserCardsProps = {
    name ? : string,
    age ? : number,
    role ? : string
}

const UserCards = (props : UserCardsProps):ReactElement => {
    return (
        <>
            <h4>UserCards</h4>
            <p>{props.name ? `Hello ${props.name}` :`Hello Default Name` }</p>
            <p>{props.age ? `You are ${props.age}` :`You are 20` }</p>
            <p>{props.role ? `You are a ${props.role}` :`You are a developper` }</p>
        </>
    )
}

export default UserCards