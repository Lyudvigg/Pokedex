import axios from 'axios';
import getPokemon from './getPokemon';
import handleLoading from './handleLoading';

const getData = (offset=0, limit=30) => {
  let pokemons = [];
  offset *= limit;
  return dispatch => {
    dispatch(handleLoading(true));
    axios.get('https://pokeapi.co/api/v2/pokemon/?limit='+ limit +'&offset=' + offset)
      .then(response => {
        let requestCount = 0;
        response.data.results.forEach((element, index) => {
          axios.get(element.url).then(info => {
            pokemons.push(info.data);
            requestCount++;
            if(requestCount === response.data.results.length) {
              dispatch(getPokemon(pokemons))
              dispatch(handleLoading(false))
            }
          })
        })
      })
  }
}

export default getData;

