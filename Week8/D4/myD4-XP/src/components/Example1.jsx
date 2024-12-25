import data from '../data/data.json'

const Example1 = () => {
    return (
        <>
        <ul>
            {data.SocialMedias.map((url, i) => {
                return (
                    <li key={i}> {url} </li>
                )
            })}
        </ul>

        </>
    )
}

export default Example1