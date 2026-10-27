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

  const [productsOpen, setProductsOpen] = useState(false);

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

              {/* Products Dropdown */}


              {/* Products Dropdown */}
              <li
                className={`nav-item dropdown prisana-dropdown ${productsOpen ? "is-open" : ""
                  }`}
                onMouseEnter={() => {
                  if (window.innerWidth >= 992) {
                    setProductsOpen(true);
                  }
                }}
                onMouseLeave={() => {
                  if (window.innerWidth >= 992) {
                    setProductsOpen(false);
                  }
                }}
              >
                <div className="prisana-dropdown-header">

                  <Link
                    className="nav-link"
                    to="/products"
                    onClick={() => setProductsOpen(false)}
                  >
                    Products
                  </Link>

                  <button
                    className="prisana-dropdown-toggle"
                    type="button"
                    onClick={() => setProductsOpen((prev) => !prev)}
                    aria-expanded={productsOpen}
                    aria-controls="prisana-products-menu"
                    aria-label="Toggle products menu"
                  >
                    <i className="fa-solid fa-chevron-down"></i>
                  </button>

                </div>


                <ul
                  id="prisana-products-menu"
                  className={`dropdown-menu prisana-dropdown-menu ${productsOpen ? "show" : ""
                    }`}
                >
                  {[
                    ["Windscreen Wash Fluid ", "windscreen-wash-fluid"],
                    ["Car Shampoo ", "car-shampoo"],
                    ["Dashboard Polish ", "dashboard-polish"],
                    ["Dry Wash Shampoo ", "dry-wash-shampoo"],
                    ["De-Mineralise Water ", "de-mineralise-water"],
                    ["Tyre Shiner ", "tyre-shiner"],
                    ["Coolant ", "coolant"],
                  ].map(([name, slug]) => (
                    <li key={slug}>
                      <Link
                        className="dropdown-item"
                        to={`/products/${slug}`}
                        onClick={() => setProductsOpen(false)}
                      >
                        {name}
                      </Link>
                    </li>
                  ))}
                </ul>

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