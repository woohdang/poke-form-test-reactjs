import { useState } from 'react';
import './Form.css'; 
import logo from './assets/logo-poke.png'; 
import PokemonInfo from './PokemonInfo';

function Form() {
  const [nombre, setNombre] = useState('');
  const [edad, setEdad] = useState('');
  const [pokemon, setPokemon] = useState('');

  function handleSubmit(e) {
    e.preventDefault();

    try {
      if (!/^[a-zA-Z]+$/.test(nombre)) {
        throw new Error("El nombre solo debe contener letras");
      }

      const parsedEdad = parseInt(edad);

      if (parsedEdad > 80 || parsedEdad < 10) {
        throw new Error("La edad debe estar entre 10 y 80");
      }

      console.log(nombre);
      console.log(edad);
      console.log(pokemon);

      alert("Sus datos fueron enviados correctamente!");
      setTimeout(() => {
        e.target.reset();
        setNombre('');
        setEdad('');
        setPokemon('');
      }, 1000);
    } catch (error) {
      console.error("FATAL ERROR:", error.message);
      alert("ERROR! Hubo un error al procesar los datos");
    }
  }

  return (
    <div className='form-container'>
      <div className="logo-container">
        <img src={logo} alt="Poke Logo" className="logo" />
      </div>
      <h1>Poke Formulario</h1>
      <form onSubmit={handleSubmit}>
        <div className='input-group'>
          <input
            type="text"
            value={nombre}
            onChange={(e) => setNombre(e.target.value)}
            className="input-group_input"
          />
          <label className="input-group_label">Nombre:</label>
        </div>
        <div className='input-group'>
          <input
            type="text"
            value={edad}
            onChange={(e) => setEdad(e.target.value)}
            className="input-group_input"
          />
          <label className="input-group_label">Edad:</label>
         </div>
        <div className='input-group'>
          <input
            type="text"
            value={pokemon}
            onChange={(e) => setPokemon(e.target.value)}
            className="input-group_input"
          />
          <label className="input-group_label">Pokemon favorito:</label>
        </div>
        <button type="submit">Enviar</button>
      </form>
      <PokemonInfo pokemonName={pokemon} />
    </div>
  );
}

export default Form;