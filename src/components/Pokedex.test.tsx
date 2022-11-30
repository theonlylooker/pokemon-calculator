import react from "react";
import "@testing-library/jest-dom/extend-expect";
import { render } from "@testing-library/react";
import Pokedex from "./Pokedex";

test("rendering the pokedex", () => {
  const component = render(<Pokedex />);
  component.getByText("Pokedex");
});
