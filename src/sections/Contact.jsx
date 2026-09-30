function Contact() {
    return (
        <section className="contact" id="contact">

            <div className="contact-heading">
                <span className="section-label">
                    VISIT LUNA
                </span>

                <h2>
                    Come say
                    <br />
                    <em>hello.</em>
                </h2>
            </div>

            <div className="contact-grid">

                <div className="contact-item">
                    <span>01</span>

                    <h3>Studio</h3>

                    <p>
                        24 Rose Avenue
                        <br />
                        London, United Kingdom
                    </p>
                </div>

                <div className="contact-item">
                    <span>02</span>

                    <h3>Contact</h3>

                    <p>
                        hello@lunabeauty.com
                        <br />
                        +44 20 7946 0284
                    </p>
                </div>

                <div className="contact-item">
                    <span>03</span>

                    <h3>Opening Hours</h3>

                    <p>
                        Mon – Sat: 09:00 – 19:00
                        <br />
                        Sunday: Closed
                    </p>
                </div>

                <div className="contact-item">
                    <span>04</span>

                    <h3>Social</h3>

                    <p>
                        Instagram
                        <br />
                        Pinterest
                    </p>
                </div>

            </div>

        </section>
    );
}

export default Contact;