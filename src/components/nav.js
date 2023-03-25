import React, { useState } from "react";
import Styles from "../components/styles/nav.css";
import adidas from "../photo/adidas.svg";
// import Cart from "../photo/cart-2-svgrepo-com.svg";
import Pic from "../photo/adidas-svgrepo-com.svg";
import { Link } from "react-router-dom";
// import cart from "./cart/cart";


function Navbar() {
  const [active, setActive] = useState("nav__menu");
  const [icon, setIcon] = useState("nav__toggler");
  const navToggle = () => {
    if (active === "nav__menu") {
      setActive("nav__menu nav__active");
    } else setActive("nav__menu");

    // Icon Toggler
    if (icon === "nav__toggler") {
      setIcon("nav__toggler toggle");
    } else setIcon("nav__toggler");
  };
  return (
    // <div>
    <nav className="nav">
      <div className="st">
        <img src={adidas} id="img1" />
        <a href="#" className="nav__brand">
          <Link to="/home">Adidas</Link>
        </a>
      </div>
      <ul className={active}>
        <li className="nav__item">
          <img src={Pic} id="img" />
          <a href="#" className="nav__link">
            <Link to="/men">MEN</Link>
          </a>
        </li>
        <li className="nav__item">
          <img src={Pic} id="img" />
          <a href="#" className="nav__link">
            <Link to="/women">WOMEN</Link>
          </a>
        </li>
        <li className="nav__item">
          <img src={Pic} id="img" />
          <a href="#" className="nav__link">
            <Link to="/kids">KIDS</Link>
          </a>
        </li>
        <li className="nav__item">
          <img src={Pic} id="img" />
          <a href="#" className="nav__link">
            <Link to="/cart">CART</Link>
          </a>
        </li>
        {/* <li className="nav__item">
          <a href="#" className="nav__brand">
            LOGOUT
          </a>
        </li> */}
      </ul>
      <div className="logout">
        <li className="nav__item">
          <a id="logout" href="#" className="nav__brand">
            <Link to="/">LOGOUT</Link>
          </a>
        </li>
      </div>
      <div onClick={navToggle} className={icon}>
        <div className="line1"></div>
        <div className="line2"></div>
        <div className="line3"></div>
      </div>
    </nav>
  );
}

export default Navbar;
