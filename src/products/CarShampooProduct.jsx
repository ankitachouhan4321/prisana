
import React, { useState } from "react";
import Breadcrumb from "../component/Breadcrumb";

import {
    CheckCircle2,
    ZoomIn,
    X,
    ArrowRight,
} from "lucide-react";

// PRODUCT IMAGES
// Replace the path with your actual Car Shampoo image.
const productImages = [
    "/img/prod/2.png",
    // "/img/prod/5-back.png",
    // "/img/prod/5-side.png",
];

// PRODUCT FEATURES FROM REFERENCE IMAGE
const productFeatures = [
    "This product is an effective car wash with detergency properties. Its non-streaking formulation has excellent properties and has been specially created to remove oil and grease stains even in hard water.",

    "It is gentle on car paint and gives sparkling effect on the vehicle.",

    "Approved by Maruti Suzuki India Ltd.",
];

// PRODUCT HIGHLIGHTS
const productHighlights = [
    {
        label: "FORMULA",
        value: "Non-streaking",
        className: "red",
    },
    {
        label: "CARE",
        value: "Gentle on paint",
        className: "green",
    },
    {
        label: "FINISH",
        value: "Sparkling effect",
        className: "blue",
    },
];

const CarShampooProduct = () => {

    const [activeImage, setActiveImage] = useState(0);
    const [isZoomOpen, setIsZoomOpen] = useState(false);

    return (
        <>

            {/* BREADCRUMB */}
            <Breadcrumb title="Car Shampoo" />

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
                                        alt="Prisana Car Shampoo"
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

                                {/* THUMBNAIL GALLERY */}
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
                                                alt={`Prisana Car Shampoo thumbnail ${index + 1}`}
                                            />

                                        </button>

                                    ))}

                                </div>

                                {/* IMAGE CAPTION */}
                                <p className="prisana-product-image-caption">
                                    Effective car wash for oil and grease removal
                                </p>

                            </div>

                        </div>


                        {/* RIGHT SIDE - PRODUCT INFORMATION */}
                        <div className="prisana-product-info">

                            {/* CATEGORY */}
                            <span className="sub-title">
                                EXTERIOR CARE
                            </span>

                            {/* PRODUCT TITLE */}
                            <h1 className="heading-main">
                                Car Shampoo
                            </h1>

                            <div className="prisana-product-title-underline" />

                            {/* PRODUCT DESCRIPTION */}
                            <p className="prisana-product-description">
                                Prisana Car Shampoo is an effective car wash
                                solution with excellent detergency properties.
                                Its non-streaking formula is specially designed
                                to remove oil and grease stains, even in hard
                                water, while remaining gentle on car paint.
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


                            {/* PRODUCT HIGHLIGHTS */}
                            <div className="prisana-shampoo-highlights">

                                {productHighlights.map((item, index) => (

                                    <div
                                        className="prisana-shampoo-highlight-card"
                                        key={index}
                                    >

                                        <span className={`highlight-label ${item.className}`}>
                                            {item.label}
                                        </span>

                                        <strong>{item.value}</strong>

                                    </div>

                                ))}

                            </div>


                            {/* PRODUCT DETAILS */}
                            <div className="prisana-product-mini-details">

                                <div>
                                    <span>Brand</span>
                                    <strong>Prisana</strong>
                                </div>

                                <div>
                                    <span>Category</span>
                                    <strong>Exterior Care</strong>
                                </div>

                                <div>
                                    <span>Product Type</span>
                                    <strong>Car Shampoo</strong>
                                </div>

                            </div>


                            {/* WHATSAPP ENQUIRY BUTTON */}
                            <div className="prisana-product-cta">

                                <a
                                    href="https://wa.me/919999773525?text=Hello%20Prisana%2C%20I%20want%20to%20enquire%20about%20Car%20Shampoo"
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
                            alt="Prisana Car Shampoo enlarged"
                        />

                    </div>

                </div>

            )}

        </>
    );
};

export default CarShampooProduct;
