import { type Pokemon } from "./types";
import { pokeAPI } from "@/shared/api/pokeAPI";

export const fetchPokemonList = async (): Promise<Pokemon[]> => {
  const list = await pokeAPI.getAllPokemon();
  return Promise.all(
    list.map(async (item) => {
      const details = await pokeAPI.getPokemonByName(item.name);
      return {
        id: details.id,
        name: details.name,
        types: details.types,
        sprites: details.sprites,
        height: details.height,
        weight: details.weight,
        stats: details.stats,
      };
    }),
  );
};
