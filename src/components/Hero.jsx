function Hero() {
    return (
        <section className="hero" id="home">

            <div className="hero-content">

                <span className="hero-label">
                    BEAUTY & WELLNESS STUDIO
                </span>

                <h1>
                    Reveal Your
                    <br />
                    <em>Natural Beauty</em>
                </h1>

                <p>
                    Discover personalized beauty treatments designed
                    to make you look and feel your absolute best.
                </p>

                <div className="hero-buttons">
                    <a href="#booking" className="primary-button">
                        Book an Appointment
                    </a>

                    <a href="#services" className="secondary-button">
                        Explore Services
                    </a>
                </div>

                <div className="hero-info">
                    <div>
                        <strong>8+</strong>
                        <span>Years Experience</span>
                    </div>

                    <div>
                        <strong>2K+</strong>
                        <span>Happy Clients</span>
                    </div>

                    <div>
                        <strong>15+</strong>
                        <span>Beauty Services</span>
                    </div>
                </div>

            </div>

            <div className="hero-visual">
                <div className="image-placeholder">
                    <span>LUNA</span>
                    <small>Beauty Studio</small>
                </div>
            </div>

        </section>
    );
}

export default Hero;