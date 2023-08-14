import { useState, useEffect } from 'react';
import axios from 'axios';
import './PokemonInfo.css';

function PokemonInfo({ pokemonName }) {
  const [pokemonData, setPokemonData] = useState(null);
  const [pokemonNotFound, setPokemonNotFound] = useState(false); 
  
  useEffect(() => {
    if (pokemonName) {
      axios.get(`https://pokeapi.co/api/v2/pokemon/${pokemonName.toLowerCase()}`)
        .then(response => {
          setPokemonData(response.data);
          setPokemonNotFound(false); 
        })
        .catch(error => {
          console.error("Error fetching Pokemon data:", error);
          setPokemonData(null);
          setPokemonNotFound(true); 
        });
    }
  }, [pokemonName]);

  return (
    <div className='app-container'>
      {pokemonData && pokemonData.name === pokemonName.toLowerCase() ? (
        <img src={pokemonData.sprites.front_default} alt={pokemonName} width="100" height="100" />
      ) : null}
      
      {pokemonNotFound && <p>No se encontró el Pokémon.</p>} 
    </div>
  );
}

export default PokemonInfo;


