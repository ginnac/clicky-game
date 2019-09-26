import React from "react";
import "../../styles/Cards.css";

let url = "http://assets.rpgsite.net/images/images/000/011/157/original/Pokemon-X-and-Y_2013_01-14-13_007.jpg"

const style={
    

    divStyle:{
    backgroundImage: `url(${url})` 
    }
   
}

//add props to display the cards dynamically....
function Cards() {
   
  return (
    <div className="container"> 
        <div className="row">

        <div role="img" aria-label="click item" className="click-item shake" 
            style={style.divStyle}>
        </div>


        </div>
    </div>
  );
}

export default Cards;
