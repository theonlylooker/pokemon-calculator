import axios from "axios";
import { pokemon } from "../types/types";
export const fetchPokemon = async (URL: string) => {
  const result = await axios.get<pokemon>(URL);
  return result;
};
