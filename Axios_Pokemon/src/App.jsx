import { useState } from 'react';
import axios from 'axios';

function App() {
  const [pokemons, setPokemons] = useState([]);

  const handleLoadPokemonsAxios = () => {
    axios
      .get('https://pokeapi.co/api/v2/pokemon?limit=807')
      .then((response) => {
        setPokemons(response.data.results);
      })
      .catch((error) => {
        console.error('Error fetching Pokémon:', error);
      });
  };

  return (
    <div className="container mt-2">
      <div className="d-grid gap-2">
        <button
          onClick={handleLoadPokemonsAxios}
          className="btn btn-secondary"
          type="button"
        >
          Fetch Pokemons
        </button>
      </div>
      <ul>
        {pokemons.length === 0 ? (
          <p>Aún no has presionado el botón para cargar Pokémon.</p>
        ) : (
          pokemons.map((pokemon, index) => <li key={index}>{pokemon.name}</li>)
        )}
      </ul>
    </div>
  );
}

export default App;
