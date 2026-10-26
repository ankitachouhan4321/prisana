import { useEffect, useState } from "react";
import { Link } from "react-router-dom";

export default function Navbar() {
  const [sticky, setSticky] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setSticky(window.scrollY > 40);
    };

    window.addEventListener("scroll", handleScroll);

    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <>
      {/* Top Header */}

      <div className={`top-header ${sticky ? "hide-top" : ""}`}>
        <div className="container">

          <div className="row align-items-center">

            <div className="col-lg-8">

              <div className="top-left">

                <span>
                  <i className="fa-regular fa-clock"></i>
                  Monday to Saturday 9:00 AM - 6:00 PM
                </span>

                <span>
                  <i className="fa-solid fa-phone"></i>
                  <a href="tel:+919999773525">
                    +91 99997 73525
                  </a>
                </span>


              </div>

            </div>

            <div className="col-lg-4">

              <div className="top-right">

                <a href="https://www.facebook.com/prisana.fb" target="_"><i className="fab fa-facebook-f"></i></a>
                <a href="https://www.instagram.com/theofficialprisana/" target="_"><i className="fab fa-instagram"></i></a>
                <a href="https://www.youtube.com/@Prisana-yt/shorts?app=desktop" target="_"><i className="fa-brands fa-youtube"></i></a>
                <a href="https://www.linkedin.com/company/official-prisana/" target="_"><i className="fab fa-linkedin-in"></i></a>

              </div>

            </div>

          </div>

        </div>
      </div>

      {/* Navbar */}

      <nav className={`navbar navbar-expand-lg main-navbar ${sticky ? "sticky-nav" : ""}`}>

        <div className="container">

          {/* Logo */}

          <a className="navbar-brand logo-panel" href="/">
            <img src="/img/logo.png" alt="Logo" />
          </a>

          {/* Toggle */}

          <button
            className="navbar-toggler"
            type="button"
            data-bs-toggle="collapse"
            data-bs-target="#mainMenu"
            aria-controls="mainMenu"
            aria-expanded="false"
          >
            <span className="fa-solid fa-bars-staggered"></span>
          </button>

          {/* Menu */}

          <div
            className="collapse navbar-collapse justify-content-between"
            id="mainMenu"
          >

            <ul className="navbar-nav ms-auto">

              <li className="nav-item">
                <Link className="nav-link active" to="/">
                  Home
                </Link>
              </li>

              <li className="nav-item">
                <Link className="nav-link" to="/about">
                  About
                </Link>
              </li>

              <li className="nav-item">
                <Link className="nav-link" to="/products">
                  Products
                </Link>
              </li>

              <li className="nav-item">
                <Link className="nav-link" to="/gallery">
                  Gallery
                </Link>
              </li>


              <li className="nav-item">
                <Link className="nav-link" to="/contact">
                  Contact
                </Link>
              </li>

            </ul>

            {/* Right Side */}

            <div className="right-box">

              <div className="divider"></div>

              {/* <a href="#" className="nav-icon">
                <i className="fa-solid fa-magnifying-glass"></i>
              </a>

              <a href="#" className="nav-icon">
                <i className="fa-solid fa-cart-shopping"></i>
              </a> */}

              <a href="tel:+919999773525" className="theme-btn">
                Call Now
                <i className="fa-solid fa-phone-volume fa-beat"></i>
              </a>

            </div>

          </div>

        </div>

      </nav>
    </>
  );
}