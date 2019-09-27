import React from "react";
import "../../styles/Navbar.css";

function Navbar(props) {

return(<nav className="navbar"><ul><li style={{textShadow: props.shadow}} className="title navbar-brand"><a href="/">Clicky Game</a>
</li><li style={{color: props.color, textShadow: props.shadow}} className="navbar-text center">{props.message}</li><li style={{textShadow: props.shadow}} className="navbar-text score">Score: {props.score} | Top Score: {props.topScore}</li></ul></nav>);

}

export default Navbar;