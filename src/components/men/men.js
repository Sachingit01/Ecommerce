import React from "react";
import Styles from "../mstyle/men.module.css";
import Nav from "../nav";
import Head from "./head";
import Section1 from "./section1";
// import Section2 from "./section2";
import Section3 from "./section3";
import Section2 from "./section2";

import Details from "./details";
import Off from "../off";
import Footer from "../women/footer";
import data from "../menData";
function men() {
  return (
    <div>
      <Nav />
      <Head />
      <Section1 />
      <div className={Styles.body}>
        <h1 id={Styles.h1}>MEN ORGINALS</h1>
        <section className={Styles.container}>
          <div className={Styles.card}>
            {data.productData.map((item, index) => {
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
      <Section3 />

      <Details />
      <Off />
      <Footer />
    </div>
  );
}

export default men;
