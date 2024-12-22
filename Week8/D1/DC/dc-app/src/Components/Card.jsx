const Card = (props) => {
    const {title, icon} = props.info
    return (
        <>
            <div className="container">
                <div className="card">
                    <div className="row g-0">
                        <div className="col-sm-4">
                        <i class={icon} style={{color : 'orange', fontSize: '150px'}}></i>
                        </div>
                        <div className="col-sm-8">
                            <div className="card-body">
                                <h5 className="card-title">
                                    <p
                                        className="link-dark text-decoration-none"
                                        href="#"
                                        target="_blank"
                                        rel="noopener noreferrer"
                                    >
                                        {title} 
                                    </p>
                                </h5>
                                <p className="card-text">
                                Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.
                                </p>
                               
                            </div>
                            
                        </div>
                    </div>
                </div>
            </div>
        </>
    );
};

export default Card;