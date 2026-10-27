
import React from "react";
import { Link } from "react-router-dom";
import Breadcrumb from "../component/Breadcrumb";

const products = [
    {
        id: 1,
        name: "Windscreen Wash Fluid",
        image: "/img/prod/1.png",
        image2: "/img/prod/1.png",
        category: "Glass Care",
        description:
            "A high-performance concentrated windscreen cleaner that removes dirt, dust, and pollution film for crystal-clear, streak-free visibility.",
        slug: "/products/wind-screenwash-fluid",
    },
    {
        id: 2,
        name: "Car Shampoo",
        image: "/img/prod/2.png",
        image2: "/img/prod/2.png",
        category: "Exterior Care",
        description:
            "An effective, non-streaking car shampoo that removes oil, grease, and stubborn dirt while being gentle on car paint and leaving a sparkling finish.",
        slug: "/products/car-shampoo",
    },
    {
        id: 3,
        name: "Dashboard Polish",
        image: "/img/prod/3.png",
        image2: "/img/prod/3.1.png",
        category: "Interior Care",
        description:
            "Restore shine to your car's dashboard and interior surfaces with a non-greasy formula that enhances gloss without attracting dust.",
        slug: "/products/dashboard-polish",
    },
    {
        id: 4,
        name: "Dry Wash Shampoo",
        image: "/img/prod/4.png",
        image2: "/img/prod/4.png",
        category: "Waterless Care",
        description:
            "A convenient waterless car cleaning solution that encapsulates light dirt and dust, allowing easy spray-and-wipe cleaning for a shiny finish.",
        slug: "/products/dry-wash-shampoo",
    },
    {
        id: 5,
        name: "De-Mineralise Water",
        image: "/img/prod/5.png",
        image2: "/img/prod/5.png",
        category: "Utility Care",
        description:
            "High-quality demineralised water with mineral salts removed, suitable for battery maintenance and topping up compatible coolant and windscreen wash systems.",
        slug: "/products/de-mineralise-water",
    },
    {
        id: 6,
        name: "Tyre Shiner",
        image: "/img/prod/6.png",
        image2: "/img/prod/6.1.png",
        category: "Tyre Care",
        description:
            "A specially formulated tyre shiner that cleans, shines, and protects tyres while restoring a rich, deep black finish without attracting dirt and dust.",
        slug: "/products/tyre-polish",
    },
    {
        id: 7,
        name: "Coolant",
        image: "/img/prod/7.png",
        image2: "/img/prod/7.png",
        category: "Engine Care",
        description:
            "An engine coolant formulated to regulate engine temperature, help prevent overheating and freezing, and protect the cooling system against rust and corrosion.",
        slug: "/products/Coolant",
    },
];

const Products = () => {
    return (
        <>
            <Breadcrumb title="Our Products" />

            <section id="product-sec">
                <div className="product-sec container-lg py-lg-5 py-3">

                    {/* SECTION HEADING */}
                    <div className="text-center product-heading">
                        <span className="sub-title">
                            Our Products
                        </span>

                        <h2 className="heading-main">
                            Precision in Every Formula. <br />
                            <span>Care in Every Drive.</span>
                        </h2>

                        <p className="product-intro">
                            Discover Prisana's automotive care range,
                            thoughtfully formulated to deliver reliable
                            performance, protection, and care for every drive.
                        </p>
                    </div>

                    {/* RESPONSIVE PRODUCT CARDS GRID */}
                    <div className="prisana-products-grid row g-5">
                       

                        {products.map((product) => (
                            <div
                                className="prisana-product-card col-lg-4 col-md-6   "
                                key={product.id}
                            >

                                {/* PRODUCT IMAGE */}
                                <div className="prisana-product-image">

                                    <img
                                        src={product.image}
                                        alt={product.name}
                                        loading="lazy"
                                        className="img1"
                                    />

                                    <img
                                        src={product.image2}
                                        alt={`${product.name} alternate view`}
                                        loading="lazy"
                                        className="img2"
                                    />

                                    <div className="prisana-image-decoration"></div>

                                </div>

                                {/* PRODUCT CONTENT */}
                                <div className="prisana-product-content">

                                    <span className="prisana-card-category">
                                        {product.category}
                                    </span>

                                    <h3>{product.name}</h3>

                                    <p>{product.description}</p>

                                    {/* PRODUCT BUTTONS */}
                                    <div className="prisana-product-actions">

                                        <Link
                                            to={product.slug}
                                            className="prisana-view-btn"
                                        >
                                            View More
                                            <i className="fa-solid fa-arrow-up-right-from-square"></i>
                                        </Link>

                                        <a
                                            href={`https://wa.me/919999773525?text=${encodeURIComponent(
                                                `Hello Prisana, I want to enquire about ${product.name}. Please share more details.`
                                            )}`}
                                            target="_blank"
                                            rel="noopener noreferrer"
                                            className="prisana-enquire-btn"
                                        >
                                            Enquire Now
                                            <i className="fa-solid fa-arrow-right"></i>
                                        </a>

                                    </div>
                                </div>
                            </div>
                        ))}
                        

                    </div>

                </div>
            </section>
        </>
    );
};

export default Products;
