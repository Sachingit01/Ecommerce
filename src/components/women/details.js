import React from "react";
import Styles from "../mstyle/details.module.css";
const details = () => {
  return (
    <div>
      <div className={Styles.details}>
        <div>
          <h1>WOMEN'S CLOTHING & SHOES</h1>
          <p>
            In sport and in life, creators aren't content on the sidelines.
            adidas women's shoes and <br></br>apparel are made for those who
            understand that rules can be negotiated; expectations,<br></br>{" "}
            evolved. Reach for a new personal best in apparel made of
            specialized performance<br></br> fabrics. Accentuate your personal
            style in sport-inspired sneakers for your day-to-day.<br></br>{" "}
            Whether sport is your life or you're an athleisure fashionista,
            women's clothing and<br></br> footwear from adidas exist to help you
            redefine what's possible.
          </p>
        </div>
      </div>
    </div>
  );
};

export default details;
