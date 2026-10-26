
import React, { useState } from "react";

const CONTACT_EMAIL = "info.viraladsmedia@gmail.com";

const ContactUs = () => {
    const [formData, setFormData] = useState({
        name: "",
        email: "",
        phone: "",
        subject: "",
        message: "",
        website: "",
    });

    const [loading, setLoading] = useState(false);
    const [status, setStatus] = useState({
        type: "",
        message: "",
    });

    const handleChange = (e) => {
        const { name, value } = e.target;

        setFormData((prev) => ({
            ...prev,
            [name]: value,
        }));
    };


    const handleSubmit = async (e) => {
        e.preventDefault();

        if (loading || formData.website.trim()) return;

        setLoading(true);
        setStatus({ type: "", message: "" });

        try {
            const response = await fetch(
                `https://formsubmit.co/ajax/${CONTACT_EMAIL}`,
                {
                    method: "POST",
                    headers: {
                        "Content-Type": "application/json",
                        Accept: "application/json",
                    },
                    body: JSON.stringify({
                        name: formData.name.trim(),
                        email: formData.email.trim(),
                        phone: formData.phone.trim(),
                        subject: formData.subject.trim(),
                        message: formData.message.trim(),
                        _subject: `New Prisana Enquiry - ${formData.subject}`,
                        _template: "table",
                        _replyto: formData.email.trim(),
                    }),
                }
            );

            const result = await response.json();

            console.log("FormSubmit Response:", result);

            if (
                !response.ok ||
                (result.success !== true && result.success !== "true")
            ) {
                throw new Error(
                    result.message || "Form submission failed."
                );
            }

            setStatus({
                type: "success",
                message: "Thank you! Your message has been sent successfully.",
            });

            setFormData({
                name: "",
                email: "",
                phone: "",
                subject: "",
                message: "",
                website: "",
            });

        } catch (error) {
            console.error("Prisana Form Error:", error);

            setStatus({
                type: "danger",
                message:
                    error instanceof TypeError
                        ? "Network error. Please check your connection and try again."
                        : error.message || "Unable to send your message.",
            });

        } finally {
            setLoading(false);
        }
    };


    return (
        <section className="prisana-contact-section py-5">
            <div className="container-xxl">

                {/* Heading */}
                <div className="mb-5">
                    <span className="sub-title">
                        Write a Message
                    </span>

                    <h2 className="heading-main">
                        Have Questions About Our Products? The <br/> Prisana Team Is Here to Help
                    </h2>
                </div>

                <div className="row g-4 g-lg-5">

                    {/* Left Contact Details */}
                    <div className="col-lg-5">

                        <div className="prisana-contact-info">

                            <p className="contact-description">
                                Have a question about Prisana automotive
                                care products? Our team is here to help
                                with product enquiries, bulk orders,
                                dealership opportunities, and
                                automotive care solutions.
                            </p>

                            <div className="contact-details">
                                <div className="contact-item mb-1">
                                    <i className="fa-solid fa-phone pe-2"></i>
                                    <a href="tel:+919999773525">
                                        +91 99997 73525
                                    </a>
                                </div>

                                <div className="contact-item mb-1 ">
                                    <i className="fa-solid fa-envelope pe-2"></i>
                                    <a href="mailto:info@rexeindia.com">
                                        info@rexeindia.com
                                    </a>
                                </div>

                                <div className="contact-address">
                                    <i className="fa-solid fa-location-dot"></i>
                                    <p>
                                        <strong>  REXE INDUSTRIES </strong> <br/>
                                        Plot No. 306, Sector 53, Kundli Industrial Area, Sonipat – 131028, Haryana, India.
                                    </p>
                                </div>

                            </div>

                            {/* <div className="contact-address">
                                <i className="fa-solid fa-location-dot"></i>
                                <p>
                                    New Delhi, India
                                </p>
                            </div> */}



                        </div>

                    </div>

                    {/* Right Contact Form */}
                    <div className="col-lg-7">

                        <form
                            className="prisana-contact-form"
                            onSubmit={handleSubmit}
                        >

                            {/* Spam Protection */}
                            <input
                                type="text"
                                name="website"
                                value={formData.website}
                                onChange={handleChange}
                                tabIndex={-1}
                                autoComplete="off"
                                aria-hidden="true"
                                style={{ display: "none" }}
                            />

                            <div className="row g-3">

                                <div className="col-md-6">
                                    <input
                                        type="text"
                                        name="name"
                                        className="form-control"
                                        placeholder="Your Name"
                                        aria-label="Your Name"
                                        value={formData.name}
                                        onChange={handleChange}
                                        autoComplete="name"
                                        maxLength={100}
                                        required
                                    />
                                </div>

                                <div className="col-md-6">
                                    <input
                                        type="email"
                                        name="email"
                                        className="form-control"
                                        placeholder="Email Address"
                                        aria-label="Email Address"
                                        value={formData.email}
                                        onChange={handleChange}
                                        autoComplete="email"
                                        maxLength={150}
                                        required
                                    />
                                </div>

                                <div className="col-md-6">
                                    <input
                                        type="tel"
                                        name="phone"
                                        className="form-control"
                                        placeholder="Phone Number"
                                        aria-label="Phone Number"
                                        value={formData.phone}
                                        onChange={handleChange}
                                        autoComplete="tel"
                                        pattern="[0-9+\s()\-]{10,20}"
                                        required
                                    />
                                </div>

                                <div className="col-md-6">
                                    <input
                                        type="text"
                                        name="subject"
                                        className="form-control"
                                        placeholder="Subject"
                                        aria-label="Subject"
                                        value={formData.subject}
                                        onChange={handleChange}
                                        maxLength={150}
                                        required
                                    />
                                </div>

                                <div className="col-12">
                                    <textarea
                                        name="message"
                                        className="form-control"
                                        rows="6"
                                        placeholder="Write Comment"
                                        aria-label="Your Message"
                                        value={formData.message}
                                        onChange={handleChange}
                                        maxLength={3000}
                                        required
                                    ></textarea>
                                </div>

                                {status.message && (
                                    <div className="col-12">
                                        <div
                                            className={`alert alert-${status.type}`}
                                            role="status"
                                        >
                                            {status.message}
                                        </div>
                                    </div>
                                )}

                                <div className="col-12">
                                    <button
                                        type="submit"
                                        className="theme-btn"
                                        disabled={loading}
                                    >
                                        {loading ? "Sending..." : "Send a Message"}

                                        <i className="fa-solid fa-circle-arrow-right"></i>
                                    </button>
                                </div>

                            </div>

                        </form>

                    </div>

                </div>
            </div>
        </section>
    );
};

export default ContactUs;
