import React from "react";
import axios from "axios";
import { fetchPokemon } from "./fetchPokemon";
import { pokemons } from "../types/types";
export const fetchPokemons = async () => {
  const URL = "https://pokeapi.co/api/v2/pokemon?limit=20&offset=0";
  const { data } = await axios.get<pokemons>(URL);
  const result = await Promise.all(
    data.results.map(async (pokemon) => {
      return fetchPokemon(pokemon.url);
    })
  );
  return result;
};

export const fetchPokemonsInfinite = async ({ pageParam = 0 }) => {
  const URL = `https://pokeapi.co/api/v2/pokemon?limit=20&offset=${pageParam}`;
  console.log(URL);
  const { data } = await axios.get<pokemons>(URL);
  const result = await Promise.all(
    data.results.map(async (pokemon) => {
      return fetchPokemon(pokemon.url);
    })
  );
  return result;
};
