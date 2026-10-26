import React from 'react';
import { Link } from "react-router-dom";


const Footer = () => {
    return (
        <div>
            <footer className="footerJah py-5">
                <div className="container">

                    {/* Top */}
                    <div className="row footer-topJah align-items-center">

                        <div className="col-md-4 col-12">
                            <div className="footer-logoJah">
                                <Link to="/">
                                    <img
                                        src="/img/logo-white.png"
                                        alt="Innovative Systems"
                                        className="img-fluid w-100"
                                    />
                                </Link>
                            </div>
                        </div>

                        <div className="col-md-8 col-12 d-flex justify-content-start justify-content-md-end align-items-center mt-3 mt-md-0">

                            <div className="footer-socialsTitleJah">
                                Follow Our Socials
                            </div>

                            <div className="footer-socialsJah">

                                <a
                                    href="https://www.facebook.com/prisana.fb"
                                    target="_blank"
                                    rel="noreferrer"
                                >
                                    <i className="fa-brands fa-facebook-f"></i>
                                </a>
                                <a
                                    href="https://www.instagram.com/theofficialprisana/?"
                                    target="_blank"
                                    rel="noreferrer"
                                >
                                    <i className="fa-brands fa-instagram"></i>
                                </a>

                                <a
                                    href="https://www.youtube.com/@Prisana-yt/shorts?app=desktop"
                                    target="_blank"
                                    rel="noreferrer"
                                >
                                    <i class="fa-brands fa-youtube"></i>
                                </a>

                               

                                {/* LinkedIn */}
                                <a
                                    href="https://www.linkedin.com/company/official-prisana/"
                                    target="_blank"
                                    rel="noreferrer"
                                >
                                    <i className="fa-brands fa-linkedin-in"></i>
                                </a>

                                {/* Instagram */}
                             
                            </div>

                        </div>

                    </div>

                    {/* Middle */}

                    <div className="row gy-4">

                        {/* Information */}

                        <div className="col-lg-2 col-md-6">

                            <h5 className="footer-headingJah">
                                Quick Links
                            </h5>

                            <ul className="footer-linksJah">

                                <li><Link to="/">Home</Link></li>

                                <li><Link to="/about">About Us</Link></li>

                                <li><Link to="/products">Our Product</Link></li>

                                <li><Link to="/gallery">Gallery</Link></li>

                                <li><Link to="/contact">Contact Us</Link></li>

                            </ul>

                        </div>

                        {/* Services */}

                        <div className="col-lg-3 col-md-6">

                            <h5 className="footer-headingJah">
                                Our Product
                            </h5>

                            <ul className="footer-linksJah">

                                <li>
                                    <a href="/">
                                        Screen Wash Concentrate
                                    </a>
                                </li>

                                <li>
                                    <a href="/">
                                        Crystal Clear Visibility
                                    </a>
                                </li>

                                <li>
                                    <a href="/">
                                        Removes Dust & Road Grime
                                    </a>
                                </li>

                                <li>
                                    <a href="/">
                                        Streak-Free Cleaning
                                    </a>
                                </li>

                                <li>
                                    <a href="/">
                                        Safe for All Windshields
                                    </a>
                                </li>

                                <li>
                                    <a href="/">
                                        Easy Mix Formula
                                    </a>
                                </li>

                            </ul>

                        </div>

                        {/* Contact */}

                        <div className="col-lg-4 col-md-6">

                            <h5 className="footer-headingJah">
                                Contact Us
                            </h5>

                            <div className="footer-contactItemJah">

                                <div className="footer-contactIconJah">
                                    <i className="fa-solid fa-phone"></i>
                                </div>

                                <div className="call">

                                    <a href="tel:+919999773525">
                                        +91 99997 73525
                                    </a>

                                </div>

                            </div>

                            <div className="footer-contactItemJah">

                                <div className="footer-contactIconJah">
                                    <i className="fa-solid fa-envelope"></i>
                                </div>

                                <a href="mailto:info@rexeindia.com">
                                    info@rexeindia.com
                                </a>

                            </div>

                            <div className="footer-contactItemJah">

                                <div className="footer-contactIconJah">
                                    <i className="fa-solid fa-location-dot"></i>
                                </div>

                                <div>
                                    New Delhi, India
                                </div>

                            </div>

                        </div>

                        {/* Newsletter */}

                        <div className="col-lg-3 col-md-6">

                            <h5 className="footer-headingJah">
                                Stay Updated
                            </h5>

                            <p className="footer-newsTextJah">
                                Subscribe to receive the latest product updates, cleaning tips, and exclusive news from <strong>Prisana</strong>.
                            </p>

                            <div className="footer-inputWrapJah">

                                <input
                                    type="email"
                                    className="footer-inputJah"
                                    placeholder="Enter your email"
                                />

                                <span className="footer-inputArrowJah">
                                    <i className="fa-solid fa-arrow-right-long"></i>
                                </span>

                            </div>

                        </div>
                    </div>

                    {/* Bottom */}

                    <div className="footer-bottomJah">

                        Copyright © {new Date().getFullYear()}{" "}

                        <a href="/">
                            Prisana

                        </a>

                        {" "}All Rights Reserved.

                    </div>

                </div>
            </footer>
        </div>
    )
}

export default Footer;
