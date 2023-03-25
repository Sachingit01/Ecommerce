import React from "react";
import Styles from "../wstyle/footer.module.css";
function footer() {
  return (
    <div>
      <div className={Styles.footer}>
        <div className={Styles.f1}>
          <h1>PRODUCTS</h1>
          <a href="#">Footwear</a>
          <a href="#">Clothing</a>
          <a href="#">Accessories</a>
          <a href="#">Outlet - Sale</a>
          <a href="#">New Arrivals</a>
          <a href="#">Special Offer</a>
        </div>
        <div className={Styles.f2}>
          <h1>SPORTS</h1>
          <a href="#">Running</a>
          <a href="#">Football</a>
          <a href="#">Gym/Training</a>
          <a href="#">Tennis</a>
          <a href="#">Outdoor</a>
          <a href="#">Basketball</a>
          <a href="#">Swimming</a>
          <a href="#">Skateboarding</a>
        </div>
        <div className={Styles.f3}>
          <h1>COLLECTIONS</h1>
          <a href="#">Ultraboost</a>
          <a href="#">Superstar</a>
          <a href="#">NMD</a>
          <a href="#">Stan Smith</a>
          <a href="#">Sustainability</a>
          <a href="#">Predator</a>
          <a href="#">Parley</a>
          <a href="#">adicolor</a>
        </div>
        <div className={Styles.f4}>
          <h1>SUPPORT</h1>
          <a href="#">Help</a>
          <a href="#">Customer Services</a>
          <a href="#">Return & Exchanges</a>
          <a href="#">Shipping</a>
          <a href="#">Order Tracker</a>
          <a href="#">Store Locator</a>
          <a href="#">Running Shoue Finder</a>
          <a href="#">Bra Fit Guide</a>
          <a href="#">adiclub</a>
          <a href="#">adiclub Terms and conditions</a>
        </div>
        <div className={Styles.f5}>
          <h1>COMPANY INFO</h1>
          <a href="#">About Us</a>
          <a href="#">adidas stories</a>
          <a href="#">adidas Apps</a>
          <a href="#">Entity Details</a>
          <a href="#">Press</a>
          <a href="#">Careers</a>
        </div>

        <div className={Styles.f5}>
          <h1>FOLLOW US</h1>
        </div>
      </div>
      <footer className={Styles.last_F}>
        <div id={Styles.F1}>
          <h2>LOGIN</h2>
          <h2>YOUR BAG(0)</h2>
        </div>
        <div id={Styles.F2}>
          <div className={Styles.shoping}>
            <h1>JOIN ADIDAS AND GET 15 % OFF</h1>
            <button>
              <div className={Styles.signup}>SIGN UP FOR FREE</div>
            </button>
          </div>
        </div>
        <div id={Styles.F3}>
          <div>
            <p>Delivery</p>
            <p>Order Tracker</p>
            <p>Store Finder</p>
            <p>adiclub terms and condition</p>
          </div>
          <div>
            <p>Returns & Refunds</p>
            <p>Help</p>
            <p>adiclub</p>
          </div>
        </div>
      </footer>

      <div className={Styles.footer2}>
        <div>
          <a href="#">Coockie Settings </a>
          <a href="#">Privacy Policy </a>
        </div>
        <div>
          <a href="#">Terms and Conditions </a>
          <a href="#">Coockies </a>
        </div>
      </div>
      <div className={Styles.footerc}>
        <p>©2021 adidas India Marketing Pvt. Ltd</p>
      </div>
    </div>
  );
};

export default footer;
