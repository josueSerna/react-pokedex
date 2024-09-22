import { useNavigate, useParams } from "react-router-dom"
import usePokemonDetails from "../hooks/usePokemonDetails"


const PokemonDetails = () => {
    const{ name } = useParams();

    const navigate = useNavigate()

    const onBackPokedex = () =>{
        navigate('/')
    }

    const {pokemonData, isLoading} = usePokemonDetails(name)
    if (isLoading) return <h2>Cargando...</h2>;

    return (
    <div className="container">
      <h1>{pokemonData.name}</h1>
      <img src={pokemonData.sprites.other.dream_world.front_default} alt="" />
      <div>
      {pokemonData.types.map((type, index) => (
            <div key={index} className={`type_color ${type.type.name}`}>
              <p>{type.type.name}</p>
            </div>
          ))}
          <p> Base Experience: {pokemonData.base_experience}</p>
         <div>
            {
                pokemonData.stats.map((stat, index)=>(
                    <p key={index}>{stat.stat.name} : {stat.base_stat}</p>
                ))
            }
         </div>
         <button className="btn btn-success" onClick={onBackPokedex}>Back to Pokedex</button>
      </div>
    </div>
  )
}

export default PokemonDetails