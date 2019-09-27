import React from "react";
import "../../styles/Navbar.css";

function Navbar(props) {

return(<nav className="navbar"><ul><li className="title navbar-brand"><a href="/">Clicky Game</a>
</li><li style={{color: props.color}} className="navbar-text center">{props.message}</li><li className="navbar-text">Score: {props.score} | Top Score: {props.topScore}</li></ul></nav>);

}

export default Navbar;