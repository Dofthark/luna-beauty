import { useState } from "react";

function Booking() {
    const [formData, setFormData] = useState({
        name: "",
        email: "",
        service: "",
        date: "",
        message: ""
    });

    const [submitted, setSubmitted] = useState(false);

    const handleChange = (event) => {

        const { name, value } = event.target;

        setFormData({
            ...formData,
            [name]: value
        });
    };
    const handleDateChange = (event) => {
        let value = event.target.value.replace(/\D/g, "");

        if (value.length > 8) {
            value = value.slice(0, 8);
        }

        if (value.length > 4) {
            value =
                value.slice(0, 2) +
                "/" +
                value.slice(2, 4) +
                "/" +
                value.slice(4);
        } else if (value.length > 2) {
            value =
                value.slice(0, 2) +
                "/" +
                value.slice(2);
        }

        setFormData({
            ...formData,
            date: value
        });
    };

    const handleSubmit = (event) => {
        event.preventDefault();

        setSubmitted(true);

        setFormData({
            name: "",
            email: "",
            service: "",
            date: "",
            message: ""
        });
    };

    return (
        <section className="booking" id="booking">

            <div className="booking-intro">
                <span className="section-label">
                    BOOK YOUR VISIT
                </span>

                <h2>
                    Your beauty moment
                    <br />
                    <em>starts here.</em>
                </h2>

                <p>
                    Choose your preferred treatment and date.
                    Our team will contact you to confirm your appointment.
                </p>

                <div className="booking-details">

                    <div>
                        <span>01</span>
                        <p>
                            Select your preferred
                            beauty service.
                        </p>
                    </div>

                    <div>
                        <span>02</span>
                        <p>
                            Choose the date that
                            works for you.
                        </p>
                    </div>

                    <div>
                        <span>03</span>
                        <p>
                            We will contact you
                            to confirm your visit.
                        </p>
                    </div>

                </div>
            </div>

            <div className="booking-form-container">

                {submitted && (
                    <div className="success-message">
                        <span>✓</span>

                        <div>
                            <strong>Appointment request received.</strong>
                            <p>We will contact you shortly.</p>
                        </div>
                    </div>
                )}

                <form
                    className="booking-form"
                    onSubmit={handleSubmit}
                >

                    <div className="form-group">
                        <label htmlFor="name">YOUR NAME</label>

                        <input
                            id="name"
                            type="text"
                            name="name"
                            placeholder="Olivia Smith"
                            value={formData.name}
                            onChange={handleChange}
                            required
                        />
                    </div>

                    <div className="form-group">
                        <label htmlFor="email">EMAIL ADDRESS</label>

                        <input
                            id="email"
                            type="email"
                            name="email"
                            placeholder="olivia@example.com"
                            value={formData.email}
                            onChange={handleChange}
                            required
                        />
                    </div>

                    <div className="form-group">
                        <label htmlFor="service">SERVICE</label>

                        <select
                            id="service"
                            name="service"
                            value={formData.service}
                            onChange={handleChange}
                            required
                        >
                            <option value="">
                                Select a service
                            </option>

                            <option value="Facial Treatments">
                                Facial Treatments
                            </option>

                            <option value="Hair Styling">
                                Hair Styling
                            </option>

                            <option value="Nail Care">
                                Nail Care
                            </option>

                            <option value="Makeup">
                                Makeup
                            </option>

                            <option value="Brow & Lash">
                                Brow & Lash
                            </option>

                            <option value="Skin Rituals">
                                Skin Rituals
                            </option>
                        </select>
                    </div>

                    <div className="form-group">
                        <label htmlFor="date">
                            PREFERRED DATE
                        </label>

                        <input
                            id="date"
                            type="text"
                            name="date"
                            placeholder="DD/MM/YYYY"
                            value={formData.date}
                            onChange={handleDateChange}
                            maxLength="10"
                            required
                        />
                    </div>

                    <div className="form-group full-width">
                        <label htmlFor="message">
                            MESSAGE
                        </label>

                        <textarea
                            id="message"
                            name="message"
                            placeholder="Tell us anything we should know..."
                            value={formData.message}
                            onChange={handleChange}
                            rows="4"
                        />
                    </div>

                    <button
                        type="submit"
                        className="booking-submit"
                    >
                        Request Appointment
                        <span>→</span>
                    </button>

                </form>

            </div>

        </section>
    );
}

export default Booking;