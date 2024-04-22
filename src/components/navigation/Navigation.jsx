import { Link } from "react-router-dom";
import about from "../../assets/img/man2.jpeg";
import values from "../../assets/img/man3.jpeg";
import "./navigation.scss";

function Navigation() {
  return (
    <div className="navigation">
      <div className="navigation-all">
        <img className="navigation-image" src={about} alt="product" />
        <div className="navigation-container">
          <h2 className="navigation-container-title">Who we are</h2>
          <p className="navigation-container-description">
            It all started with two guys who loved hats.
          </p>
          <Link to="/about" className="navigation-container-navigate">
            About us
          </Link>
        </div>
      </div>
      <div className="navigation-all">
        <img className="navigation-image" src={values} alt="product" />
        <div className="navigation-container">
          <h2 className="navigation-container-title">How it's made</h2>
          <p className="navigation-container-description">
            All of our products are sustainably made.
          </p>
          <Link to="/ourvalues" className="navigation-container-navigate">
            Our values
          </Link>
        </div>
      </div>
    </div>
  );
}

export default Navigation;
