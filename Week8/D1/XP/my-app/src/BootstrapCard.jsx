const BootstrapCard = (props) => {
    const {title, imageUrl, buttonUrl, description} = props.info
    return (
        <>
            <div className="card m-5" style={{width: '30rem'}}>
                <img className="card-img-top" src={imageUrl} alt="Card image cap" />
                <div className="card-body">
                    <h5 className="card-title">{title} </h5>
                    <p className="card-text">{description} </p>
                    <a href={buttonUrl} class="btn btn-primary">Go to wikipedia</a>
                </div>
            </div>
        </>
    )
}

export default BootstrapCard