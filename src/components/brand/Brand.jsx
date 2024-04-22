import { Link } from "react-router-dom";
import image from "../../assets/img/man.jpeg";
import "./brand.scss";

function Brand() {
  return (
    <div className="brand">
      <div className="brand-contain">
        <h2 className="brand-contain-title">
          Not just another clothing brand for men
        </h2>
        <Link to="/shop" className="brand-contain-navigate">
          Shop now
        </Link>
      </div>
      <img className="brand-image" src={image} alt="brand" />
    </div>
  );
}

export default Brand;
