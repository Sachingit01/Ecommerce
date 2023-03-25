import { Dropdown } from "bootstrap";
import React from "react";
import Footer from "./footer";
import Nav from "../nav";
import Styles from "../cart/cart.module.css";
import { useCart } from "react-use-cart";
import img from "../men/menp/visa-maestro-rupay-cod-netbanking-upi-IN_tcm209-983344.webp";
import { Link } from "react-router-dom";
import img1 from "../men/menp/visa-maestro-rupay-cod-netbanking-upi-IN_tcm209-983344.webp";

const Cart = () => {
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

  //  empty-----------------------------------------------
  if (isEmpty)
    return (
      <div>
        {" "}
        <Nav />
        <section className={Styles.empty}>
          <h1 className={Styles.emptyHead}>Your Cart is empty</h1>
          <p className={Styles.emptyPara}>
            Once you add something to your bag - it will appear here. Ready to
            get started?
          </p>
          {/* <button className={Styles.emptyButton} ><Link to ="/home"/>GET STARTED</button> */}
          <Link to="/home" className={Styles.emptyButton}>
            GET STARTED
          </Link>
        </section>
        <img className={Styles.emptyimage} src={img} />
        <Footer />
      </div>
    );
  // ----------------------------------------------------------
  return (
    <div>
      <Nav />
      <div className={Styles.head}>
        <h1 className={Styles.cartHead}>YOUR BAG</h1>
        <p>
          Total ({totalUniqueItems}items) ₹{cartTotal}
        </p>
        <p>
          Items in your bag are not reserved — check out now to make them yours.
        </p>
      </div>
      {items.map((item, index) => {
        return (
          <div>
            <div className={Styles.cartContainer}>
              <div className={Styles.cartSection1}>
                <div className={Styles.item}>
                  <div id={Styles.img}>
                    <img src={item.img} style={{ height: "15rem" }} />
                  </div>

                  <div id={Styles.details}>
                    <h4>{item.title}</h4>
                    <p>Low in stock</p>
                    <h6>size:s</h6>

                    <select className={Styles.dropdown}>
                      <option value="items">{item.quantity}</option>
                    </select>
                    <button
                      id={Styles.qty}
                      onClick={() =>
                        updateItemQuantity(item.id, item.quantity - 1)
                      }
                    >
                      -
                    </button>
                    <button
                      id={Styles.qty}
                      onClick={() =>
                        updateItemQuantity(item.id, item.quantity + 1)
                      }
                    >
                      +
                    </button>
                  </div>

                  <div id={Styles.price}>
                    <h4>₹{item.price}</h4>
                    <button
                      type="button"
                      class="btn-close"
                      id={Styles.Closebutton}
                      aria-label="Close"
                      onClick={() => removeItem(item.id)}
                    ></button>
                  </div>
                </div>
                <div id={Styles.clearButton}>
                  <button id={Styles.clearbutton} onClick={() => emptyCart()}>
                    Clear Cart
                  </button>
                </div>
              </div>

              <div className={Styles.cartSection2}>
                <button id={Styles.checkButton}>CHECKOUT</button>

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
                <div>
                  <img id={Styles.imgl} src={img1} class="img-fluid" />
                </div>
              </div>
            </div>
          </div>
        );
      })}

      <div className={Styles.anchor}>
        <a href="#">Free delivery</a>
        <a href="#">30* day free returns</a>
        <a href="#">Safe & Secure payment options</a>
      </div>
      <Footer />
    </div>
  );
};

export default Cart;
