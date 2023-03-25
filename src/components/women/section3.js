import React from "react";
import Styles from "../mstyle/section3.module.css";
import left from "../../photo/chevron-left.svg";
import right from "../../photo/chevron-right.svg";
const section3 = () => {
  return (
    <div>
      <div>
        <div className={Styles.body}>
          <div className={Styles.arrow}>
            <h1 id={Styles.h1}>WHAT'S HOT</h1>
            <img src={right} />
            <img src={left} />
          </div>

          <div className={Styles.flex3}>
            <div className={Styles.flexa2}>
              <div className={Styles.photo}>
                <video
                  loop="9"
                  autoplay=""
                  playsinline=""
                  src="https://brand.assets.adidas.com/video/upload/q_auto,vc_auto,c_scale,w_0.5/video/upload/running-ss23-ultraboost-light-global-launch-w-glp-teaser-carousel-t_avajnd.mp4"
                ></video>
              </div>
              <div id={Styles.text1}>
                <p id={Styles.p}>adidas TERREX x National Geographic</p>
                <p id={Styles.gray}>
                  Celebrate the feeling of being outdoors <br></br>with hiking
                  apparel featuring unique<br></br> prints
                </p>
                <a href="#">SHOP NOW</a>
              </div>
            </div>
            <div className={Styles.flexa2}>
              <div className={Styles.photo}>
                <video
                  loop="9"
                  autoplay=""
                  playsinline=""
                  src="https://brand.assets.adidas.com/video/upload/q_auto,vc_auto,c_scale,w_0.5/video/upload/asmc-ss23-planet-sport-launch-glp-tcc-t_w2aaad.mp4"
                ></video>
              </div>
              <div id={Styles.text1}>
                <p id={Styles.p}>Epic energy in every stride</p>
                <p id={Styles.gray1}>Ultraboost Light.Our lightest ever.</p>
                <a href="#">SHOP NOW</a>
              </div>
            </div>
            <div className={Styles.flexa2}>
              <div className={Styles.photo}>
                <video
                  loop="9"
                  src="https://brand.assets.adidas.com/video/upload/q_auto,vc_auto,c_scale,w_0.5/video/upload/enIN/IN-SS23-running-local-hp-tc-d.mp4"
                ></video>
              </div>
              <div id={Styles.text1}>
                <p id={Styles.p}>Running needs nothing</p>
                <p id={Styles.gray2}>
                  Running is goal-post free,slide-line free,scoreboard free.
                </p>
                <a href="#">EXPOLRE MORE</a>
              </div>
            </div>
            <div className={Styles.flexa2}>
              <div className={Styles.photo}>
                <img src="https://brand.assets.adidas.com/image/upload/f_auto,q_auto,fl_lossy/if_w_gt_800,w_800/enIN/Images/bask-ss23-chapter1-hp-tcc-launch-womens_tcm209-987698.jpg" />
              </div>
              <div id={Styles.text1}>
                <p id={Styles.p}>THE 2023 COLLECTION</p>
                <p id={Styles.gray3}>
                  Expolre Basketball Chapter 02,the latest drop from a new
                  collection by adias Basketball
                </p>
                <a href="#">SHOP NOW</a>
              </div>
            </div>
            <div className={Styles.flexa2}>
              <div className={Styles.photo}>
                <img src="https://brand.assets.adidas.com/image/upload/f_auto,q_auto,fl_lossy/if_w_gt_800,w_800/enIN/Images/ss23-ip-7-launch-glp-w-tc-d_tcm209-988902.jpg" />
              </div>
              <div id={Styles.text1}>
                <p id={Styles.p}>PAUL POGBA PACK</p>
                <p id={Styles.gray4}>
                  Limited edition Predator Accuracy-energy your game
                </p>
                <a href="#">SHOP NOW</a>
              </div>
            </div>
            <div className={Styles.flexa2}>
              <div className={Styles.photo}>
                <img src="https://brand.assets.adidas.com/image/upload/f_auto,q_auto,fl_lossy/if_w_gt_800,w_800/enIN/Images/1050x1400_tcm209-899352.jpg" />
              </div>
              <div id={Styles.text1}>
                <p id={Styles.p}>PARK TRAIL</p>
                <p id={Styles.gray5}>
                  From adidas x IVY PARK.Discover your park.
                </p>
                <a href="#">SHOP NOW</a>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default section3;
