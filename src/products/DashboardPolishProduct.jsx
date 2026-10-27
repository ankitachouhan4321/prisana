
import React, { useState } from "react";
import Breadcrumb from "../component/Breadcrumb";

import {
    CheckCircle2,
    ZoomIn,
    X,
    ArrowRight,
} from "lucide-react";

// PRODUCT IMAGES
const productImages = [
    "/img/prod/3.png",
    "/img/prod/3.1.png",
    // "/img/prod/3-side.png",
];

// PRODUCT FEATURES - FROM REFERENCE IMAGE
const productFeatures = [
    "This product is specially formulated to restore gloss to Vinyl, Rubber and Plastic surfaces.",

    "Non-greasy formula does not attract dust.",

    "Formulation gives high gloss and makes easy for DIY application.",

    "Contract manufacturing to various other companies in different packaging.",
];

const DashboardPolishProduct = () => {

    const [activeImage, setActiveImage] = useState(0);
    const [isZoomOpen, setIsZoomOpen] = useState(false);

    return (
        <>

            {/* BREADCRUMB */}
            <Breadcrumb title="Dashboard Polish" />

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
                                        alt="Prisana Dashboard Polish"
                                        className="prisana-product-image"
                                    />

                                    {/* ZOOM BUTTON */}
                                    <button
                                        type="button"
                                        className="prisana-product-zoom-btn"
                                        onClick={() => setIsZoomOpen(true)}
                                        aria-label="Zoom product image"
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
                                            className={`prisana-product-thumbnail ${activeImage === index ? "active" : ""
                                                }`}
                                            aria-label={`View product image ${index + 1}`}
                                            aria-pressed={activeImage === index}
                                        >

                                            <img
                                                src={image}
                                                alt={`Prisana Dashboard Polish thumbnail ${index + 1}`}
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
                                INTERIOR CARE
                            </span>

                            {/* PRODUCT TITLE */}
                            <h1 className="heading-main">
                                Dashboard Polish
                            </h1>

                            <div className="prisana-product-title-underline" />

                            {/* PRODUCT DESCRIPTION */}
                            <p className="prisana-product-description">
                                Prisana Dashboard Polish is specially formulated
                                to restore gloss to vinyl, rubber and plastic
                                surfaces. Its non-greasy formula helps maintain
                                a clean, high-gloss finish without attracting
                                dust, making it suitable for everyday interior care.
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


                            {/* PRODUCT HIGHLIGHT */}
                            <div className="prisana-dashboard-highlight">

                                <h3>
                                    RESTORE. PROTECT. SHINE.
                                </h3>

                                <p>
                                    A high-gloss finish for everyday interior care.
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
                                    <strong>Interior Care</strong>
                                </div>

                                <div>
                                    <span>Product Type</span>
                                    <strong>Dashboard Polish</strong>
                                </div>

                                <div>
                                    <span>Suitable Surfaces</span>
                                    <strong>
                                        Vinyl, Rubber & Plastic
                                    </strong>
                                </div>

                            </div>


                            {/* WHATSAPP ENQUIRY BUTTON */}
                            <div className="prisana-product-cta">

                                <a
                                    href="https://wa.me/919999773525?text=Hello%20Prisana%2C%20I%20want%20to%20enquire%20about%20Dashboard%20Polish"
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
                        aria-label="Product image preview"
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
                            alt="Prisana Dashboard Polish enlarged"
                        />

                    </div>

                </div>

            )}

        </>
    );
};

export default DashboardPolishProduct;
