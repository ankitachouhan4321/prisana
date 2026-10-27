
import React, { useState } from "react";
import Breadcrumb from "../component/Breadcrumb";

import {
    CheckCircle2,
    ZoomIn,
    X,
    ArrowRight,
    Droplets,
    Sparkles,
} from "lucide-react";

// PRODUCT IMAGES
// Update these paths with your actual Dry Wash Shampoo images.
const productImages = [
    "/img/prod/4.png",
    // "/img/prod/6.1.png",
];

// PRODUCT FEATURES - FROM REFERENCE IMAGE
const productFeatures = [
    "A waterless car wash uses high lubricity sprays to polish and wash the vehicle's bodywork. The spray's high lubricity chemicals encapsulate dirt and dust particles.",

    "This process removes any light dirt or stains from the car's surface.",

    "Easy to use: simply spray and wipe off.",

    "Follow our step-by-step guide to getting your car shiny in no time.",
];

const DryWashShampooProduct = () => {

    const [activeImage, setActiveImage] = useState(0);
    const [isZoomOpen, setIsZoomOpen] = useState(false);

    return (
        <>

            {/* BREADCRUMB */}
            <Breadcrumb title="Dry Wash Shampoo" />

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
                                        alt="Prisana Dry Wash Shampoo"
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
                                                alt={`Prisana Dry Wash Shampoo thumbnail ${index + 1}`}
                                            />

                                        </button>

                                    ))}

                                </div>

                                {/* PRODUCT IMAGE CAPTION */}
                                <p className="prisana-product-image-caption">
                                    Convenient waterless cleaning process
                                </p>

                            </div>

                        </div>


                        {/* RIGHT SIDE - PRODUCT INFORMATION */}
                        <div className="prisana-product-info">

                            {/* CATEGORY */}
                            <span className="sub-title">
                                WATERLESS CARE
                            </span>

                            {/* PRODUCT TITLE */}
                            <h1 className="heading-main">
                                Dry Wash Shampoo
                            </h1>

                            <div className="prisana-product-title-underline" />

                            {/* PRODUCT DESCRIPTION */}
                            <p className="prisana-product-description">
                                Prisana Dry Wash Shampoo provides a convenient
                                way to clean your vehicle without traditional
                                water washing. Its high-lubricity formula
                                encapsulates light dirt and dust particles,
                                allowing them to be wiped away while helping
                                restore a clean and shiny finish.
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


                            {/* WATERLESS CLEANING HIGHLIGHT */}
                            <div
                                className="prisana-product-mini-details"
                                style={{
                                    background: "#f0f8ff",
                                    borderLeft: "4px solid #008fc9",
                                    marginTop: "25px",
                                }}
                            >

                                <div
                                    style={{
                                        borderBottom: "none",
                                        justifyContent: "flex-start",
                                        gap: "15px",
                                    }}
                                >

                                    <Droplets
                                        size={25}
                                        color="#008fc9"
                                    />

                                    <div>
                                        <strong
                                            style={{
                                                display: "block",
                                                color: "#062a49",
                                                fontSize: "16px",
                                                textAlign: "left",
                                            }}
                                        >
                                            SPRAY • WIPE • SHINE
                                        </strong>

                                        <span
                                            style={{
                                                display: "block",
                                                marginTop: "5px",
                                                fontSize: "12px",
                                            }}
                                        >
                                            Convenient waterless car cleaning
                                        </span>
                                    </div>

                                </div>

                            </div>


                            {/* PRODUCT DETAILS */}
                            <div className="prisana-product-mini-details">

                                <div>
                                    <span>Brand</span>
                                    <strong>Prisana</strong>
                                </div>

                                <div>
                                    <span>Category</span>
                                    <strong>Waterless Care</strong>
                                </div>

                                <div>
                                    <span>Product Type</span>
                                    <strong>Dry Wash Shampoo</strong>
                                </div>

                                <div>
                                    <span>Application</span>
                                    <strong>Spray & Wipe</strong>
                                </div>

                            </div>


                            {/* WHATSAPP ENQUIRY BUTTON */}
                            <div className="prisana-product-cta">

                                <a
                                    href="https://wa.me/919999773525?text=Hello%20Prisana%2C%20I%20want%20to%20enquire%20about%20Dry%20Wash%20Shampoo"
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
                            alt="Prisana Dry Wash Shampoo enlarged"
                        />

                    </div>

                </div>

            )}

        </>
    );
};

export default DryWashShampooProduct;
