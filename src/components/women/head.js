import React from "react";
import Styles from "../wstyle/head.module.css";
import Pic from "../../photo/12345.png";
const head = () => {
  return (
    <div>
      <div className={Styles.container}>
        <div id={Styles.card1}>
          <h1>UP TO 60% OFF</h1>
          <p>+ EXTRA 15% ON 3499 (all women articles)</p>
          <button>SHOP NOW</button>
        </div>

        <div id={Styles.card2}>
          <img src={Pic} />
        </div>
      </div>
    </div>
  );
};
export default head;
