import React from "react";
import "@testing-library/jest-dom/extend-expect";
import { render } from "@testing-library/react";
import Pokecard from "./Pokecard";

test("rendering pokecard", () => {
  const pokemon = {
    id: 1,
    name: "pikachu",
    types: [],
    sprites: { front_default: "asd" },
  };
  const component = render(
    <Pokecard
      id={pokemon.id}
      name={pokemon.name}
      types={pokemon.types}
      sprites={pokemon.sprites}
    />
  );
  component.getByText("1");
  component.getByText("pikachu");
});
