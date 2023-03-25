import React from "react";
import Styles from "../wstyle/head1.module.css";
function head1() {
  return (
    <div className={Styles.head2}>
      <video controls autoPlay>
        <source
          src="https://brand.assets.adidas.com/video/upload/q_auto,vc_auto/video/upload/enIN/IN-SS23-BL-dynamic-hp-mh-m.mp4"
          preload="auto"
          autoplay="8"
          loop="9"
          type="video/mp4"
        />
      </video>
    </div>
  );
}

export default head1;
