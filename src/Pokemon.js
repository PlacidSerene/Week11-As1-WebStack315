import React, { useState, useEffect } from "react";
const url = "https://pokeapi.co/api/v2/pokemon";
export default function Pokemon() {
  const [pokemons, setPokemons] = useState([]);
  const fetchPokemons = async () => {
    try {
      const response = await fetch(url);
      const pokemon = await response.json();
      setPokemons(pokemon.results);
    } catch (error) {
      console.log(error);
    }
  };
  useEffect(() => {
    fetchPokemons();
  }, []);
  return (
    <>
      {pokemons.map((pokemon, index) => {
        return (
          <p key={index} style={{ fontSize: "1rem" }}>
            {pokemon.name}
          </p>
        );
      })}
    </>
  );
}
