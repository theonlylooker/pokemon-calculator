import React, { FC } from "react";
import { useQuery } from "@tanstack/react-query";
import { fetchAllPokemons } from "../API/fetchAllPokemons";

const Mysearch = () => {
  let { data, refetch } = useQuery({
    queryKey: ["pokemonsInfinite"],
    queryFn: fetchAllPokemons,
    enabled: false,
    select: (data) => {
      // const pokemonData = data.filter((pokemon) => {
      //   if (pokemon.data.name.startsWith("char")) {
      //     return pokemon;
      //   }
      // });
      return pokemonData;
    },
    onSuccess: (data) => {
      console.log(data.length);
    },
  });
  return (
    <div className="pb-7">
      <input type="text" placeholder="Search a Pokemon" />
      <button
        onClick={() => {
          refetch();
        }}
        //onClick={() => refetch()}
        // onClick={(e: React.MouseEvent<HTMLButtonElement, MouseEvent>) =>
        //   refetch
        // }
      >
        asd
      </button>
      {/* <div>{JSON.stringify(data)}</div> */}
    </div>
  );
};

export default Mysearch;
