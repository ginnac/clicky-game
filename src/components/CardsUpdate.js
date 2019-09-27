import React, { Component } from "react";
import pokemons from "../pokemons.json";
import Cards from './bodyParts/Cards.js';
//import Navbar from './bodyParts/Navbar.js';
import Wrapper from "./Wrapper"

class CardsUpdate extends Component {
    // Setting this.state.friends to the friends json array
    state = {
      pokemonsList:pokemons
    };
  

    
    //if clicked === true, set game over...
    // change navbar values, and randomize

    //if clicked === false then add a point and randomize
    
    
    
    cardStatus = id => {
        //method to map pokemon array; and changed cliked status
        const pokemonsUpdated = this.state.pokemonsList.map(pokemon => {
        
            if(pokemon.clicked && pokemon.id ===id){
                //randomize
                //game over and update the navbar to see if the topest winner has been beaten
                console.log("oops you lost!");
            } 
                


            else if (pokemon.id === id) {
              pokemon.clicked = true;
              //randomize
              //update the navbar to give 1 point
              console.log(this.state);
              console.log("1 point more");
            } 

           
            return pokemon;
          });

          this.setState({ pokemonsList: pokemonsUpdated });



        // cliked values and non cliked values
    
        //if clicked === true, set game over...
        // change navbar values, and randomize

        //if clicked === false then add a point and randomize

    //   //Filter this.state.friends for friends with an id not equal to the id being removed
    //   const friends = this.state.friends.filter(friend => friend.id !== id);
    //   //Set this.state.friends equal to the new friends array
    //   this.setState({ friends });
    };
  
    //display each poken in pokemons.json array
    render() {
      return (


        <Wrapper>
          {this.state.pokemonsList.map(pokemon => (
            <Cards
              cardStatus={this.cardStatus}
              id={pokemon.id}
              key={pokemon.id}
              name={pokemon.name}
              image={pokemon.image}
              clicked={pokemon.clicked}
             />
          ))}
        </Wrapper>
      );
    }
  }
  
  export default CardsUpdate;