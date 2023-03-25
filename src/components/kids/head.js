import React from "react";
import Styles from "../kstyle/head.module.css";
import Pic from "../../photo/1.jpg";
const head = () => {
  return (
    <div>
      <div className={Styles.container}>
        <div id={Styles.card1}>
          <h1>CREATED FOR EARLY ADVENTURES</h1>
          <p>
            Created symmetrical so no more left and right <br></br>shoes. This
            is Monofit. Only at adidas.
          </p>
          <button>SHOP NOW</button>
        </div>

        <div id={Styles.card2}>
          <img
            src="https://sslimages.shoppersstop.com/sys-master/root/hf3/h43/29377798340638/Discount-Treat-Msite17-2-2023-88944bvnbhgghtutuht4.jpg"
            class="img-fluid"
            alt="..."
          ></img>
        </div>
      </div>
    </div>
  );
};

export default head;
