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
            <h4>SNEAKERS</h4>
          </a>
        </div>

        <div id={Styles.card}>
          <img
            src="https://assets.adidas.com/images/w_280,h_280,f_auto,q_auto:sensitive/1e1e112f63ef41339e61aec900b4de67_9366/adicolor-neuclassics-track-pants.jpg"
            class="img-fluid"
          />
          <a href="#">
            {" "}
            <h4>PANTS</h4>
          </a>
        </div>
        <div id={Styles.card}>
          <img
            src="https://assets.adidas.com/images/w_280,h_280,f_auto,q_auto:sensitive/e86622d375f740d09a3eaf460149b262_9366/yoga-base-training-aeroready-full-zip-hoodie.jpg"
            class="img-fluid"
          />
          <a href="#">
            {" "}
            <h4>HOODIES&SWEATSHIRTS</h4>
          </a>
        </div>
        <div id={Styles.card}>
          <img
            src="https://assets.adidas.com/images/w_280,h_280,f_auto,q_auto:sensitive/ae88674cbb8b479eaea3ae8600fa0de4_9366/disney-graphic-tee.jpg"
            class="img-fluid"
          />
          <a href="#">
            {" "}
            <h4>TSHIRTS</h4>
          </a>
        </div>
      </div>
    </div>
  );
};

export default content;
