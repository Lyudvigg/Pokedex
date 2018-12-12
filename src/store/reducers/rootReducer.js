import {combineReducers} from 'redux';
import getPokemon from './getPokemon';
import spinner from './spinner';

export default combineReducers({
  pokemons: getPokemon,
  spinner
});