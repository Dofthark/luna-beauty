function Footer() {
    return (
        <footer className="footer">

            <div className="footer-main">

                <div className="footer-brand">
                    <a href="#home" className="footer-logo">
                        LUNA
                        <span>BEAUTY</span>
                    </a>

                    <p>
                        Beauty that feels
                        uniquely yours.
                    </p>
                </div>

                <div className="footer-links">
                    <div>
                        <span>EXPLORE</span>

                        <a href="#home">Home</a>
                        <a href="#about">About</a>
                        <a href="#services">Services</a>
                    </div>

                    <div>
                        <span>DISCOVER</span>

                        <a href="#team">Our Team</a>
                        <a href="#gallery">Gallery</a>
                        <a href="#booking">Book Now</a>
                    </div>

                    <div>
                        <span>FOLLOW</span>

                        <a href="#contact">Instagram</a>
                        <a href="#contact">Pinterest</a>
                        <a href="#contact">Facebook</a>
                    </div>
                </div>

            </div>

            <div className="footer-bottom">
                <p>
                    © 2026 Luna Beauty. All rights reserved.
                </p>

                <p>
                    Portfolio Project
                </p>
            </div>

        </footer>
    );
}

export default Footer;