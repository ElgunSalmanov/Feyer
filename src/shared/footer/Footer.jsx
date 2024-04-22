import { Link } from "react-router-dom";
import "./footer.scss";

function Footer() {
  return (
    <footer className="footer">
      <div className="footer-about">
        <div className="footer-about-info">
          <h2 className="footer-about-info-title">About Us</h2>
          <p className="footer-about-info-description">
            Two guys, and one hat to rule them both. Or so we thought – turned
            out we were in it for the long game, and are on a mission to change
            menswear for the better.
          </p>
        </div>
        <form className="footer-about-form">
          <label className="footer-about-form-text" htmlFor="email">
            Email address
          </label>
          <input
            className="footer-about-form-email"
            type="email"
            name="email"
            id="email"
            placeholder="Your email address"
          />
          <button className="footer-about-form-submit" type="submit">
            Submit
          </button>
        </form>
      </div>
      <div className="footer-navigation">
        <ul className="footer-navigation-list">
          <li className="footer-navigation-address-title">
            <strong>Address</strong>
          </li>
          <li className="footer-navigation-address-description">
            Name of street 12, Name of city, Post code 123
          </li>
        </ul>
        <ul className="footer-navigation-list">
          <li className="footer-navigation-contact-title">
            <strong>Contact Us</strong>
          </li>
          <li className="footer-navigation-description">
            <a
              className="footer-navigation-description-link"
              href="mailto:info@feyer.com"
              target="_self"
            >
              info@feyer.com
            </a>
          </li>
          <li className="footer-navigation-description">
            <a
              className="footer-navigation-description-link"
              href="tel:123-456-7890"
              target="_self"
            >
              123-456-7890
            </a>
          </li>
        </ul>
        <ul className="footer-navigation-list">
          <li className="footer-navigation-follow-title">
            <strong>Follow</strong>
          </li>
          <li className="footer-navigation-description">
            <a
              className="footer-navigation-description-link"
              href="https://www.facebook.com/"
            >
              Facebook
            </a>
          </li>
          <li className="footer-navigation-description">
            <a
              className="footer-navigation-description-link"
              href="https://www.instagram.com/"
            >
              Instagram
            </a>
          </li>
        </ul>
        <ul className="footer-navigation-list">
          <li className="footer-navigation-info-title">
            <strong>Info</strong>
          </li>
          <li className="footer-navigation-description">
            <Link className="footer-navigation-description-link" to="/shipping">
              Shipping & returns
            </Link>
          </li>
          <li className="footer-navigation-description">
            <Link className="footer-navigation-description-link" to="/privacy">
              Privacy Policy
            </Link>
          </li>
          <li className="footer-navigation-description">
            <Link className="footer-navigation-description-link" to="/guide">
              Size guide
            </Link>
          </li>
          <li className="footer-navigation-description">
            <Link className="footer-navigation-description-link" to="/terms">
              Terms conditions
            </Link>
          </li>
        </ul>
      </div>
    </footer>
  );
}

export default Footer;
