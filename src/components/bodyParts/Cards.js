import React from "react";
import "../../styles/Cards.css";



//add props to display the cards dynamically....
function Cards(props) {

const style={
    

    divStyle:{backgroundImage: `url(${props.image})`}   
}


   
  return (


        <div onClick={() => props.cardStatus(props.id)}
        role="img" aria-label="click item" className="click-item shake" 
            style={style.divStyle}>
        </div>
        


       
  );
}

export default Cards;
