
import React, { useState } from "react";
import Breadcrumb from "../component/Breadcrumb";

import {
    CheckCircle2,
    ZoomIn,
    X,
    ArrowRight,
} from "lucide-react";

// PRODUCT IMAGES
// Update the paths to match your actual Tyre Shiner images.
const productImages = [
    "/img/prod/6.png",
    "/img/prod/6.1.png",

    // "/img/prod/6.1.png",
];

// PRODUCT FEATURES - FROM REFERENCE IMAGE
const productFeatures = [
    "Shine, Clean and Protects.",

    "Do not attract dirt or dust.",

    "Surface to be polished should be clean and dry. Apply with clean folded cloth uniformly and allow drying.",

    "Get rid of gray and chalky tyre and give your car a complete perfect look with super black finish.",
];

const TyreShinerProduct = () => {
    const [activeImage, setActiveImage] = useState(0);
    const [isZoomOpen, setIsZoomOpen] = useState(false);

    const whatsappUrl =
        "https://wa.me/919999773525?text=" +
        encodeURIComponent(
            "Hello Prisana, I want to enquire about Tyre Shiner"
        );

    return (
        <>
            {/* BREADCRUMB */}
            <Breadcrumb title="Tyre Shiner" />

            <main className="prisana-product-page">
                <div className="prisana-product-container">

                    <section className="prisana-product-layout">

                        {/* LEFT SIDE - STICKY PRODUCT IMAGE */}
                        <div className="prisana-product-gallery">
                            <div className="prisana-product-gallery-inner">

                                {/* MAIN PRODUCT IMAGE */}
                                <div className="prisana-product-main-image">
                                    <img
                                        src={productImages[activeImage]}
                                        alt="Prisana Tyre Shiner"
                                        className="prisana-product-image"
                                    />

                                    {/* ZOOM BUTTON */}
                                    <button
                                        type="button"
                                        className="prisana-product-zoom-btn"
                                        onClick={() => setIsZoomOpen(true)}
                                        aria-label="Zoom Tyre Shiner image"
                                    >
                                        <ZoomIn size={18} />
                                    </button>
                                </div>

                                {/* PRODUCT THUMBNAILS */}
                                <div className="prisana-product-thumbnails">
                                    {productImages.map((image, index) => (
                                        <button
                                            type="button"
                                            key={image}
                                            onClick={() => setActiveImage(index)}
                                            className={`prisana-product-thumbnail ${activeImage === index
                                                    ? "active"
                                                    : ""
                                                }`}
                                            aria-label={`View product image ${index + 1}`}
                                            aria-pressed={activeImage === index}
                                        >
                                            <img
                                                src={image}
                                                alt={`Prisana Tyre Shiner thumbnail ${index + 1}`}
                                            />
                                        </button>
                                    ))}
                                </div>

                            </div>
                        </div>

                        {/* RIGHT SIDE - PRODUCT INFORMATION */}
                        <div className="prisana-product-info">

                            {/* CATEGORY */}
                            <span className="sub-title">
                                TYRE CARE
                            </span>

                            {/* PRODUCT TITLE */}
                            <h1 className="heading-main">
                                Tyre Shiner
                            </h1>

                            <div className="prisana-product-title-underline" />

                            {/* PRODUCT DESCRIPTION */}
                            <p className="prisana-product-description">
                                Prisana Tyre Shiner is formulated to clean,
                                shine and protect tyres. It helps restore
                                the appearance of grey and chalky tyres
                                with a super black finish while helping
                                prevent dirt and dust from being attracted
                                to the treated surface.
                            </p>

                            {/* PRODUCT FEATURES */}
                            <div className="prisana-product-feature-section">

                                <h2>Product Features</h2>

                                <ul className="prisana-product-feature-list">
                                    {productFeatures.map((feature, index) => (
                                        <li key={index}>
                                            <CheckCircle2 size={18} />
                                            <span>{feature}</span>
                                        </li>
                                    ))}
                                </ul>

                            </div>

                            {/* SUPER BLACK FINISH HIGHLIGHT */}
                            <div
                                className="prisana-product-mini-details"
                                style={{
                                    background: "#008fc9",
                                    border: "none",
                                    borderRadius: "12px",
                                    marginTop: "25px",
                                    padding: "18px 22px",
                                }}
                            >
                                <h3
                                    style={{
                                        color: "#ffffff",
                                        fontSize: "18px",
                                        fontWeight: "700",
                                        margin: "0 0 6px",
                                    }}
                                >
                                    SUPER BLACK FINISH
                                </h3>

                                <p
                                    style={{
                                        color: "#ffffff",
                                        fontSize: "12px",
                                        margin: 0,
                                        lineHeight: "1.6",
                                    }}
                                >
                                    Clean-looking tyres for a complete
                                    vehicle finish.
                                </p>
                            </div>

                            {/* PRODUCT DETAILS */}
                            <div className="prisana-product-mini-details">

                                <div>
                                    <span>Brand</span>
                                    <strong>Prisana</strong>
                                </div>

                                <div>
                                    <span>Category</span>
                                    <strong>Tyre Care</strong>
                                </div>

                                <div>
                                    <span>Product Type</span>
                                    <strong>Tyre Shiner</strong>
                                </div>

                                <div>
                                    <span>Application</span>
                                    <strong>Apply with a Clean Cloth</strong>
                                </div>

                            </div>

                            {/* WHATSAPP ENQUIRY BUTTON */}
                            <div className="prisana-product-cta">
                                <a
                                    href={whatsappUrl}
                                    target="_blank"
                                    rel="noopener noreferrer"
                                    className="theme-btn-2"
                                >
                                    Enquire Now
                                    <ArrowRight size={17} />
                                </a>
                            </div>

                        </div>

                    </section>

                </div>
            </main>

            {/* PRODUCT IMAGE ZOOM MODAL */}
            {isZoomOpen && (
                <div
                    className="prisana-product-zoom-overlay"
                    onClick={() => setIsZoomOpen(false)}
                >
                    <div
                        className="prisana-product-zoom-content"
                        role="dialog"
                        aria-modal="true"
                        aria-label="Tyre Shiner image preview"
                        onClick={(e) => e.stopPropagation()}
                    >
                        <button
                            type="button"
                            className="prisana-product-zoom-close"
                            onClick={() => setIsZoomOpen(false)}
                            aria-label="Close image preview"
                        >
                            <X size={22} />
                        </button>

                        <img
                            src={productImages[activeImage]}
                            alt="Prisana Tyre Shiner enlarged"
                        />
                    </div>
                </div>
            )}
        </>
    );
};

export default TyreShinerProduct;
