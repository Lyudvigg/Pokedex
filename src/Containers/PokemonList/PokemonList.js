import React, { Component } from "react";
import { connect } from "react-redux";
import getData from "../../store/actions/getData";

import Pokemon from "../../Components/Pokemon/Pokemon";
import Spinner from '../../Components/Ui/Spinner/Spinner';
import "./PokemonList.css";


class PokemonList extends Component {
  componentDidMount() {
    this.props.getData();
  }

  state = {
    search:  "",
    type: ""
  };

  onFilterHandler = event => {
    this.setState({
      [event.target.name]: event.target.value
    });
  };

  render() {
    let context = null;
    let optionList = [];
    if (!this.props.spinner) {
      for (let i = this.props.pokemons.length - 1; i >= 0; i--) {
        let el = this.props.pokemons[i].types[0].type.name;
        if (optionList.indexOf(el) === -1) {
          optionList.push(el);
        }
      }
      context = this.props.pokemons.filter(pokemon => {
        return pokemon.name.indexOf(this.state.search.toLowerCase()) !== -1;
      }).filter(type => {
        return type.types[0].type.name.indexOf(this.state.type) !== -1 
      })
    }
    return (
      <div className="container">
     {!this.props.spinner ? <div className="input_wrrapper">
      <input type="text" name="search" placeholder="Search" onChange={this.onFilterHandler} />
        <select name="type" onChange={this.onFilterHandler} value={this.state.type}>
          <option value="">All</option>
          {optionList.map((option, index) => (
            <option key={option + index} value={option}>
              {option}
            </option>
          ))}
        </select>
      </div>: null}
        <div className="content_wraper">
          {!this.props.spinner
            ? context.map(pokemon => (
                <Pokemon
                  name={pokemon.name}
                  img={pokemon.sprites.back_default}
                  frontImg={pokemon.sprites.front_default}
                  height={pokemon.height}
                  weight={pokemon.weight}
                  exp={pokemon.base_experience}
                  type={pokemon.types[0].type.name}
                  key={pokemon.id}
                />
              ))
            : <Spinner/>}
        </div>
      </div>
    );
  }
}

const mapStateToProps = state => {
  return {
    pokemons: state.pokemons.pokemons,
    spinner: state.spinner.spinner
  };
};

const mapDispatchToProps = dispatch => {
  return {
    getData: () => dispatch(getData())
  };
};

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(PokemonList);
