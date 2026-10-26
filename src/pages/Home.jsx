import React from 'react'
import ReactCompareImage from "react-compare-image";
import { useState, useRef } from "react";

import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation, Pagination, Autoplay } from "swiper/modules";

import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";

import blog1 from "/img/blog/1.png";
import blog2 from "/img/blog/2.png";
import blog3 from "/img/blog/3.jpg";



import FacilityGallery from '../component/FacilityGallery';


const products = [
  {
    id: 1,
    name: "Wind Screenwash Fluid",
    image: "/img/prod/1.png",
    image2: "/img/prod/2.png",
    category: "Glass Care",
    description:
      "A concentrated windshield cleaning formula that removes dust, pollution film, and dirt for crystal-clear, streak-free visibility.",
    slug: "wind-screenwash-fluid",
  },
  {
    id: 2,
    name: "Anti-Freeze Coolant",
    image: "/img/products/anti-freeze-coolant.png",
    image2: "/img/products/wind-screenwash.png",

    description:
      "Help protect your engine with dependable cooling performance in changing temperatures.",
    slug: "anti-freeze-coolant",
  },
  {
    id: 3,
    name: "Dashboard Polish",
    image: "/img/products/dashboard-polish.png",
    image2: "/img/products/wind-screenwash.png",

    description:
      "Refresh your car's interior with a smooth finish and a beautifully maintained dashboard.",
    slug: "dashboard-polish",
  },
  {
    id: 4,
    name: "Tyre Polish",
    image: "/img/products/tyre-polish.png",
    image2: "/img/products/wind-screenwash.png",

    description:
      "Bring back a rich, refreshed appearance to your tyres with Prisana's tyre care formula.",
    slug: "tyre-polish",
  },


];
const facilities = [
  {
    id: 1,
    image: "/img/facility/ro-water-treatment.jpg",
    title: "R.O. Water Treatment Line",
    alt: "Water treatment equipment at Prisana manufacturing facility",
  },
  {
    id: 2,
    image: "/img/facility/chemical-mixing-reactor.jpg",
    title: "Chemical Mixing Reactor",
    alt: "Industrial chemical mixing reactor",
  },
  {
    id: 3,
    image: "/img/facility/sachet-filling-unit.jpg",
    title: "Automated Sachet-Filling Unit",
    alt: "Automated sachet filling equipment",
  },
];

const features = [
  {
    title: "ISO Certified",
    icon: "fa-solid fa-certificate",
    text: "Our manufacturing facility is ISO 9001:2015 and ISO 14001:2015 certified.",
  },
 
  {
    title: "1,20,000 pcs / Day",
    icon: "fa-solid fa-industry",
    text: "Daily production capacity of 1,20,000 windshield washer fluid units to meet growing demands.",
  },
  {
    title: "International Footprint",
    icon: "fa-solid fa-earth-americas",
    text: "Products manufactured by our team have reached international markets through Maruti Suzuki India.",
  },
  {
    title: "18M+ Sachets Delivered",
    icon: "fa-solid fa-boxes-stacked",
    text: "Successfully delivered over 18 million windshield washer fluid sachets to MSIL in FY 2024–25.",
  },

];

const reels = [
  {
    id: 1,
    title: "Crystal Clear Windshield",
    video: "/img/reel-1.mp4",
  },
  {
    id: 2,
    title: "Easy Car Glass Cleaning",
    video: "/img/reel-1.mp4",
  },
  {
    id: 3,
    title: "Premium Washer Fluid",
    video: "/img/reel-1.mp4",
  },
];

const steps = [
  {
    id: "01",
    img: "/img/step1.jpg",
    title: "Prepare Solution",
    text: "Mix 10 ml of Prisana Dry Wash Shampoo with 1 litre of water in a spray gun or foam gun."
  },
  {
    id: "02",
    img: "/img/step2.jpg",
    title: "Spray & Clean",
    text: "Spray the waterless car wash solution onto the vehicle and gently wipe with a clean microfibre cloth."
  },
  {
    id: "03",
    img: "/img/step3.jpg",
    title: "Wipe Gently",
    text: "Wipe lightly in one direction using a clean microfibre cloth."
  },
  {
    id: "04",
    img: "/img/step4.jpg",
    title: "Shine & Dirt Free",
    text: "Enjoy a clean, shiny, and dirt-free vehicle with Prisana Dry Wash Shampoo."
  }
];

const useItems = [
  {
    img: "/img/car.png",
    title: "Passenger Cars",
    text: "Keep your car's windshield clean and clear for comfortable everyday driving with Prisana.",
  },
  {
    img: "/img/SUVs.png",
    title: "SUVs & MUVs",
    text: "Maintain clear windshield visibility during daily commutes, highway journeys, and road trips.",
  },
  {
    img: "/img/truck.png",
    title: "Commercial Vehicles",
    text: "Help keep windshields free from everyday dust and road grime during frequent driving.",
  },
  {
    img: "/img/luxury-car.png",
    title: "Premium Vehicles",
    text: "Choose Prisana Windshield Screenwash Fluid for regular windshield cleaning and care.",
  },
];

const blogs = [
  {
    id: 1,
    image: blog1,
    date: "12",
    month: "Aug",
    title: "Why Windshield Washer Fluid Is Better Than Plain Water",
    desc: "Discover why Prisana windshield washer concentrate offers superior cleaning, streak-free visibility, and safer driving compared to using ordinary water.",
  },
  {
    id: 2,
    image: blog2,
    date: "18",
    month: "Aug",
    title: "How to Keep Your Windshield Crystal Clear in Every Season",
    desc: "Learn practical tips to maintain a spotless windshield during summer, monsoon, and winter with Prisana Screen Wash Concentrate.",
  },
  {
    id: 3,
    image: blog3,
    date: "25",
    month: "Aug",
    title: "5 Signs Your Car Needs Windshield Washer Fluid",
    desc: "Find out the common signs that indicate it's time to refill your washer reservoir for better visibility and safer driving.",
  },
];

const manufacturingFeatures = [
  {
    id: 1,
    icon: "fa-solid fa-certificate",
    title: "ISO Certified",
    desc: "Manufactured at facilities certified to ISO 9001:2015 and ISO 14001:2015 standards.",
  },
  {
    id: 2,
    icon: "fa-solid fa-shield-halved",
    title: "Safety & Compliance",
    desc: "Our manufacturing facility is equipped for fire safety and categorized Green by DPCC.",
  },
  {
    id: 3,
    icon: "fa-solid fa-industry",
    title: "High Production Capacity",
    desc: "Capable of producing up to 1,20,000 pieces of windshield washer fluid daily to support large-volume requirements.",
  },
  {
    id: 4,
    icon: "fa-solid fa-earth-asia",
    title: "International Footprint",
    desc: "Products manufactured by REXE have reached international markets through Maruti Suzuki India.",
  },
  {
    id: 5,
    icon: "fa-solid fa-boxes-stacked",
    title: "18M+ Sachets Delivered",
    desc: "Over 18 million sachets successfully supplied to Maruti Suzuki India during FY 2024–25.",
  },
  {
    id: 6,
    icon: "fa-solid fa-users-gear",
    title: "Skilled Workforce",
    desc: "An experienced manufacturing team supporting quality-focused production and customized automotive care solutions.",
  },
];

const Home = () => {
  const swiperRef = useRef(null);

  const [active, setActive] = useState(1);


  return (

    <>

      {/* hero-section start */}
      <section
        className="hero-section" id="hero-section">
        <div className="container-xxl">
          <div className="row">
            <div className="col-lg-7">
              <div className="ccc-content">

                <span className="sub-title">
                  <i className="fa-solid fa-droplet"></i>
                  Prisana Screen Wash
                </span>

                <h1 className="hero-title">
                  Crystal Clear <br />
                  <span>Every Drive.</span>
                </h1>

                <p className="hero-desc">
                  Streak-free cleaning for better visibility,
                  safer driving and all-weather performance.
                </p>

                <div className="hero-btns">

                  <a href="/products" className="theme-btn">
                    View Product
                    <i className="fa-solid fa-arrow-right"></i>
                  </a>

                  <a href="/contact" className="theme-btn-2 ms-md-2">
                    Enquire Now
                    <i className="fa-solid fa-paper-plane"></i>
                  </a>

                </div>
              </div>

            </div>
          </div>
        </div>
      </section>
      {/* hero-section end */}


      {/* About Section Start */}
      <section className="about-section py-5">
        <div className="container-lg">
          <div className="row align-items-center">

            {/* Left Content */}
            <div className="col-lg-7 mb-5 mb-lg-0">

              <span className="sub-title">
                About Prisana
              </span>

              <h2 className="heading-main">
                Precision in Every Formula. <br />
                <span>Care in Every Drive.</span>
              </h2>

              <p className="about-text">
                Prisana delivers quality automotive care solutions
                designed to clean, protect, and maintain your vehicle.
                Backed by the manufacturing expertise of REXE INDUSTRIES,
                we combine innovation, precision, and performance
                to make everyday vehicle care easier.
              </p>

              <ul className="about-list">

                <li>
                  <i className="fa-solid fa-circle-check"></i>
                  Complete range of automotive care products
                </li>

                <li>
                  <i className="fa-solid fa-circle-check"></i>
                  Precision-engineered formulations
                </li>

                <li>
                  <i className="fa-solid fa-circle-check"></i>
                  Quality-focused manufacturing expertise
                </li>

              </ul>

              <div className="experience-box">

                <div className="experience-icon">
                  <i className="fa-solid fa-award"></i>
                </div>

                <div className="experience-content">
                  <h4>
                    <strong>Since 2013</strong> — Backed by trusted
                    automotive chemical manufacturing expertise
                    and a commitment to quality.
                  </h4>
                </div>

              </div>

              <div className="about-bottom">

                <a href="/contact" className="theme-btn">
                  Contact Us
                  <i className="fa-solid fa-arrow-right"></i>
                </a>

                <div className="call-box">

                  <div className="call-icon">
                    <i className="fa-solid fa-phone-volume"></i>
                  </div>

                  <div>
                    <span>Need Assistance?</span>
                    <h5>
                      <a href="tel:+919999773525">
                        +91 99997 73525
                      </a>
                    </h5>
                  </div>

                </div>

              </div>

            </div>

            {/* Right Image */}
            <div className="col-lg-5">

              <div className="about-image">

                <img
                  src="/img/about-sec.png"
                  alt="Prisana Automotive Care Solutions"
                />

                <div className="shape"></div>

              </div>

            </div>

          </div>
        </div>
      </section>
      {/* About Section End */}



      {/* Prisana Leadership Section Start */}
      <section className="fonder py-5">
        <div className="container-lg">

          {/* Managing Director */}
          <div className="row align-items-center g-4 mb-5">

            <div className="col-md-4">
              <div className="leader-image">
                <img
                  src="/img/vinod-bhagat.jpg"
                  alt="Mr. Vinod Bhagat - Managing Director"
                  className="img-fluid"
                />
              </div>
            </div>

            <div className="col-md-8">
              <div className="leader-content left">

                {/* <span className="leader-label">
                  <i className="fa-solid fa-award"></i>
                  30 Years of Experience
                </span> */}

                <h3>Mr. Vinod Bhagat</h3>
                <h5>Managing Director</h5>

                <p>
                  With 30 years of experience in the automotive
                  chemical industry, Mr. Vinod Bhagat brings
                  extensive technical knowledge, industry insight,
                  and leadership expertise. His long-standing
                  association with Maruti Suzuki India Ltd. has
                  strengthened his understanding of automotive
                  quality standards and evolving market requirements.
                </p>

                <p>
                  His experience and commitment to precision,
                  consistency, and continuous improvement provide
                  a strong foundation for Prisana. With a focus
                  on dependable formulations and quality-driven
                  manufacturing, he helps guide the brand towards
                  delivering effective automotive care solutions
                  for modern vehicles.
                </p>

              </div>
            </div>

          </div>

          {/* Director */}
          <div className="row align-items-center g-4">

            <div className="col-md-8 order-2 order-lg-1">
              <div className="leader-content right">

                {/* <span className="leader-label">
                  <i className="fa-solid fa-award"></i>
                  10+ Years of Experience
                </span> */}

                <h3>Mr. Rahul Bhagat</h3>
                <h5>Director</h5>

                <p>
                  Mr. Rahul Bhagat has been leading the car care
                  venture since 2013, bringing more than a decade
                  of experience in the automotive chemical industry.
                  With a strong understanding of changing customer
                  expectations and automotive care requirements,
                  he focuses on developing practical, reliable,
                  and performance-oriented product solutions.
                </p>

                <p>
                  His approach combines product innovation,
                  quality management, and an understanding of
                  evolving industry trends. Through continuous
                  improvement and a commitment to customer
                  satisfaction, he helps strengthen Prisana's
                  automotive care range, from cleaning and
                  detailing products to essential vehicle
                  maintenance solutions.
                </p>

              </div>
            </div>

            <div className="col-md-4 order-1 order-lg-2">
              <div className="leader-image">
                <img
                  src="/img/rahul-bhagat.jpg"
                  alt="Mr. Rahul Bhagat - Director"
                  className="img-fluid"
                />
              </div>
            </div>

          </div>

        </div>
      </section>
      {/* Prisana Leadership Section End */}


      {/* product-sec start */}

      <section id="product-sec">
        <div className="product-sec container-lg py-lg-5 py-3">

          {/* Section Heading */}
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

          {/* Product Slider */}
          <div className="prisana-slider-wrapper">

            <Swiper
              modules={[Navigation, Pagination, Autoplay]}
              onSwiper={(swiper) => {
                swiperRef.current = swiper;
              }}
              spaceBetween={24}
              slidesPerView={1}
              speed={800}
              loop={true}
              grabCursor={true}
              autoplay={{
                delay: 3500,
                disableOnInteraction: false,
                pauseOnMouseEnter: true,
              }}
              pagination={{
                clickable: true,
                el: ".prisana-pagination",
              }}
              breakpoints={{
                0: {
                  slidesPerView: 1,
                  spaceBetween: 15,
                },
                576: {
                  slidesPerView: 2,
                  spaceBetween: 20,
                },
                992: {
                  slidesPerView: 3,
                  spaceBetween: 24,
                },
                1400: {
                  slidesPerView: 4,
                  spaceBetween: 24,
                },
              }}
              className="prisana-product-swiper"
            >
              {products.map((product) => (
                <SwiperSlide key={product.id}>

                  <div className="prisana-product-card">

                    {/* Product Image */}
                    <div className="prisana-product-image">

                      {/* <span className="prisana-product-badge">
                        PRISANA AUTO CARE
                      </span> */}

                      <img
                        src={product.image}
                        alt={product.name}
                        loading="lazy"
                        className='img1'
                      />
                      <img
                        src={product.image2}
                        alt={product.name}
                        loading="lazy"
                        className='img2'
                      />

                      <div className="prisana-image-decoration"></div>
                    </div>

                    {/* Product Content */}
                    <div className="prisana-product-content">


                      <h3>{product.name}</h3>

                      <p>{product.description}</p>

                      {/* Buttons */}
                      <div className="prisana-product-actions">

                        <a
                          href={`/products/${product.slug}`}
                          className="prisana-view-btn"
                        >
                          View More
                          <i className="fa-solid fa-arrow-up-right-from-square"></i>
                        </a>

                        <a
                          href={`/contact?product=${encodeURIComponent(
                            product.name
                          )}`}
                          className="prisana-enquire-btn"
                        >
                          Enquire Now
                          <i className="fa-solid fa-arrow-right"></i>
                        </a>

                      </div>

                    </div>

                  </div>

                </SwiperSlide>
              ))}
            </Swiper>

            {/* Slider Controls */}
            <div className="prisana-slider-bottom">

              <div className="prisana-slider-nav">

                <button
                  type="button"
                  className="prisana-prev"
                  aria-label="Previous product"
                  onClick={() => swiperRef.current?.slidePrev()}
                >
                  <i className="fa-solid fa-arrow-left"></i>
                </button>

                <button
                  type="button"
                  className="prisana-next"
                  aria-label="Next product"
                  onClick={() => swiperRef.current?.slideNext()}
                >
                  <i className="fa-solid fa-arrow-right"></i>
                </button>

              </div>

            </div>

          </div>

        </div>
      </section>

      {/* product-sec end */}

      {/* How to Use Section Start */}
      <section className="how-use-section">

        {/* Marquee Strip */}
        <div className="marquee-strip">
          <div className="marquee-content">

            {[1, 2, 3].map((item) => (
              <React.Fragment key={item}>

                <span>Prepare Solution</span>
                <i className="fa-solid fa-droplet"></i>

                <span>Spray on Vehicle</span>
                <i className="fa-solid fa-droplet"></i>

                <span>Wipe Gently</span>
                <i className="fa-solid fa-droplet"></i>

                <span>Shine & Dirt Free</span>
                <i className="fa-solid fa-droplet"></i>

              </React.Fragment>
            ))}

          </div>
        </div>

        <div className="overlay"></div>

        <div className="container position-relative">

          {/* Section Heading */}
          <div className="section-heading text-center">

            <span className="sub-title">
              Prisana Dry Wash Guide
            </span>

            <h2 className="heading-main text-white">
              How To Use Our <br />
              Dry Wash Shampoo
            </h2>

          </div>

          {/* Steps */}
          <div className="row align-items-center g-4">

            {steps.map((step) => (
              <div className="col-lg-3 col-md-6" key={step.id}>

                <div className="step-box">

                  <div className="step-icon">
                    <img
                      src={step.img}
                      alt={step.title}
                      className="img-fluid"
                    />
                  </div>

                  <h3>
                    {step.id}. {step.title}
                  </h3>

                  <p>{step.text}</p>

                </div>

              </div>
            ))}

          </div>

        </div>

      </section>
      {/* How to Use Section End */}

      {/* prisana-manufacturing-section start */}
      <section className="prisana-manufacturing-section py-5">
        <div className="container-xxl">

          <div className="text-center mb-5">
            <span className="sub-title">
              Our Strengths
            </span>

            <h2 className="heading-main">
              Certified, Capable &amp; <span>Client-Ready</span>
            </h2>

            <p className="manufacturing-intro">
              Discover the manufacturing expertise, quality standards,
              and production capabilities behind Prisana's automotive
              care solutions.
            </p>
          </div>

          <div className="row g-4">
            {manufacturingFeatures.map((feature) => (
              <div
                className="col-lg-4 col-md-6"
                key={feature.id}
              >
                <div className="manufacturing-feature-card">

                  <div className="manufacturing-feature-top">
                    <div className="manufacturing-icon">
                      <i className={feature.icon}></i>
                    </div>

                    <h3>{feature.title}</h3>
                  </div>

                  <p>{feature.desc}</p>

                </div>
              </div>
            ))}
          </div>

        </div>
      </section>
      {/* prisana-manufacturing-section end */}




      {/* where-use-section start */}

      <section className="where-use-section py-5">

        <div className="container-xxl">

          <div className="text-center mb-5">

            <h2 className="heading-main text-start">
              Where to Use
              <span> Prisana Windshield Screenwash Fluid</span>
            </h2>

            <p className="text-start">
              Keep your windshield clean and your view clear with
              Prisana Windshield Screenwash Fluid. Designed for
              vehicles equipped with windshield washer systems,
              it helps remove everyday dirt, dust, and road grime
              for better driving visibility.
            </p>

          </div>

          <div className="row g-4">

            {useItems.map((item, index) => (

              <div className="col-lg-3 col-sm-6" key={index}>

                <div className="use-card">

                  <div className="use-img">

                    <img
                      src={item.img}
                      className="img-fluid"
                      alt={item.title}
                    />

                  </div>

                  <h4>{item.title}</h4>

                  <p>{item.text}</p>

                </div>

              </div>

            ))}

          </div>

        </div>

      </section>

      {/* where-use-section end */}


      {/* reels-section start */}
      <section className="reels-section py-5 d-none">
        <div className="container">



          <div className="row g-4">

            {reels.map((item) => (
              <div className="col-lg-4 col-md-6" key={item.id}>

                <div className="reel-card">

                  <div className="ratio ratio-9x16">
                    <video
                      className="w-100 h-100"
                      src={item.video}
                      controls
                      autoPlay
                      muted
                      loop
                      playsInline
                    />
                  </div>

                  <div className="reel-content">
                    <h5>{item.title}</h5>
                  </div>

                </div>

              </div>
            ))}

          </div>

        </div>
      </section>
      {/* reels-section end */}


      {/* before-after-section start */}

      <section className="before-after-section py-md-5">

        <div className="container-fluid">

          <div className="compare-wrapper">

            {/* Before Label */}
            <div className="compare-label before-label">
              After
            </div>

            {/* After Label */}
            <div className="compare-label after-label">
              Before
            </div>

            <div className="compare-image">
              <ReactCompareImage
                leftImage="/img/after.png"
                rightImage="/img/before.png"
                sliderLineColor="#ff3b20"
              />
            </div>

          </div>

        </div>

      </section>

      {/* before-after-section end */}

      {/* faq-section start */}


      <section className="faq-section py-5">

        <div className="container">

          <div className="row align-items-center">

            {/* Left */}

            <div className="col-lg-5 mb-lg-5">

              <span className="sub-title">
                Frequently Asked Questions
              </span>

              <h2 className="heading-main">
                Everything You Need to Know About
                <span> Prisana</span>
              </h2>

              <p className="faq-text">
                Explore answers to common questions about Prisana's
                automotive care products, quality standards, product
                applications, and manufacturing expertise. Discover
                how Prisana delivers reliable solutions for everyday
                vehicle care and maintenance.
              </p>

              <img
                src="/img/faq-product.png"
                className="img-fluid faq-image"
                alt="Prisana Automotive Care Products"
              />

            </div>

            {/* Right */}

            <div className="col-lg-7">

              <div className="accordion" id="faqAccordion">

                {/* FAQ 1 */}

                <div className="accordion-item">

                  <h2 className="accordion-header">

                    <button
                      className="accordion-button"
                      type="button"
                      data-bs-toggle="collapse"
                      data-bs-target="#faq1"
                      aria-expanded="true"
                      aria-controls="faq1"
                    >
                      <i className="fa-solid fa-circle-question me-3"></i>

                      What is Prisana and what products does it offer?

                    </button>

                  </h2>

                  <div
                    id="faq1"
                    className="accordion-collapse collapse show"
                    data-bs-parent="#faqAccordion"
                  >

                    <div className="accordion-body">

                      Prisana is an automotive care brand offering a
                      comprehensive range of vehicle cleaning and
                      maintenance products, including Wind Screenwash
                      Fluid, Anti-Freeze Coolant, Dashboard Polish,
                      Tyre Polish, Car Shampoo, Dry Wash Shampoo,
                      Battery Water (D.M. Water), and Chrome Shiner.

                    </div>

                  </div>

                </div>

                {/* FAQ 2 */}

                <div className="accordion-item">

                  <h2 className="accordion-header">

                    <button
                      className="accordion-button collapsed"
                      type="button"
                      data-bs-toggle="collapse"
                      data-bs-target="#faq2"
                      aria-expanded="false"
                      aria-controls="faq2"
                    >
                      <i className="fa-solid fa-circle-question me-3"></i>

                      Who manufactures Prisana automotive care products?

                    </button>

                  </h2>

                  <div
                    id="faq2"
                    className="accordion-collapse collapse"
                    data-bs-parent="#faqAccordion"
                  >

                    <div className="accordion-body">

                      Prisana products are manufactured by REXE
                      INDUSTRIES, a New Delhi-based manufacturer
                      established in 2013. With expertise in automotive
                      chemical formulations, quality control, and
                      research, the company manufactures products
                      to meet industry and customer requirements.

                    </div>

                  </div>

                </div>

                {/* FAQ 3 */}

                <div className="accordion-item">

                  <h2 className="accordion-header">

                    <button
                      className="accordion-button collapsed"
                      type="button"
                      data-bs-toggle="collapse"
                      data-bs-target="#faq3"
                      aria-expanded="false"
                      aria-controls="faq3"
                    >
                      <i className="fa-solid fa-circle-question me-3"></i>

                      Are Prisana products manufactured to quality standards?

                    </button>

                  </h2>

                  <div
                    id="faq3"
                    className="accordion-collapse collapse"
                    data-bs-parent="#faqAccordion"
                  >

                    <div className="accordion-body">

                      Yes. Prisana products are backed by the
                      manufacturing expertise of REXE INDUSTRIES,
                      which holds ISO 9001:2015 and ISO 14001:2015
                      certifications. Its manufacturing processes
                      emphasize quality control, consistent
                      formulations, and industry standards.

                    </div>

                  </div>

                </div>

                {/* FAQ 4 */}

                <div className="accordion-item">

                  <h2 className="accordion-header">

                    <button
                      className="accordion-button collapsed"
                      type="button"
                      data-bs-toggle="collapse"
                      data-bs-target="#faq4"
                      aria-expanded="false"
                      aria-controls="faq4"
                    >
                      <i className="fa-solid fa-circle-question me-3"></i>

                      What makes Prisana a reliable automotive care brand?

                    </button>

                  </h2>

                  <div
                    id="faq4"
                    className="accordion-collapse collapse"
                    data-bs-parent="#faqAccordion"
                  >

                    <div className="accordion-body">

                      Prisana combines carefully developed automotive
                      chemical formulations with established
                      manufacturing expertise. Its manufacturer also
                      supplies products under Suzuki's global ECSTAR
                      brand to Maruti Suzuki India Limited, reflecting
                      its experience in meeting OEM requirements.

                    </div>

                  </div>

                </div>

                {/* FAQ 5 */}

                <div className="accordion-item">

                  <h2 className="accordion-header">

                    <button
                      className="accordion-button collapsed"
                      type="button"
                      data-bs-toggle="collapse"
                      data-bs-target="#faq5"
                      aria-expanded="false"
                      aria-controls="faq5"
                    >
                      <i className="fa-solid fa-circle-question me-3"></i>

                      How do I choose the right Prisana product for my vehicle?

                    </button>

                  </h2>

                  <div
                    id="faq5"
                    className="accordion-collapse collapse"
                    data-bs-parent="#faqAccordion"
                  >

                    <div className="accordion-body">

                      Choose Prisana products based on your vehicle's
                      maintenance needs. Wind Screenwash Fluid helps
                      clean windshield glass, Dashboard Polish and
                      Tyre Polish support exterior and interior care,
                      while Car Shampoo and Dry Wash Shampoo are
                      designed for vehicle cleaning. For products
                      such as Anti-Freeze Coolant and Battery Water,
                      always follow your vehicle manufacturer's
                      specifications and product instructions.

                    </div>

                  </div>

                </div>

              </div>

            </div>

          </div>

        </div>

      </section>

      {/* faq-section end */}


      {/* Manufacturing Process Start */}
      <section className="manufacturing-section py-5">
        <div className="container-xxl">

          {/* Section Heading */}
          <div className="mb-5">
            <span className="sub-title">
              How We Make It
            </span>

            <h2 className="heading-main">
              Our Manufacturing <span>Process</span>
            </h2>

            <p className="text-secondary">
              Every Prisana product reflects a commitment to
              quality, precision, and reliable automotive care,
              backed by experienced manufacturing practices.
            </p>
          </div>

          {/* Manufacturing Steps */}
          <div className="row g-4 justify-content-center">

            {[
              {
                id: "01",
                icon: "fa-solid fa-droplet",
                title: "R.O. Plant",
                text: "Purifies raw water to prepare it for further processing."
              },
              {
                id: "02",
                icon: "fa-solid fa-flask",
                title: "D.M. Plant",
                text: "De-mineralizes the R.O. water for formulation."
              },
              {
                id: "03",
                icon: "fa-solid fa-blender",
                title: "Mixing",
                text: "Blends chemicals with D.M. water to prepare the solution."
              },
              {
                id: "04",
                icon: "fa-solid fa-gears",
                title: "Machine",
                text: "Automatic machines fill the prepared material."
              },
              {
                id: "05",
                icon: "fa-solid fa-box-open",
                title: "Final Product",
                text: "Finished 50ml sachets are ready for shipping."
              }
            ].map((step) => (
              <div
                className="col-xl col-lg-4 col-md-6"
                key={step.id}
              >
                <div className="manufacturing-card h-100 text-center">

                  <div className="manufacturing-icon mx-auto mb-4">
                    <i className={step.icon}></i>

                    <span className="step-number">
                      {step.id}
                    </span>
                  </div>

                  <h4 className="fw-bold mb-3">
                    {step.title}
                  </h4>

                  <p className="text-secondary mb-0">
                    {step.text}
                  </p>

                </div>
              </div>
            ))}

          </div>

        </div>
      </section>
      {/* Manufacturing Process End */}

      {/* facility-gallery start */}
      <FacilityGallery/>
      {/* facility-gallery end */}


      {/* blog-sec start */}
      <section id="blog-sec" className='d-none'>
        <div className="blog-sec container-xxl">

          <span className="sub-title">
            Our Blogs
          </span>

          <h2 className="heading-main mb-5">
            Car Care Tips with <span>Prisana</span>
          </h2>

          <div className="row g-4">

            {blogs.map((blog) => (

              <div className="col-lg-4 col-sm-6" key={blog.id}>

                <div className="blog-card">

                  <div className="blog-img">

                    <img
                      src={blog.image}
                      alt={blog.title}
                      className="img-fluid"
                    />

                    <div className="blog-date">
                      <span>{blog.date}</span>
                      <small>{blog.month}</small>
                    </div>

                  </div>

                  <div className="blog-content">

                    <div className="blog-meta">

                      <span>
                        <i className="fa-regular fa-circle-user"></i>
                        By Prisana
                      </span>

                      <span>
                        <i className="fa-regular fa-folder-open"></i>
                        Car Care
                      </span>

                    </div>

                    <h4>
                      <a href="#">
                        {blog.title}
                      </a>
                    </h4>

                    <p>
                      {blog.desc}
                    </p>

                    <a href="#" className="read-btn">
                      Read More
                      <i className="fa-solid fa-arrow-right-long"></i>
                    </a>

                  </div>

                </div>

              </div>

            ))}

          </div>

        </div>
      </section>

      {/* blog-sec end */}

      {/* feature-strip start */}
      <section className="feature-strip py-4">
        <div className="container-fluid">
          <div className="row g-4">

            {features.map((item, index) => (
              <div className="col-xl-3 col-sm-6" key={index}>
                <div className="feature-card">

                  <div className="feature-icon">
                    <i className={item.icon}></i>
                  </div>

                  <div className="feature-content">
                    <h4>{item.title}</h4>
                    <p>{item.text}</p>
                  </div>

                </div>
              </div>
            ))}

          </div>
        </div>
      </section>
      {/* feature-strip end */}






    </>
  )
}

export default Home;
