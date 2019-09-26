import React, { Component } from "react";
import pokemons from "../pokemons.json";
import Cards from './bodyParts/Cards.js';
import Wrapper from "./Wrapper"

class CardsUpdate extends Component {
    // Setting this.state.friends to the friends json array
    state = {
      pokemons
    };
  
    //removeFriend = id => {
      // Filter this.state.friends for friends with an id not equal to the id being removed
      //const friends = this.state.friends.filter(friend => friend.id !== id);
      // Set this.state.friends equal to the new friends array
      //this.setState({ friends });
    //};
  
    //display each friend in pokemon.json array
    render() {
      return (
        <Wrapper>
          {this.state.pokemons.map(pokemon => (
            <Cards
              //removeFriend={this.removeFriend}
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