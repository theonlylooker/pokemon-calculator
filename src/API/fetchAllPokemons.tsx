import React from "react";
import axios from "axios";
import { fetchPokemon } from "./fetchPokemon";
import { pokemons } from "../types/types";
export const fetchAllPokemons = async () => {
  const URL = "https://pokeapi.co/api/v2/pokemon?limit=100";
  const { data } = await axios.get<pokemons>(URL);
  const result = await Promise.all(
    data.results.map(async (pokemon) => {
      return fetchPokemon(pokemon.url);
    })
  );
  return result;
};
