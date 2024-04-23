import { NavLink, useLocation } from "react-router-dom";
import { MdOutlineShoppingBag } from "react-icons/md";
import { FaCaretDown } from "react-icons/fa";
import { useEffect, useState } from "react";
import { useSelector } from "react-redux";
import { GiHamburgerMenu } from "react-icons/gi";
import Basket from "../../components/basket/Basket";
import "./header.scss";

function Header() {
  const [isOpen, setIsOpen] = useState(false);
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isBlock, setIsBlock] = useState(false);
  const body = document.querySelector("body");
  const location = useLocation();
  const card = useSelector((state) => state);

  useEffect(() => {
    setTimeout(() => {
      body.style.overflow = isOpen ? "hidden" : "auto";
    }, 270);
  }, [isOpen, body]);

  useEffect(() => {
    window.scrollTo(0, 0);
    setIsMenuOpen(false);
  }, [location.pathname]);

  return (
    <nav className="navbar">
      <GiHamburgerMenu
        onClick={() => setIsMenuOpen(!isMenuOpen)}
        className="navbar-hamburger"
      />
      <NavLink to="/" className="navbar-home">
        Feyer
      </NavLink>
      <ul
        className="navbar-list"
        style={{
          opacity: isMenuOpen ? 1 : 0,
        }}
      >
        <NavLink
          to="/shop"
          onClick={() => setIsBlock(true)}
          className={({ isActive }) =>
            isActive
              ? "navbar-list-item first-child active"
              : "navbar-list-item  first-child"
          }
        >
          Shop
          <FaCaretDown className="down" />
        </NavLink>
        <div
          className="navbar-popup"
          style={{ display: isBlock ? "flex" : "none" }}
        >
          <NavLink to="/jackets" className="navbar-popup-item">
            Jackets
          </NavLink>
          <NavLink to="/hats" className="navbar-popup-item">
            Hats
          </NavLink>
        </div>
        <NavLink to="/about" className="navbar-list-item">
          About
        </NavLink>
        <NavLink to="/ourvalues" className="navbar-list-item">
          Our Values
        </NavLink>
        <NavLink to="/contact" className="navbar-list-item">
          Contact
        </NavLink>
      </ul>
      <div className="navbar-shopping">
        <MdOutlineShoppingBag
          onClick={() => setIsOpen(true)}
          className="navbar-shopping-icon"
        />
        <p className="navbar-shopping-count">({card["name"].card.length})</p>
      </div>
      <Basket active={isOpen} setClose={setIsOpen} />
    </nav>
  );
}

export default Header;
