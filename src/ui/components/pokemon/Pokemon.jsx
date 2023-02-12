import { useState, useEffect } from "react";
import { getPokemons } from "../../../application/pokemon/pokemon";

const Pokemon = () => {
  const [pokemons, setPokemons] = useState([]);
  const [page, setPage] = useState(1);
  const take = 10;

  useEffect(() => {
    handleConsultar();
  }, []);

  const handleConsultar = async (newPage = page) => {
    console.log(newPage);
    const resp = await getPokemons(newPage, take);

    setPokemons(resp);
    setPage(newPage);
  };

  return (
    <div>
      <h1>Pokemons</h1>
      <br />
      <ul>
        {pokemons.count > 0 &&
          pokemons.results.map((pokemon) => (
            <li key={pokemon.name}>{pokemon.name}</li>
          ))}
      </ul>
      <button onClick={() => handleConsultar(page - 1)}>Previous</button>{" "}
      <button onClick={() => handleConsultar(page + 1)}>Next</button>
    </div>
  );
};

export default Pokemon;
