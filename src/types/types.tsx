import { ReactNode } from "react";

export interface pokemontype {
  type: {
    name: string;
  };
}

export interface globalPokemon {
  url: string;
  name: string;
}

export interface pokemons {
  count: number;
  next: string | null;
  previous: string | null;
  results: globalPokemon[];
}

export interface pokemon {
  id: number;
  name: string;
  sprites: {
    front_default: string;
  };
  types: pokemontype[];
}

export interface layout {
  children: ReactNode;
}
