<section className="d-flex justify-content-center">
  <div className="card" style={{ width: "18rem" }}> {/* Card de tamaño mediano */}
    <img
      src={pokemonData.sprites.other.dream_world.front_default}
      className="card-img-top"
      alt={pokemonData.name}
    />
    <div className="card-body">
      <h5 className="card-title text-center">{pokemonData.name}</h5>

      {/* Mapeo de las estadísticas del Pokémon */}
      {pokemonData.stats.map((stat, index) => (
        <div key={index} style={{ marginBottom: '15px' }}>
          {/* Nombre de la estadística */}
          <h6>{stat.stat.name}</h6>

          {/* Barra de progreso con el valor dinámico */}
          <div className="progress" style={{ height: '20px' }}>
            <div
              className="progress-bar progress-bar-striped bg-info"
              role="progressbar"
              style={{ width: `${stat.base_stat}%` }}
              aria-valuenow={stat.base_stat}
              aria-valuemin="0"
              aria-valuemax="100"
            >
              {/* Valor de la estadística dentro de la barra */}
              {stat.base_stat}
            </div>
          </div>
        </div>
      ))}
    </div>
  </div>
</section>
