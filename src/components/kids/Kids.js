import React from "react";
import Styles from "../kstyle/kids.module.css";
import Nav from "../nav";
import Head from "./head";
import Section1 from "./section1";
import Section2 from "./section2";
import Section3 from "./section3";
import Details from "./details";
import Off from "../off";
import Footer from "../women/footer";
import data from "../kidsData";
import data1 from "../kidsData1";
function men() {
  return (
    <div className={Styles.container}>
      <Nav />
      <Head />

      <div className={Styles.body}>
        <section className={Styles.container1}>
          <div className={Styles.card}>
            {data.productData.map((item, index) => {
              return (
                <Section1
                  img={item.img}
                  title={item.title}
                  desc={item.desc}
                  item={item}
                  price={item.price}
                  key={index}
                />
              );
            })}
          </div>
        </section>
      </div>
      <Section3 />

      <div className={Styles.body}>
        <h1 id={Styles.h1}>TOP PICKS FOR YOU</h1>
        <section className={Styles.container1}>
          <div className={Styles.card}>
            {data1.productData.map((item, index) => {
              return (
                <Section2
                  img={item.img}
                  title={item.title}
                  desc={item.desc}
                  item={item}
                  price={item.price}
                  key={index}
                />
              );
            })}
          </div>
        </section>
      </div>

      <Details />
      <Off />
      <Footer />
    </div>
  );
}

export default men;
