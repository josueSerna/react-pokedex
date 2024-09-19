import { useEffect, useState } from "react"
import getDataService from "../services/getDataService"

 const useFetchPokemon = () => {
    
    const [pokemon, setPokemon] = useState([])
    const [isLoading, setIsLoading] = useState(true)
    const [error, setError] = useState(null);

    const getData = async () => {
        try {
           const response = await getDataService('https://pokeapi.co/api/v2/pokemon/?limit=21') 
        //    console.log(response.results)
           setPokemon(response.results)
           setIsLoading(false);
        }catch (err) {
            console.error("Error fetching pokemon data:", err);
            setError(err);
            setIsLoading(false);
        }
    }
    useEffect(() => {
    getData()
    
     
    
    }, [])
    


    return {
        pokemon,
        isLoading,
        error
    }
 }
 
 export default useFetchPokemon
 