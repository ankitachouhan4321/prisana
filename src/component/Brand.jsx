
import React from "react";

const brands = [
    {
        id: 1,
        name: "Maruti Suzuki",
        logo: "/img/brand/1.jpg",
    },
    {
        id: 2,
        name: "Eicher",
        logo: "/img/brand/2.jpg",
    },
    {
        id: 3,
        name: "ACE",
        logo: "/img/brand/3.jpg",
    },
    {
        id: 4,
        name: "ABRO",
        logo: "/img/brand/4.jpg",
    },
    {
        id: 5,
        name: "TVS",
        logo: "/img/brand/5.jpg",
    },
    {
        id: 6,
        name: "Motherson",
        logo: "/img/brand/6.jpg",
    },
    {
        id: 7,
        name: "Varroc",
        logo: "/img/brand/7.jpg",
    },
    {
        id: 8,
        name: "GoMechanic",
        logo: "/img/brand/8.jpg",
    }
];

const Brand = () => {
    return (
        <section className="prisana-brand-section py-5">
            <div className="container-xxl">

                <div className="prisana-brand-heading text-center mb-5">

                    <h2 className="heading-main">
                        Our Clients & Partners
                    </h2>

                    <p>
                        We are proud to work with respected names in the automotive industry, building lasting relationships through quality, reliability, and consistent service.
                    </p>
                </div>

                <div className="row-cols-lg-4 row-cols-md-4 row-cols-sm-3 row-cols-2 row g-4 justify-content-center">

                    {brands.map((brand) => (
                        <div
                            className="col"
                            key={brand.id}
                        >
                            <div className="prisana-brand-card">
                                <img
                                    src={brand.logo}
                                    alt={brand.name}
                                    loading="lazy"
                                />
                            </div>
                        </div>
                    ))}

                </div>

            </div>
        </section>
    );
};

export default Brand;
