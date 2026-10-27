
import React, { useState } from "react";
import Breadcrumb from "../component/Breadcrumb";

import {
    CheckCircle2,
    ZoomIn,
    X,
    ArrowRight,
} from "lucide-react";

// PRODUCT IMAGES
// Change the path if your actual product filename is different.
const productImages = [
    "/img/prod/5.png",
    // "/img/prod/7.1.png",
];

// PRODUCT USES - FROM REFERENCE IMAGE
const productUses = [
    "For Battery Water",
    "Topping Up for Coolant",
    "Topping for Wind Screen Wash Fluid",
];

// TECHNICAL SPECIFICATIONS - FROM REFERENCE IMAGE
const productSpecifications = [
    {
        label: "CURRENT CAPACITY",
        value: "10000 L/day",
        color: "#ff3038",
    },
    {
        label: "PACK SIZE",
        value: "1 / 5 / 10 L",
        color: "#008b51",
    },
    {
        label: "CONDUCTIVITY",
        value: "< 2",
        color: "#004799",
    },
    {
        label: "PH VALUE",
        value: "6.5 - 7.5",
        color: "#062a49",
    },
];

const DeMineraliseWaterProduct = () => {
    const [activeImage, setActiveImage] = useState(0);
    const [isZoomOpen, setIsZoomOpen] = useState(false);

    return (
        <>
            {/* BREADCRUMB */}
            <Breadcrumb title="De-Mineralise Water" />

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
                                        alt="Prisana De-Mineralise Water"
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
                                            className={`prisana-product-thumbnail ${activeImage === index
                                                    ? "active"
                                                    : ""
                                                }`}
                                            aria-label={`View product image ${index + 1}`}
                                            aria-pressed={activeImage === index}
                                        >
                                            <img
                                                src={image}
                                                alt={`Prisana De-Mineralise Water thumbnail ${index + 1}`}
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
                                UTILITY CARE
                            </span>

                            {/* PRODUCT TITLE */}
                            <h1 className="heading-main">
                                De-Mineralise Water
                            </h1>

                            <div className="prisana-product-title-underline" />

                            {/* PRODUCT DESCRIPTION */}
                            <p className="prisana-product-description">
                                Demineralisation is a process of removing
                                mineral salts from water by using the
                                ion-exchange process. It is completely
                                free from minerals.
                            </p>

                            {/* PRODUCT USES */}
                            <div className="prisana-product-feature-section">

                                <h2>Uses</h2>

                                <ul className="prisana-product-feature-list">
                                    {productUses.map((use, index) => (
                                        <li key={index}>
                                            <CheckCircle2 size={18} />
                                            <span>{use}</span>
                                        </li>
                                    ))}
                                </ul>

                            </div>

                            {/* TECHNICAL SPECIFICATIONS */}
                            <div
                                style={{
                                    display: "grid",
                                    gridTemplateColumns:
                                        "repeat(2, minmax(0, 1fr))",
                                    gap: "12px",
                                    marginTop: "28px",
                                }}
                            >
                                {productSpecifications.map((item) => (
                                    <div
                                        key={item.label}
                                        style={{
                                            background: "#f8fbfe",
                                            border: "1px solid #dae5ef",
                                            borderRadius: "12px",
                                            padding: "16px 14px",
                                            minWidth: 0,
                                        }}
                                    >
                                        <span
                                            style={{
                                                display: "block",
                                                fontSize: "10px",
                                                fontWeight: 700,
                                                color: item.color,
                                                marginBottom: "12px",
                                            }}
                                        >
                                            {item.label}
                                        </span>

                                        <strong
                                            style={{
                                                display: "block",
                                                color: "#152335",
                                                fontSize: "16px",
                                            }}
                                        >
                                            {item.value}
                                        </strong>
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
                                    <strong>Utility Care</strong>
                                </div>

                                <div>
                                    <span>Product Type</span>
                                    <strong>De-Mineralise Water</strong>
                                </div>

                                <div>
                                    <span>Pack Sizes</span>
                                    <strong>1 L / 5 L / 10 L</strong>
                                </div>

                            </div>

                            {/* WHATSAPP ENQUIRY BUTTON */}
                            <div className="prisana-product-cta">

                                <a
                                    href="https://wa.me/919999773525?text=Hello%20Prisana%2C%20I%20want%20to%20enquire%20about%20De-Mineralise%20Water"
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
                            alt="Prisana De-Mineralise Water enlarged"
                        />
                    </div>
                </div>
            )}
        </>
    );
};

export default DeMineraliseWaterProduct;
