import { useNavigate, useParams } from "react-router-dom";
import usePokemonDetails from "../hooks/usePokemonDetails";

const PokemonDetails = () => {
  const { name } = useParams();
  const navigate = useNavigate();

  const onBackPokedex = () => {
    navigate('/');
  };

  const { pokemonData, isLoading } = usePokemonDetails(name);
  if (isLoading) return <h2>Cargando...</h2>;

  // Función para determinar el color según el valor de la estadística
  const getStatColor = (statValue) => {
    if (statValue < 50) {
      return "red"; // Estadística baja
    } else if (statValue >= 50 && statValue <= 75) {
      return "yellow"; // Estadística media
    } else {
      return "green"; // Estadística alta
    }
  };

  return (
    <div className="container">
      <h1>{pokemonData.name}</h1>
      <img
        src={pokemonData.sprites.other.dream_world.front_default}
        alt={pokemonData.name}
      />
      <div>
        {pokemonData.types.map((type, index) => (
          <div key={index} className={`type_color ${type.type.name}`}>
            <p>{type.type.name}</p>
          </div>
        ))}
        <p> Base Experience: {pokemonData.base_experience}</p>
        <div>
          {pokemonData.stats.map((stat, index) => (
            <div key={index}>
              <p>{stat.stat.name.toUpperCase()}</p>
              <div className="stat-bar">
                <div
                  className="stat-fill"
                  style={{
                    width: `${stat.base_stat}%`,
                    backgroundColor: getStatColor(stat.base_stat),
                  }}
                ></div>
              </div>
            </div>
          ))}
        </div>
        <button className="btn btn-success" onClick={onBackPokedex}>
          Back to Pokedex
        </button>
      </div>
    </div>
  );
};

export default PokemonDetails;
