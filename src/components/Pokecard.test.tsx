import React from "react";
import "@testing-library/jest-dom/extend-expect";
import { render } from "@testing-library/react";
import Pokecard from "./Pokecard";

test("rendering pokecard", () => {
  const component = render(<Pokecard />);
  component.getByText("Pokecard");
});
