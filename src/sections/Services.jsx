const services = [
    {
        number: "01",
        title: "Facial Treatments",
        description:
            "Personalized facial treatments designed to refresh, hydrate and restore your natural glow.",
        price: "From $55"
    },
    {
        number: "02",
        title: "Hair Styling",
        description:
            "Modern cuts, styling and professional care tailored to your personal look.",
        price: "From $45"
    },
    {
        number: "03",
        title: "Nail Care",
        description:
            "Elegant manicure and nail treatments with attention to every detail.",
        price: "From $30"
    },
    {
        number: "04",
        title: "Makeup",
        description:
            "Professional makeup for special occasions, events and unforgettable moments.",
        price: "From $60"
    },
    {
        number: "05",
        title: "Brow & Lash",
        description:
            "Brow shaping and lash services created to naturally enhance your features.",
        price: "From $35"
    },
    {
        number: "06",
        title: "Skin Rituals",
        description:
            "Relaxing skin rituals combining premium products with expert techniques.",
        price: "From $70"
    }
];

function Services() {
    return (
        <section className="services" id="services">

            <div className="section-heading">
                <div>
                    <span className="section-label">WHAT WE DO</span>

                    <h2>
                        Our signature
                        <br />
                        <em>beauty services.</em>
                    </h2>
                </div>

                <p>
                    Thoughtfully designed treatments focused on your
                    individual beauty, comfort and confidence.
                </p>
            </div>

            <div className="services-grid">

                {services.map((service) => (
                    <article className="service-card" key={service.number}>

                        <div className="service-top">
                            <span>{service.number}</span>
                            <span className="service-arrow">↗</span>
                        </div>

                        <h3>{service.title}</h3>

                        <p>{service.description}</p>

                        <div className="service-price">
                            {service.price}
                        </div>

                    </article>
                ))}

            </div>

        </section>
    );
}

export default Services;