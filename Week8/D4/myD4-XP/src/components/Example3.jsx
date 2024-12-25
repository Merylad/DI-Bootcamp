import data from '../data/data.json'

const Example3 = () => {
    return (
        <>
        {data.Experiences.map((xp, idx) => {
            return(
                <div key={idx}>
                    <img src={xp.logo} alt="img" />
                    <a href={xp.url}> {xp.companyName} </a>
                    {xp.roles.map((r, i) => {
                        return(
                            <div key={i}>
                                <p>{r.title} </p>
                                <p>{r.startDate} {r.location} </p>
                                <p>{r.description} </p>
                            </div>
                        )
                    })}
                </div>
            )
        })}
        </>
    )
}

export default Example3