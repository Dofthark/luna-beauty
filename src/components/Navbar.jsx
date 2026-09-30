import { useState } from "react";

function Navbar() {
    const [menuOpen, setMenuOpen] = useState(false);

    const closeMenu = () => {
        setMenuOpen(false);
    };

    return (
        <header className="navbar">
            <a href="#home" className="logo" onClick={closeMenu}>
                LUNA
                <span>BEAUTY</span>
            </a>

            <nav className={`nav-links ${menuOpen ? "active" : ""}`}>
                <a href="#home" onClick={closeMenu}>Home</a>
                <a href="#about" onClick={closeMenu}>About</a>
                <a href="#services" onClick={closeMenu}>Services</a>
                <a href="#team" onClick={closeMenu}>Our Team</a>
                <a href="#gallery" onClick={closeMenu}>Gallery</a>
                <a href="#contact" onClick={closeMenu}>Contact</a>

                <a
                    href="#booking"
                    className="mobile-book-button"
                    onClick={closeMenu}
                >
                    Book Now
                </a>
            </nav>

            <a href="#booking" className="nav-button">
                Book Now
            </a>

            <button
                className={`menu-button ${menuOpen ? "active" : ""}`}
                onClick={() => setMenuOpen(!menuOpen)}
                aria-label="Toggle navigation menu"
            >
                <span></span>
                <span></span>
                <span></span>
            </button>
        </header>
    );
}

export default Navbar;