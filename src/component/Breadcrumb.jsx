
import { Link, useLocation } from "react-router-dom";
import { ChevronRight } from "lucide-react";

const Breadcrumb = ({
    title = "Contact",
    backgroundImage = "/img/bread.png",
}) => {
    const location = useLocation();
    const pathname = location.pathname;

    // Check whether the current page is a product detail page
    const isProductDetail =
        pathname.startsWith("/products/") &&
        pathname !== "/products/";

    return (
        <section
            className="breadcrumb-section"
            style={{
                backgroundImage: `
          linear-gradient(
            rgba(0, 24, 48, 0.78),
            rgba(0, 24, 48, 0.35)
          ),
          url("${backgroundImage}")
        `,
                backgroundPosition: "center",
                backgroundSize: "cover",
                backgroundRepeat: "no-repeat",
            }}
        >
            <div className="container-xxl">
                <div className="breadcrumb-wrapper">

                    {/* Page Title */}
                    <h1 className="breadcrumb-title">
                        {title}
                    </h1>

                    {/* Dynamic Breadcrumb */}
                    <nav
                        className="breadcrumb-box"
                        aria-label="Breadcrumb"
                    >
                        <Link to="/">Home</Link>

                        <ChevronRight
                            size={15}
                            className="breadcrumb-divider"
                        />

                        {isProductDetail ? (
                            <>
                                <Link to="/products">
                                    Products
                                </Link>

                                <ChevronRight
                                    size={15}
                                    className="breadcrumb-divider"
                                />

                                <span
                                    className="breadcrumb-current"
                                    aria-current="page"
                                >
                                    {title}
                                </span>
                            </>
                        ) : (
                            <span
                                className="breadcrumb-current"
                                aria-current="page"
                            >
                                {title}
                            </span>
                        )}
                    </nav>

                </div>
            </div>
        </section>
    );
};

export default Breadcrumb;
