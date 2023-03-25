import React from "react";
import { Link } from "react-router-dom";
import Styles from "./styles/off.module.css";

const section = () => {
  return (
    <div className={Styles.shoping}>
      <h1>JOIN OUR ADICLUB & GET 15 % OFF</h1>
      <button>
        <Link to="/signup" className={Styles.signup}>
          SIGN UP FOR FREE
        </Link>
      </button>
    </div>
  );
};

export default section;
