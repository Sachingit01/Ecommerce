import React from "react";
import { useCart } from "react-use-cart";
// import Styles from "../mstyle/section4.module.css";
import data from "../womenData";
import { Link } from "react-router-dom";

function Section4(props) {
  const { addItem } = useCart();

  return (
    <div>
      <div className="col-11 col-md-6 col-lg-3 mx-0 mb-4">
        <div class="card p-0 overflow-none h-100 " Style="width: 18rem;">
          <img src={props.img} class="card-img-top img-fluid" />
          <div class="card-body">
            <h5 class="card-title h6">{props.title}</h5>
            <p class="card-text">{props.desc}</p>
            <p class="card-text">₹{props.price}</p>
            <button
              onClick={() => addItem(props.item, alert("added"))}
              class="btn btn-primary"
            >
              add to cart
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Section4;
