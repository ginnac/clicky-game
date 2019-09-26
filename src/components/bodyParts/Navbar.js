import React from "react";
import "../../styles/Navbar.css";

function Navbar() {

return(<nav className="navbar"><ul><li className="title navbar-brand"><a href="/">Clicky Game</a>
</li><li className="navbar-text center">Click an image to begin!</li><li className="navbar-text">Score: 0 | Top Score: 0</li></ul></nav>);

}

export default Navbar;