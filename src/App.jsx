import "./App.css";

import Navbar from "./components/Navbar";
import Hero from "./components/Hero";
import Footer from "./components/Footer";

import About from "./sections/About";
import Services from "./sections/Services";
import Team from "./sections/Team";
import Gallery from "./sections/Gallery";
import Booking from "./sections/Booking";
import Contact from "./sections/Contact";

function App() {
    return (
        <div className="app">

            <Navbar />

            <main>
                <Hero />
                <About />
                <Services />
                <Team />
                <Gallery />
                <Booking />
                <Contact />
            </main>

            <Footer />

        </div>
    );
}

export default App;