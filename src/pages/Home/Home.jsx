
import { List } from '../../components';
import { useEffect, useState } from 'react';

const Home = () => {

  const [pokemons, setPokemons] = useState([]);

  const getPokemonInfo = async (data) => {
    const promises = data.map ((pokemon) => {
      return fetch(pokemon.url).then((response) => response.json());
    });
    Promise.all(promises).then( ( results) => {
      setPokemons(results);
    });
  };
  const getPokemons = async () => {

    const response = await fetch(
      'https://pokeapi.co/api/v2/pokemon?limit=20'
    ).then((response) => response.json()).then((data) => {
          getPokemonInfo(data.results);
          });

    };

    useEffect(() => {
      getPokemons();
    }, []);




    return (
        <div>
        <h1>Pokemons </h1>
        <List items={pokemons} />


    </div>
    );
};

export default Home;
