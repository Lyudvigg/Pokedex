import {GET_DATA} from '../actions/actionTypes';

const initialState = {
  pokemons: []
};

let getPokemon = (state = initialState, action) => {
  switch(action.type) {
    case GET_DATA:
      return {
        ...state,
        pokemons: action.pokemons
      };
    default:
      return state
  }
};

export default getPokemon;