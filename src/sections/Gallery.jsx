const galleryItems = [
    {
        id: 1,
        category: "Skin Care",
        className: "gallery-one"
    },
    {
        id: 2,
        category: "Hair Styling",
        className: "gallery-two"
    },
    {
        id: 3,
        category: "Makeup",
        className: "gallery-three"
    },
    {
        id: 4,
        category: "Nail Care",
        className: "gallery-four"
    },
    {
        id: 5,
        category: "Beauty Rituals",
        className: "gallery-five"
    }
];

function Gallery() {
    return (
        <section className="gallery" id="gallery">

            <div className="gallery-heading">

                <div>
                    <span className="section-label">
                        OUR WORK
                    </span>

                    <h2>
                        A glimpse of
                        <br />
                        <em>Luna Beauty.</em>
                    </h2>
                </div>

                <p>
                    Explore a selection of our beauty treatments,
                    transformations and signature experiences.
                </p>

            </div>

            <div className="gallery-grid">

                {galleryItems.map((item) => (
                    <div
                        className={`gallery-item ${item.className}`}
                        key={item.id}
                    >
                        <span className="gallery-number">
                            0{item.id}
                        </span>

                        <div className="gallery-overlay">
                            <span>LUNA BEAUTY</span>
                            <h3>{item.category}</h3>
                        </div>
                    </div>
                ))}

            </div>

        </section>
    );
}

export default Gallery;