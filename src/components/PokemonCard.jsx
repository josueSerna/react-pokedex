import { useNavigate } from "react-router-dom";
import usePokemonDetails from "../hooks/usePokemonDetails";
import '../index.css';

const PokemonCard = ({ pokemon }) => {
    const navigate = useNavigate()

    const onCardClick = () =>{
        navigate(`/pokemon/${pokemonData.name}`)
    } 
 
    const { pokemonData, isLoading } = usePokemonDetails(pokemon.name);
    if (isLoading) return <h2>Cargando...</h2>;

  return (
    <section className="col-md-4 mb-4" onClick={onCardClick}>
      <div className="card pokemon-card">
        <img 
          src={pokemonData.sprites.other.dream_world.front_default} 
          alt={pokemonData.name} 
          className="card-img-top"
        />
        <div className="card-body">
          <h5 className="card-title">{pokemonData.name}</h5>
          {pokemonData.types.map((type, index) => (
            <div key={index} className={`type_color ${type.type.name}`}>
              <p>{type.type.name}</p>
            </div>
          ))}
          <p>Click on Card for more Info</p>
        </div>
      </div>
    </section>
  );
};

export default PokemonCard;
