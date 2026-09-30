function About() {
    return (
        <section className="about" id="about">

            <div className="about-visual">
                <div className="about-image">
                    <span>L</span>
                </div>

                <div className="about-badge">
                    <strong>8+</strong>
                    <span>Years of Beauty</span>
                </div>
            </div>

            <div className="about-content">
                <span className="section-label">OUR STORY</span>

                <h2>
                    Beauty that feels
                    <br />
                    <em>uniquely yours.</em>
                </h2>

                <p>
                    At Luna Beauty, we believe beauty is not about changing
                    who you are. It is about highlighting what already makes
                    you unique.
                </p>

                <p>
                    Our experienced beauty professionals combine modern
                    techniques with personalized care to create treatments
                    designed around you.
                </p>

                <div className="about-features">
                    <div>
                        <span>01</span>
                        <p>Premium Products</p>
                    </div>

                    <div>
                        <span>02</span>
                        <p>Expert Specialists</p>
                    </div>

                    <div>
                        <span>03</span>
                        <p>Personalized Care</p>
                    </div>
                </div>

                <a href="#services" className="text-link">
                    Discover Our Services →
                </a>
            </div>

        </section>
    );
}

export default About;