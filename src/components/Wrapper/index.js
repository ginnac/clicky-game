import React from "react";
import "./style.css";

const Wrapper =props => 
  <div 
  className={props.shakeState === true ? 'wrapperShake container' : 'wrapper container'} > {props.children}
  </div>;


export default Wrapper;
