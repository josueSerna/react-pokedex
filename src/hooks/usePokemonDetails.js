import React, { useEffect, useState } from 'react'
import getDataService from '../services/getDataService'

const usePokemonDetails = (name) => {
    
    const [pokemonData, setPokemonData] = useState({});
    const [isLoading, setIsLoading] = useState(true);
    const [error, setError] = useState(null);

    const getPokemonDetail = async () =>{
       try {
        const response = await getDataService(`https://pokeapi.co/api/v2/pokemon/${name}`);
        setPokemonData (response);
        setIsLoading(false);
       } catch (err){ 
        console.error("Error fetching pokemon data:", err);
            setError(err);
            setIsLoading(false);
       }
    }
    useEffect(() =>{
        getPokemonDetail();
    },[])


    return{
        pokemonData,
        isLoading,
        error
    }

}

export default usePokemonDetails



