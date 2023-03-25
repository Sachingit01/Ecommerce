import React from "react";
import Styles from "../kstyle/section3.module.css";
import left from "../../photo/chevron-left.svg";
import right from "../../photo/chevron-right.svg";
import Button from "react-bootstrap/Button";
import Card from "react-bootstrap/Card";
const section3 = () => {
  return (
    <div className={Styles.flex}>
      <div className={Styles.section1}>
        <Card style={{ width: "98%", marginBottom: "80px" }}>
          <Card.Img
            variant="top"
            src="https://brand.assets.adidas.com/image/upload/f_auto,q_auto,fl_lossy/if_w_gt_800,w_800/enIN/Images/xcat-fw21-kidssizeguide-app-kglp-teaser-d_tcm209-736544.jpg"
          />
          <Card.Body>
            <h5 className={Styles.head}>THE RIGHT SIZE MATTERS</h5>
            <p className={Styles.p}>
              Buying cloths for kids can be tricky.Check out our Kids Clothing
              Size Guide to <br></br>learn how to measure and find their perfect
              fit.
            </p>
            <a className={Styles.a} href="#">
              GO TO THE CLOTHING SIZE GUIDE
            </a>
          </Card.Body>
        </Card>
      </div>

      <div className={Styles.section2}>
        <Card style={{ width: "98%", paddingBottom: "30px" }}>
          <Card.Img
            variant="top"
            src="https://brand.assets.adidas.com/image/upload/f_auto,q_auto,fl_lossy/if_w_gt_800,w_800/enIN/Images/xcat-fw21-kidssizeguide-shoes-kglp-teaser-d_tcm209-736549.jpg"
          />
          <body>
            <h5 className={Styles.head}>FIND THEIR FIT</h5>
            <p className={Styles.p}>
              Kids feet grow fast.Use Our Kids Shoue Size Guid for step-by-step
              instructions on<br></br>how to measure,complete with fit tips and
              product suggetions.
            </p>
            <a className={Styles.a} href="#">
              GO TO THE SHOUE SIZE GUIDE
            </a>
          </body>
        </Card>
      </div>
    </div>
  );
};

export default section3;
