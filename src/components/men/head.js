import React from "react";
import Styles from "../mstyle/head.module.css";
import Pic from "../../photo/1.jpg";
const head = () => {
  return (
    <div>
      <div className={Styles.container}>
        <div id={Styles.card1}>
          <h1>Stan Smith</h1>
          <p>
            Rebon for a generation that refuses to play by the <br></br>
            rules.Welcome to a new era
          </p>
          <button>SHOP NOW</button>
        </div>

        <div id={Styles.card2}>
          <img src={Pic} alt="..."></img>
        </div>
      </div>
    </div>
  );
};

export default head;
