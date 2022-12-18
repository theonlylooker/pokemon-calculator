import { useQuery, useInfiniteQuery } from "@tanstack/react-query";
import { fetchPokemons, fetchPokemonsInfinite } from "../API/fetchPokemons";

export const useAllPokemons = () => {
  return useQuery({
    queryKey: ["pokemons"],
    queryFn: fetchPokemons,
  });
};

export const useAllPokemonsInfinite = () => {
  return useInfiniteQuery(["pokemonsInfinite"], fetchPokemonsInfinite, {
    getNextPageParam: (_lastPage, pages) => {
      console.log(pages, "este es el parametro pages");
      if (pages.length < 8) return pages.length * 20;
      else return undefined;
    },
    staleTime: Infinity,
  });
};
