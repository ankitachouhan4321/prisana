import React from 'react'
import Breadcrumb from '../component/Breadcrumb'
import Brand from '../component/Brand';



const visionMissionValues = [
    {
        icon: "fa-solid fa-eye",
        title: "Vision",
        text: "Our vision is to build Prisana into a leading automotive care brand, growing alongside our partners while delivering world-class products and establishing lasting customer trust.",
    },
    {
        icon: "fa-solid fa-bullseye",
        title: "Mission",
        text: "To establish Prisana as a trusted name in automotive care by delivering world-class quality products backed by precision-driven formulations and manufacturing expertise.",
    },
    {
        icon: "fa-solid fa-gem",
        title: "Values",
        text: "Customer Focus, Integrity, Quality, Ethics, Commitment, and a consistently Result-Oriented Approach guide everything we do.",
    },
];


const About = () => {
  return (
    <>
                <Breadcrumb title="About Us" />


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

          {/* vision start */}

          <section className="prisana-vmv-section py-5">
              <div className="container-xxl">

                  {/* Section Heading */}
                  <div className="text-start mb-5">
                      <span className="sub-title">
                          What Drives Us
                      </span>

                      <h2 className="heading-main">
                          Our Vision, Mission <span>& Values</span>
                      </h2>
                  </div>

                  {/* Cards */}
                  <div className="row g-4">

                      {visionMissionValues.map((item, index) => (
                          <div className="col-lg-4 col-md-6" key={index}>

                              <div className="prisana-vmv-card">

                                  <div className="prisana-vmv-icon">
                                      <i className={item.icon}></i>
                                  </div>

                                  <h3>{item.title}</h3>

                                  <p>{item.text}</p>

                              </div>

                          </div>
                      ))}

                  </div>
              </div>
          </section>
          {/* vision end */}

          {/* brand start */}
          <Brand/>
          {/* brand end */}


      
    </>
  )
}

export default About
