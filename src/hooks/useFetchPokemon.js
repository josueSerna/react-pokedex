import { useEffect, useState } from "react";
import getDataService from "../services/getDataService";

const useFetchPokemon = () => {
  const [pokemon, setPokemon] = useState([]);
  const [isLoading, setIsLoading] = useState(true);
  const [error, setError] = useState(null);
  const [offset, setOffset] = useState(0);

  const offsetCount = 21;

  const nextData = () => {
    setOffset((prevOffset) => prevOffset + offsetCount);
  };

  const getData = async () => {
    try {
      // Comprobar si ya hay datos en localStorage
      const pokemonCache = localStorage.getItem(`pokemon_${offset}`);
      if (pokemonCache) {
        // Si hay datos cacheados, los usamos
        const cachedData = JSON.parse(pokemonCache);
        setPokemon((prevPokemon) => {
          // Evitar duplicados comparando los nombres de los Pokémon
          const newPokemon = cachedData.filter(
            (poke) => !prevPokemon.some((existingPoke) => existingPoke.name === poke.name)
          );
          return [...prevPokemon, ...newPokemon];
        });
      } else {
        // Si no hay cache, realizar la petición
        const response = await getDataService(
          `https://pokeapi.co/api/v2/pokemon/?limit=21&offset=${offset}`
        );

        const newPokemon = response.results.filter(
          (poke) => !pokemon.some((existingPoke) => existingPoke.name === poke.name)
        );
        // Guardar en localStorage para futuras referencias
        localStorage.setItem(`pokemon_${offset}`, JSON.stringify(response.results));
        
        // Actualizar el estado sin duplicar
        setPokemon((prevPokemon) => [...prevPokemon, ...newPokemon]);
      }
      setIsLoading(false);
    } catch (err) {
      console.error("Error fetching pokemon data:", err);
      setError(err);
      setIsLoading(false);
    }
  };

  useEffect(() => {
    getData(); // Llamar sin pasar el offset como argumento
  }, [offset]);

  return {
    pokemon,
    isLoading,
    error,
    nextData,
  };
};

export default useFetchPokemon;
