const Contact = () => {
    return (
        <div className="container my-5">
            <div className="row justify-content-center">
                <div className="col-md-8">
                    <div className="card shadow-sm">
                        <div className="card-body">
                            <h3 className="card-title text-center mb-4">Contact Us</h3>
                            <div className="row">
                                {/* Info Section */}
                                <div className="col-lg-4 mb-4 mb-lg-0" id="info">
                                    <p>Contact us and we will get back to you within 24 hours.</p>
                                    <i className="bi bi-geo-alt-fill"> Company name</i> <br />
                                    <i className="bi bi-phone"> +123456789</i> <br />
                                    <i className="bi bi-envelope"> company@example.com</i> <br />
                                </div>

                                {/* Form Section */}
                                <div className="col-lg-8">
                                    <form>
                                        <div className="mb-3">
                                            <label htmlFor="email" className="form-label">
                                                Email Address
                                            </label>
                                            <input
                                                type="email"
                                                className="form-control"
                                                id="email"
                                                placeholder="Enter your email"
                                                required
                                            />
                                        </div>
                                        <div className="mb-3">
                                            <label htmlFor="message" className="form-label">
                                                Message
                                            </label>
                                            <textarea
                                                className="form-control"
                                                id="message"
                                                rows="4"
                                                placeholder="Enter your message"
                                                required
                                            ></textarea>
                                        </div>
                                        <div className="d-grid">
                                            <button type="submit" className="btn btn-warning">
                                                Send Message
                                            </button>
                                        </div>
                                    </form>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Contact;