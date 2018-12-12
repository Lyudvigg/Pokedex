import {GET_DATA} from './actionTypes';

const getPokemon = (response) => {
  return {
    type: GET_DATA,
    pokemons: response
  }
}

export default getPokemon;