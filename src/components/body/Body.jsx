import { Link } from "react-router-dom";
import group from "../../assets/img/group.jpeg";
import "./body.scss";

function Body() {
  return (
    <div className="body">
      <div className="body-design">
        <h1 className="body-design-title">Size guide</h1>
        <p className="body-design-text configration">
          A size chart is a document that reflects the measurements for your
          size range within your brand. You could upload size guide in this
          page.
        </p>
      </div>
      <div className="body-design">
        <h1 className="body-design-title">Upper body</h1>
        <img className="body-design-image" src={group} alt="group" />
      </div>
      <div className="body-design">
        <h1 className="body-design-title">Read more</h1>
        <ul className="body-design-list">
          <li className="body-design-description">
            <Link className="body-design-description-link" to="/shipping">
              Shipping & returns
            </Link>
          </li>
          <li className="body-design-description">
            <Link className="body-design-description-link" to="/privacy">
              Privacy Policy
            </Link>
          </li>
          <li className="body-design-description">
            <Link className="body-design-description-link" to="/guide">
              Size guide
            </Link>
          </li>
          <li className="body-design-description">
            <Link className="body-design-description-link" to="/terms">
              Terms conditions
            </Link>
          </li>
        </ul>
      </div>
    </div>
  );
}

export default Body;
