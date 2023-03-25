import { Dropdown } from "bootstrap";
import React from "react";
import Styles from "./checkout.module.css";
import { useCart } from "react-use-cart";
import img from "../men/menp/visa-maestro-rupay-cod-netbanking-upi-IN_tcm209-983344.webp";
import Nav from './nav'
import { Link } from "react-router-dom";
import img1 from "../men/menp/visa-maestro-rupay-cod-netbanking-upi-IN_tcm209-983344.webp";
import Footer from "./footer";
const Add = () => {
  const {
    isEmpty,
    totalUniqueItems,
    items,
    totalItems,
    cartTotal,
    updateItemQuantity,
    removeItem,
    emptyCart,
  } = useCart();

  return (
    <div>
      <Nav/>
      <form class="needs-validation" novalidate>
        <div className={Styles.Container}>
          <div className={Styles.form}>
            <h1 id={Styles.heading}>SHIPPING ADDRESS</h1>
            <div className={Styles.flex}>
              <input type="text" name="fname" placeholder="First Name*" />
              <input
                type="text"
                id="lname"
                name="lname"
                placeholder="Last Name*"
                required
                
              />
            </div>
            <br />

            <div className={Styles.coloum}>
              <input
                type="text"
                id="lname"
                name="lname"
                placeholder="Street Address*"
                required
              />
              <br />
              <label>E.g. 3 Stripes Street</label>
              <br />
              <input
                type="text"
                // id="lname"
                name="lname"
                placeholder="LandMark*"
                required
              />
              <br />
              <label>E.g. Company, Apartment, Building, etc.</label>
              <br />
            </div>

            <div className={Styles.flex}>
              <input
                type="text"
                id="lname"
                name="lname"
                placeholder="Additional Info"
                required
              />
              <input
                type="text"
                id="lname"
                name="lname"
                placeholder="City*"
                required
              />
              <br />
            </div>

            <div className={Styles.flex}>
              <select>
                <option>State</option>
                <option>Kerala</option>
                <option>Karnataka</option>
              </select>

              <input
                type="text"
                id="lname"
                name="lname"
                placeholder="PinCode*"
                required
              />
              <br />
            </div>

            <br />
            <label style={{ color: "black" }}>Country:India</label>
            <br />

            <h2>
            ARRIVING <span>?</span>
          </h2>
          <div id={Styles.pay}>
            <h5>Pay Online for Faster Delivery and Faster Return/Refund</h5>
          </div>

          <div id={Styles.delive}>
            <div id={Styles.a}>
              <h4>STANDARD DELIVERY</h4>
              <p>
                For metro cities, delivery within :- 2-3 Days \ For other
                cities, delivery<br></br> within :- 4-5 Days
              </p>
            </div>
            <div>
              <h5>FREE</h5>
            </div>
          </div>
          <h2 id={Styles.title}>CONTACT INFORMATION</h2>
          <p>We'll use these details to keep you informed on your delivery.</p>

          <input id={Styles.contact} type="text" placeholder="Email" requierd />
          <br />
          <input
            id={Styles.contact}
            type="number"
            placeholder="Mobile Number"
            requierd
          />
        </div>
        {/* <div className={Styles.card2}>
          <input type="checkbox" />
          My billing and delivery information are the same.
          <br />
          <input type="checkbox" />I would like to stay up to date with adidas.
          <a href="#">Read more</a>
          <br />
          <input type="checkbox" />
          Yes, I am over 18 years old & accept the
          <a href="#">Terms & Conditions</a> and <a href="#">Privacy Policy.</a>
          <br />
          <button id={Styles.btn}>REVIEW & PAY</button>
          </div> */}

          <div>
            <div className={Styles.cartSection2}>
              <h5>ORDER SUMMARY</h5>

              <div id={Styles.item}>
                <h6>{totalItems}items</h6>
                <h6>₹{cartTotal}</h6>
              </div>
              <div id={Styles.delivery}>
                <h6>Delivery</h6>
                <h6>FREE</h6>
              </div>
              <div id={Styles.line}></div>
              <div id={Styles.total}>
                <h6>total</h6>
                <h6>₹{cartTotal}</h6>
              </div>
              <div id={Styles.tax}>
                <h6>(Inclusive of all taxes)</h6>
              </div>
              <div id={Styles.line}></div>
              <div id={Styles.promo}>
                <input type="search" placeholder="Enter your promo code" />
              </div>
              {items.map((item, index) => {
                return (
                  <div className={Styles.details}>
                    <div id={Styles.img}>
                      <img src={item.img} style={{ height: "5rem" }} />
                    </div>
                    <div id={Styles.dtls}>
                      <h6>{item.title}</h6>
                      <h6>size:s / quantity{item.quantity}</h6>
                      <h6>₹{item.price}</h6>
                    </div>
                  </div>
                );
              })}

              <div>
                <img id={Styles.imgl} src={img1} class="img-fluid" />
              </div>

              {/* < div className={Styles.terms}>
              <input type="checkbox" />
          My billing and delivery information are the same.
          <br />
          <input type="checkbox" />I would like to stay up to date with adidas.
          <a href="#">Read more</a>
          <br />
          <input type="checkbox" />
          Yes, I am over 18 years old & accept the
          <a href="#">Terms & Conditions</a> and <a href="#">Privacy Policy.</a>
          <br />
          <button id={Styles.btn}>REVIEW & PAY</button>
          </div> */}

            </div>
            
          </div>
        </div>
      </form>

      <div className={Styles.section3}>
        <div className={Styles.card1}>
          {/* <h2>
            ARRIVING <span>?</span>
          </h2>
          <div id={Styles.pay}>
            <h5>Pay Online for Faster Delivery and Faster Return/Refund</h5>
          </div>

          <div id={Styles.delive}>
            <div id={Styles.a}>
              <h4>STANDARD DELIVERY</h4>
              <p>
                For metro cities, delivery within :- 2-3 Days \ For other
                cities, delivery<br></br> within :- 4-5 Days
              </p>
            </div>
            <div>
              <h5>FREE</h5>
            </div>
          </div>
          <h2 id={Styles.title}>CONTACT INFORMATION</h2>
          <p>We'll use these details to keep you informed on your delivery.</p>

          <input id={Styles.contact} type="text" placeholder="Email" requierd />
          <br />
          <input
            id={Styles.contact}
            type="number"
            placeholder="Mobile Number"
            requierd
          />
        </div>
        <div className={Styles.card2}>
          <input type="checkbox" />
          My billing and delivery information are the same.
          <br />
          <input type="checkbox" />I would like to stay up to date with adidas.
          <a href="#">Read more</a>
          <br />
          <input type="checkbox" />
          Yes, I am over 18 years old & accept the
          <a href="#">Terms & Conditions</a> and <a href="#">Privacy Policy.</a>
          <br />
          <button id={Styles.btn}>REVIEW & PAY</button> */}
        </div>
      </div>

      <Footer />
    </div>
  );
};

export default Add;
