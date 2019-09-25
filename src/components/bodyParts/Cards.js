import React from "react";

const style={
    imgStyle:{
        height:200,
        width:150,
    },
    cardStyle:{
       width:"18rem",
        height:200,
        
    }
   
}

//add props to display the cards dynamically....
function Cards() {
   
  return (
    <div className="row">
        <div className="col-3 card">
            <img style={style.imgStyle} className="card-img-top" src="http://assets.rpgsite.net/images/images/000/011/157/original/Pokemon-X-and-Y_2013_01-14-13_007.jpg" alt="Card cap"/>
            <div className="card-body">
                <p className="card-text">Pokemon Card</p>
            </div>
        </div>
    </div>
  );
}

export default Cards;
