import React from "react";
import "../../styles/Jumbotron.css";

function Jumbotron() {
return(  
<div className="box jumbotron jumbotron-fluid">
  <div className="container">
    <h1 className="jumbotron-title display-4">Clicky Game!</h1>
    <p className="lead">Click on an image to earn points, but don't click on any more than once!</p>
  </div>
</div>);
}

export default Jumbotron;