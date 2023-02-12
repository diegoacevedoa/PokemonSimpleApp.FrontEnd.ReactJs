export const getPokemons = async (page, take) => {
  //   const resp = await fetch("https://pokeapi.co/api/v2/pokemon"); //Consulta los pokemons de 20 en 20
  const resp = await fetch(
    `https://pokeapi.co/api/v2/pokemon?limit=${take}&offset=${page * take}`
  ); //Consulta los pokemons paginando de 10 en 10

  const data = resp.json();

  return data;
};
