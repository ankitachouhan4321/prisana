
import React, { useState } from "react";
import { Link } from "react-router-dom";
import Breadcrumb from "../component/Breadcrumb";

import {
    CheckCircle2,
    ZoomIn,
    X,
    ArrowRight,
    Info,
} from "lucide-react";

// PRODUCT IMAGES
const productImages = [
    "/img/prod/1.png",
    // "/img/prod/1-back.png",
    // "/img/prod/1-side.png",
];

// PRODUCT FEATURES - FROM REFERENCE IMAGE
const productFeatures = [
    "High performance concentrated windscreen cleaner.",

    "Suitable for all automobiles.",

    "Special detergents ensure a clean, clear windshield for improved vision by removing pollution film and dust.",

    "This product contains a special cleansing formula which rapidly removes dirty and soiled areas, leaving windshield crystal clear and streak-free and is gentle on car paints and rubber.",
];

const WindscreenWashProduct = () => {

    const [activeImage, setActiveImage] = useState(0);
    const [isZoomOpen, setIsZoomOpen] = useState(false);

    return (
        <>

            {/* BREADCRUMB */}
            <Breadcrumb title="Windscreen Wash Fluid" />

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
                                        alt="Prisana Windscreen Wash Fluid Concentrate"
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
                                                alt={`Prisana Windscreen Wash thumbnail ${index + 1}`}
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
                                GLASS CARE
                            </span>

                            {/* PRODUCT TITLE */}
                            <h1 className="heading-main">
                                Windscreen Wash Fluid
                            </h1>

                            <div className="prisana-product-title-underline" />

                            {/* SHORT INTRODUCTION */}
                            <p className="prisana-product-description">
                                Prisana Windscreen Wash Fluid is a high-performance
                                concentrated windscreen cleaner designed to
                                remove dust, pollution film and dirt, leaving
                                your vehicle's windshield crystal clear and
                                streak-free.
                            </p>

                            {/* PRODUCT FEATURES */}
                            <div className="prisana-product-feature-section">

                                <h2>
                                    Product Features
                                </h2>

                                <ul className="prisana-product-feature-list">

                                    {productFeatures.map((feature, index) => (

                                        <li key={index}>

                                            <CheckCircle2 size={18} />

                                            <span>
                                                {feature}
                                            </span>

                                        </li>

                                    ))}

                                </ul>

                            </div>


                            {/* PRODUCT DETAILS */}
                            <div className="prisana-product-mini-details">

                                <div>
                                    <span>Brand</span>
                                    <strong>Prisana</strong>
                                </div>

                                <div>
                                    <span>Category</span>
                                    <strong>Glass Care</strong>
                                </div>

                                <div>
                                    <span>Product Type</span>
                                    <strong>
                                        Concentrated Windscreen Cleaner
                                    </strong>
                                </div>

                                <div>
                                    <span>Pack Size</span>
                                    <strong>50 ml</strong>
                                </div>

                            </div>


                            {/* ENQUIRY BUTTON */}
                            <div className="prisana-product-cta">

                                <a
                                    href="https://wa.me/919999773525?text=Hello%20Prisana%2C%20I%20want%20to%20enquire%20about%20your%20products"
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
                            alt="Prisana Windscreen Wash Fluid enlarged"
                        />

                    </div>

                </div>

            )}

        </>
    );
};

export default WindscreenWashProduct;
