import React, { Component } from "react";
import pokemons from "../pokemons.json";
import Cards from './bodyParts/Cards.js';
import Navbar from './bodyParts/Navbar.js';
import Jumbotron from './bodyParts/Jumbotron.js';
import Wrapper from "./Wrapper"

class CardsUpdate extends Component {
    // Setting this.state.friends to the friends json array
    state = {
      pokemonsList: pokemons,
      message: "Click an image to begin!",
      score: 0,
      topScore: 0,
      color: "white",
      shadow: "2px 2px 4px #000000",
      shakeit: false
    };


    componentDidMount(){
        this.shuffle(this.state.pokemonsList);
      }
  
    //shuffle method to shuffle update values:
    shuffle = pokemonsList => {


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
                
                //game is over so and update the clicked properties to false
                //and then if the points are the highest update 
                this.setState({ score: 0, message: "Opps, wrong guess",color:"#5133a4", shakeit:true});
                 //setting message style color back to white after 1/2 a second
                setTimeout(() => {
                    this.setState({color:"red",});
                  }, 300);


                if(this.state.topScore < this.state.score){
                    this.setState({topScore: this.state.score});
                }

                for (let i = 0; i<pokemonsList.length; i++){
                    pokemonsList[i].clicked = false;
                }
               console.log(this.state);


            } 
                


            else if (pokemon.id === id) {

                //if the last score was 11 and did a right guess...
                if (this.state.score === 11){
                    for (let i = 0; i<pokemonsList.length; i++){
                    pokemonsList[i].clicked = false;
                    }
                    this.setState({ score: 0, topScore:0, message: "You won, play again!", color:"#5133a4", shakeit:false});
                   //setting message style color back to white after 1/2 a second
                    setTimeout(() => {
                        this.setState({color:"orange"});
                      }, 300);

                }
                else{
                //chnaging state to true
                pokemon.clicked = true;  
                //testing it detects this conditional correctly 
                console.log(this.state);
                console.log("1 point more"); 
 
                //update the navbar to give 1 point, and message to be set...
                this.setState({ score: this.state.score + 1, message: "Great, you scored!", color:"#5133a4", shakeit:false });
                
                 //setting message style color back to white after 1/2 a second
                setTimeout(() => {
                    this.setState({color:"yellow"});
                  }, 300);
           
              
                }
         
            }

            return pokemon;
            

          });


          this.setState({ pokemonsList: pokemonsUpdated });

          //randomize
          this.shuffle(pokemonsList);

          

    };
  
    //display each poken in pokemons.json array
    render() {
      return (
        <div>
        <Navbar
        message={this.state.message}
        score={this.state.score}
        topScore={this.state.topScore}
        color={this.state.color}
        shadow = {this.state.shadow}
        />
        <Jumbotron/> 
        <Wrapper
        shakeState = {this.state.shakeit} >
           
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
        </div>
      );
    }
  }
  
  export default CardsUpdate;