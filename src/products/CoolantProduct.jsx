
import React, { useState } from "react";
import Breadcrumb from "../component/Breadcrumb";

import {
    CheckCircle2,
    ZoomIn,
    X,
    ArrowRight,
} from "lucide-react";

// PRODUCT IMAGES
// Update these paths with your actual Coolant product images.
const productImages = [
    "/img/prod/7.png",
    // "/img/prod/7.1.png",
];

// PRODUCT FEATURES - FROM REFERENCE IMAGE
const productFeatures = [
    "Heat control: It absorbs extra heat from the engine and releases it through the radiator.",

    "Rust prevention: Unlike plain water, coolant protects metal engine parts from corrosion.",

    "Longer life: It lubricates the water pump and keeps the cooling system clean.",
];

const CoolantProduct = () => {
    const [activeImage, setActiveImage] = useState(0);
    const [isZoomOpen, setIsZoomOpen] = useState(false);

    const whatsappUrl =
        "https://wa.me/919999773525?text=" +
        encodeURIComponent(
            "Hello Prisana, I want to enquire about Anti-Freeze Coolant"
        );

    return (
        <>
            {/* BREADCRUMB */}
            <Breadcrumb title="Coolant" />

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
                                        alt="Prisana Engine Coolant"
                                        className="prisana-product-image"
                                    />

                                    {/* ZOOM BUTTON */}
                                    <button
                                        type="button"
                                        className="prisana-product-zoom-btn"
                                        onClick={() => setIsZoomOpen(true)}
                                        aria-label="Zoom Coolant product image"
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
                                                alt={`Prisana Coolant thumbnail ${index + 1}`}
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
                                ENGINE CARE
                            </span>

                            {/* PRODUCT TITLE */}
                            <h1 className="heading-main">
                                Coolant
                            </h1>

                            <div className="prisana-product-title-underline" />

                            {/* OEM SUPPLIER INFORMATION */}
                            <div
                                className="prisana-product-supply-note"
                                style={{
                                    background: "#008b51",
                                    borderLeft: "none",
                                    borderRadius: "10px",
                                    padding: "16px 20px",
                                    marginTop: "18px",
                                    marginBottom: "24px",
                                }}
                            >
                                <p
                                    style={{
                                        color: "#ffffff",
                                        fontSize: "13px",
                                        fontWeight: "600",
                                        margin: 0,
                                    }}
                                >
                                    OEM supplier to Action Construction
                                    Equipment (ACE)
                                </p>
                            </div>

                            {/* WHY YOU NEED COOLANT */}
                            <div className="prisana-product-feature-section">

                                <p className="prisana-product-description">
                                    Prisana Engine Coolant is specially formulated to maintain
                                    optimal engine temperature and protect the cooling system
                                    from overheating, freezing, rust, and corrosion, ensuring
                                    smooth performance and longer engine life.
                                </p>

                                {/* COOLANT BENEFITS */}
                                <ul className="prisana-product-feature-list">
                                    {productFeatures.map((feature, index) => (
                                        <li key={index}>
                                            <CheckCircle2 size={18} />
                                            <span>{feature}</span>
                                        </li>
                                    ))}
                                </ul>

                            </div>

                            {/* ENGINE COOLING HIGHLIGHT */}
                            <div
                                className="prisana-product-mini-details"
                                style={{
                                    background: "#f0f8ff",
                                    borderLeft: "4px solid #008b51",
                                    marginTop: "25px",
                                    padding: "18px 20px",
                                }}
                            >
                                <h3
                                    style={{
                                        fontSize: "17px",
                                        fontWeight: "700",
                                        color: "#062a49",
                                        margin: "0 0 8px",
                                    }}
                                >
                                    Engine Cooling & Protection
                                </h3>

                                <p
                                    style={{
                                        fontSize: "13px",
                                        color: "#526173",
                                        lineHeight: "1.7",
                                        margin: 0,
                                    }}
                                >
                                    Helps maintain stable engine temperature,
                                    protects against rust and corrosion,
                                    and supports a clean cooling system.
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
                                    <strong>Engine Care</strong>
                                </div>

                                <div>
                                    <span>Product Type</span>
                                    <strong>Engine Coolant / Antifreeze</strong>
                                </div>

                                <div>
                                    <span>Primary Use</span>
                                    <strong>Engine Cooling</strong>
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
                        aria-label="Coolant product image preview"
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
                            alt="Prisana Coolant enlarged"
                        />
                    </div>
                </div>
            )}
        </>
    );
};

export default CoolantProduct;
