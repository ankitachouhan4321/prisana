
import React, { useEffect, useRef, useState } from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation, Keyboard } from "swiper/modules";

import "swiper/css";
import "swiper/css/navigation";

const facilities = [
    {
        id: 1,
        image: "/img/gallery/1.jpg",
        title: "R.O. Water Treatment Line",
        alt: "Water treatment equipment at Prisana manufacturing facility",
        description:
            "Explore the water treatment infrastructure used in our automotive care manufacturing operations, supporting consistent water quality and reliable production processes.",
    },
    {
        id: 2,
        image: "/img/gallery/2.jpg",
        title: "Chemical Mixing Reactor",
        alt: "Industrial chemical mixing reactor",
        description:
            "Our chemical mixing equipment supports controlled blending and formulation processes for Prisana's automotive care range, with an emphasis on consistency and precision.",
    },
    {
        id: 3,
        image: "/img/gallery/3.jpg",
        title: "Automated Sachet-Filling Unit",
        alt: "Automated sachet filling equipment",
        description:
            "Our sachet-filling equipment supports efficient packaging and reliable production for automotive care products across different packaging requirements.",
    },
];

const FacilityGallery = () => {
    const [lightboxOpen, setLightboxOpen] = useState(false);
    const [activeIndex, setActiveIndex] = useState(0);

    const swiperRef = useRef(null);
    const closeButtonRef = useRef(null);
    const triggerRef = useRef(null);

    const openLightbox = (index, trigger) => {
        triggerRef.current = trigger;
        setActiveIndex(index);
        setLightboxOpen(true);
    };

    const closeLightbox = () => {
        setLightboxOpen(false);
    };

    useEffect(() => {
        if (!lightboxOpen) return;

        const previousOverflow = document.body.style.overflow;

        document.body.style.overflow = "hidden";
        closeButtonRef.current?.focus();

        const handleEscape = (event) => {
            if (event.key === "Escape") {
                setLightboxOpen(false);
            }
        };

        document.addEventListener("keydown", handleEscape);

        return () => {
            document.body.style.overflow = previousOverflow;
            document.removeEventListener("keydown", handleEscape);
            triggerRef.current?.focus();
        };
    }, [lightboxOpen]);

    return (
        <>
            {/* Facility Gallery Start */}
            <section id="facility-gallery">
                <div className="container-lg py-lg-5 py-3">

                    {/* Existing Heading Classes */}
                    <div className="text-center mb-5">
                        <span className="sub-title">
                            Our Facility
                        </span>

                        <h2 className="heading-main">
                            Inside Our Manufacturing <span>Facility</span>
                        </h2>

                        {/* <p className="facility-description">
                            Explore the manufacturing infrastructure behind
                            Prisana's automotive care range, where precision
                            and quality come together.
                        </p> */}
                    </div>

                    {/* Gallery Cards */}
                    <div className="row g-4 justify-content-center">

                        {facilities.map((facility, index) => (
                            <div
                                className="col-lg-4 col-sm-6"
                                key={facility.id}
                            >
                                <button
                                    type="button"
                                    className="facility-card"
                                    onClick={(event) =>
                                        openLightbox(index, event.currentTarget)
                                    }
                                    aria-label={`View ${facility.title} in gallery`}
                                >
                                    <div className="facility-img">
                                        <img
                                            src={facility.image}
                                            alt={facility.alt}
                                            loading="lazy"
                                        />

                                        <div className="facility-img-overlay">
                                            <span className="facility-zoom-icon">
                                                <i className="fa-solid fa-expand"></i>
                                            </span>
                                        </div>
                                    </div>

                                    <div className="facility-card-content">
                                        <h3>{facility.title}</h3>

                                        <span className="facility-icon">
                                            <i className="fa-solid fa-arrow-up-right-from-square"></i>
                                        </span>
                                    </div>
                                </button>
                            </div>
                        ))}

                    </div>
                </div>
            </section>
            {/* Facility Gallery End */}

            {/* Lightbox */}
            {lightboxOpen && (
                <div
                    className="prisana-lightbox"
                    role="dialog"
                    aria-modal="true"
                    aria-label="Prisana manufacturing facility gallery"
                    onClick={closeLightbox}
                >
                    {/* Close Button */}
                    <button
                        ref={closeButtonRef}
                        type="button"
                        className="lightbox-close"
                        onClick={closeLightbox}
                        aria-label="Close gallery"
                    >
                        <i className="fa-solid fa-xmark"></i>
                    </button>

                    {/* Carousel Wrapper */}
                    <div
                        className="lightbox-container"
                        onClick={(event) => event.stopPropagation()}
                    >
                        <Swiper
                            modules={[Navigation, Keyboard]}
                            initialSlide={activeIndex}
                            slidesPerView={1}
                            spaceBetween={20}
                            speed={500}
                            loop={facilities.length > 1}
                            keyboard={{
                                enabled: true,
                                onlyInViewport: false,
                            }}
                            onSwiper={(swiper) => {
                                swiperRef.current = swiper;
                            }}
                            onSlideChange={(swiper) => {
                                setActiveIndex(swiper.realIndex);
                            }}
                            className="facility-lightbox-swiper"
                        >
                            {facilities.map((facility) => (
                                <SwiperSlide key={facility.id}>
                                    <div className="lightbox-slide">

                                        {/* Large Image */}
                                        <div className="lightbox-image">
                                            <img
                                                src={facility.image}
                                                alt={facility.alt}
                                            />
                                        </div>

                                        {/* Image Information */}
                                        <div className="lightbox-info">
                                            {/* <span className="lightbox-category">
                                                PRISANA MANUFACTURING FACILITY
                                            </span> */}

                                            <h3>{facility.title}</h3>

                                            <p>{facility.description}</p>
                                        </div>

                                    </div>
                                </SwiperSlide>
                            ))}
                        </Swiper>

                        {/* Navigation */}
                        <button
                            type="button"
                            className="lightbox-prev"
                            onClick={() => swiperRef.current?.slidePrev()}
                            aria-label="Previous image"
                        >
                            <i className="fa-solid fa-arrow-left"></i>
                        </button>

                        <button
                            type="button"
                            className="lightbox-next"
                            onClick={() => swiperRef.current?.slideNext()}
                            aria-label="Next image"
                        >
                            <i className="fa-solid fa-arrow-right"></i>
                        </button>

                        {/* Image Counter */}
                        <div className="lightbox-counter">
                            {String(activeIndex + 1).padStart(2, "0")}
                            <span> / </span>
                            {String(facilities.length).padStart(2, "0")}
                        </div>

                    </div>
                </div>
            )}
        </>
    );
};

export default FacilityGallery;
