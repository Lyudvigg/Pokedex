import React, { Component } from "react";
import PokemonList from './Containers/PokemonList/PokemonList';

class App extends Component {
  render() {
    return (
      <div className="App">
        <PokemonList/>
      </div>
    );
  }
}

export default App;
