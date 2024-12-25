import data from '../data/data.json'

console.log(data.Skills)

const Example2 = () => {
    return (
        <>
        {data.Skills.map((skill, i) => {
            return (
                <ul key={i}>{skill.Area}
                {skill.SkillSet.map((lang, idx)=> {
                    return (
                        <li key={idx}> {lang.Name} </li>
                    )
                })}
                </ul>
            )
        })}

        </>
    )
}

export default Example2