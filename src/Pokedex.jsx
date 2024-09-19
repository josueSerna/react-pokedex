import React from 'react'
import useFetchPokemon from './hooks/useFetchPokemon'
import PokemonCard from './components/PokemonCard';

const Pokedex = () => {
  const { pokemon, isLoading } = useFetchPokemon();
  
  if (isLoading) return <h2>Cargando...</h2>

  return (
    <div>
      <h1>Pokedex</h1>

      <div className='container'>
        {/* Aplicamos row una vez para toda la grilla */}
        <div className='row'>
          {
            // Mapeamos cada Pokemon dentro de columnas
            pokemon.map((poke, index) => (
              <div className='col-md-4 mb-4' key={index}>
                <PokemonCard pokemon={poke} />
              </div>
            ))
          }
        </div>
      </div>
    </div>
  )
}

export default Pokedex
