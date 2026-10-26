
import { Link } from "react-router-dom";

const Breadcrumb = ({
    title = "Contact",
    backgroundImage = "img/bread.png",
}) => {
    return (
        <section
            className="breadcrumb-section"
            style={{
                backgroundImage: `linear-gradient(
          rgba(0, 24, 48, 0.78),
          rgba(0, 24, 48, 0)
        ), url("${backgroundImage}")`,
            }}
        >
            <div className="container-xxl">
                <div className="breadcrumb-wrapper">

                    <h1 className="breadcrumb-title">
                        {title}
                    </h1>

                    <div className="breadcrumb-box">
                        <Link to="/">Home</Link>

                        <span className="breadcrumb-divider">/</span>

                        <span className="breadcrumb-current">
                            {title}
                        </span>
                    </div>

                </div>
            </div>
        </section>
    );
};

export default Breadcrumb;
