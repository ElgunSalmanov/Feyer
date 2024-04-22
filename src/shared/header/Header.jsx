import { NavLink, useLocation } from "react-router-dom";
import { MdOutlineShoppingBag } from "react-icons/md";
import { FaCaretDown } from "react-icons/fa";
import { useEffect, useState } from "react";
import Basket from "../../components/basket/Basket";
import "./header.scss";
import { useSelector } from "react-redux";

function Header() {
  const [isOpen, setIsOpen] = useState(false);
  const body = document.querySelector("body");
  const location = useLocation();
  const card = useSelector((state) => state);

  const handleClick = () => {
    setIsOpen(true);
  };

  useEffect(() => {
    setTimeout(() => {
      body.style.overflow = isOpen ? "hidden" : "auto";
    }, 270);
  }, [isOpen, body]);

  useEffect(() => {
    window.scrollTo(0, 0);
  }, [location.pathname]);

  return (
    <nav className="navbar">
      <NavLink to="/" className="navbar-home">
        Feyer
      </NavLink>
      <ul className="navbar-list">
        <NavLink
          to="/shop"
          className={({ isActive }) =>
            isActive
              ? "navbar-list-item first-child active"
              : "navbar-list-item  first-child"
          }
        >
          Shop
          <FaCaretDown className="down" />
        </NavLink>
        <div className="navbar-popup">
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
          onClick={handleClick}
          className="navbar-shopping-icon"
        />
        <p className="navbar-shopping-count">({card["name"].card.length})</p>
      </div>
      <Basket active={isOpen} setClose={setIsOpen} />
    </nav>
  );
}

export default Header;
