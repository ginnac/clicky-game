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
  
    
    shuffle = pokemonsList => {
      
       // let newPokemons = [].concat(pokemonsList); // create new array
      // let indexesList = [];

      let newPokemons = [].concat(pokemonsList); // create new array
    
        for (let i = newPokemons.length - 1; i > 0; i--) {
    
            const j = Math.floor(Math.random() * (i + 1));
    
            [newPokemons[i], newPokemons[j]] = [newPokemons[j], newPokemons[i]];
        
        }
    
        return this.setState({ pokemonsList: newPokemons });;

    };
    
    
    
    
    
    cardStatus = id => {
        const pokemonsList = this.state.pokemonsList;
        //method to map pokemon array; and changed cliked status
        const pokemonsUpdated = pokemonsList.map(pokemon => {
        
            if(pokemon.clicked && pokemon.id ===id){
                //testing it detects this conditional 
                console.log("oops you lost!");
                //randomize

              
               // pokemonsList.sort(function(a, b){return 0.5 - Math.random()});
                //game over and update the navbar to see if the topest winner has been beaten
               
            } 
                


            else if (pokemon.id === id) {
              //chnaging state to true
              pokemon.clicked = true;  
              //testing it detects this conditional correctly 
              console.log(this.state);
              console.log("1 point more"); 
              
              //randomize
              //pokemonsList.sort(function(a, b){return 0.5 - Math.random()});
              //update the navbar to give 1 point
              
            } 



            //another if condition to see if the person won by doing it correctly on all cards...
           
            return pokemon;
            

          });

          console.log("hola!!!")

          

          this.setState({ pokemonsList: pokemonsUpdated });

          this.shuffle(pokemonsList);

          

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