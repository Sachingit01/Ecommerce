import React from "react";
import Styles from "../wstyle/footer.module.css";

const footer = () => {
  return (
    <div>
      <div className={Styles.footer2}>
        <a>Privacy statement |</a>
        <a>Terms and Conditions |</a>
       
      </div>
      <div className={Styles.footerc}>
        <p>©2021 adidas India Marketing Pvt. Ltd</p>
      </div>
    </div>
  );
};

export default footer;
