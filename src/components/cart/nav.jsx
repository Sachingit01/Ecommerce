import React from 'react'
import Styles from './checkNav.module.css'
import { Link } from "react-router-dom";
const nav = () => {
  return (
    <div>
    <div id={Styles.blocks}>
        <div id={Styles.nav}>
   
   <Link to="/cart"><a href='#'><span>1</span>BAG</a> </Link>
   <a href='#'><span>2</span>DELIVERY</a>
   <a href='#'><span>3</span>PAYMENT</a>
   <a href='#'><span>4</span>ORDER COMPLETE</a>
   </div>
   <div id={Styles.cntct}>
   <label>QUESTIONS?</label>
   <a href='#'>1800-120-3300</a>
   <label>8AM-8PM,7 days a week</label>
   </div>
   
    </div>
    <div id={Styles.ln}></div>
    </div>
    
  )
}

export default nav
