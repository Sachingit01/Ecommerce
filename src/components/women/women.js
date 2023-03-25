import React from "react";
import Styles from "../wstyle/women.module.css";
import Nav from "../nav";
import Head from "./head";
import Head1 from "./head1";
import Section1 from "./section1";
import Section3 from "./section3";
import Section2 from "./section2";
import Details from "./details";
import Off from "../off";
import Footer from "./footer";
import data from "../womenData";
function women() {
  return (
    <div className={Styles.container}>
      <Nav />
      <Head />
      {/* <Head1/> */}
      <Section1 />
      {/* <Section2 /> */}
      <div className={Styles.body}>
        <h1 id={Styles.h1}>WOMEN ORGINALS</h1>
        <section className={Styles.container1}>
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

export default women;
