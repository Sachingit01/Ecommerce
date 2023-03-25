import React from "react";
import Styles from "../mstyle/section1.module.css";

const content = () => {
  return (
    <div>
      <div className={Styles.flex}>
        <div id={Styles.card}>
        <img
              src="https://assets.adidas.com/images/w_280,h_280,f_auto,q_auto:sensitive/3b47c11a3ad246689234af51015bc5fb_9366/js-bones-campus-80-shoes.jpg"
              class="img-fluid"
            />
            <a href="#">
              {" "}
              <h4>SNEAKERS</h4>
            </a>
          </div>

        <div id={Styles.card}>
        <img
              src="https://assets.adidas.com/images/w_280,h_280,f_auto,q_auto:sensitive/13c576a3d7014c0d978faec300ea1b46_9366/loose-loungewear-tee.jpg"
              class="img-fluid"
            />
            <a href="#">
              {" "}
              <h4>TOPS</h4>
            </a>
          </div>
        <div id={Styles.card}>
        <img
              src="https://assets.adidas.com/images/w_280,h_280,f_auto,q_auto:sensitive/77db59657dcd4ceea65caf3100f4e210_9366/dailyrun-3-stripes-five-inch-short-leggings.jpg"
              class="img-fluid"
            />
            <a href="#">
              {" "}
              <h4>TIGHTS</h4>
            </a>
          </div>
        <div id={Styles.card}>
        <img
              src="https://assets.adidas.com/images/w_280,h_280,f_auto,q_auto:sensitive/9e9ad49697634d5a8805af8100bc3a46_9366/adidas-by-stella-mccartney-sportswear-sleeveless-hoodie-gender-neutral.jpg"
              class="img-fluid"
            />
            <a href="#">
              {" "}
              <h4>SWEATSHIRTS</h4>
            </a>
          </div>
      </div>
    </div>
  );
};

export default content;
