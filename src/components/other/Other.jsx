import { Link } from "react-router-dom";
import "./other.scss";

function Other() {
  return (
    <div className="other">
      <h1 className="other-title">Other pages</h1>
      <ul className="other-list">
        <li className="other-description">
          <Link className="other-description-link" to="/shipping">
            Shipping & returns
          </Link>
        </li>
        <li className="other-description">
          <Link className="other-description-link" to="/privacy">
            Privacy Policy
          </Link>
        </li>
        <li className="other-description">
          <Link className="other-description-link" to="/guide">
            Size guide
          </Link>
        </li>
        <li className="other-description">
          <Link className="other-description-link" to="/terms">
            Terms conditions
          </Link>
        </li>
      </ul>
    </div>
  );
}

export default Other;
