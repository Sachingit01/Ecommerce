import React from "react";
import Styles from "../components/styles/content.module.css";
import Photo from "../photo/result.png";
import Photos from "../photo/1.png";
// import Dot from '../photo/Dot-PNG-Image-Background.png'
import Shoue from "../photo/140.jpg";

function home() {
  return (
    <div>
      <section className={Styles.section}>
        <div className={Styles.a}>
          <img src={Shoue} />
        </div>
        <div className={Styles.b}>
          <h1>
            Inspired by rocket science.<br></br>Build by{" "}
            <span>pure perfomance.</span>
          </h1>
          <p>
            We made great progress towords achieving our mission to be<br></br>
            the best sports company in the world
          </p>
          <button className={Styles.button}>Discover</button>
        </div>
      </section>
    </div>
  );
}

export default home;
