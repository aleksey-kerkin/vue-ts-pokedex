import type { Pokemon } from "@/entities/pokemon/model/types";
import axios from "axios";

// 1. Create Axios instance with base configuration
const pokeAPIClient = axios.create({
  baseURL: "https://pokeapi.co/api/v2",
  timeout: 5000,
});

// 2. Define response types for different endpoints
interface ListResponse {
  count: number;
  next: string | null;
  previous: string | null;
  results: Array<{
    name: string;
    url: string;
  }>;
}

// 3. Create API service object
export const pokeAPI = {
  async getAllPokemon(limit = 150) {
    const response = await pokeAPIClient.get<ListResponse>(
      `pokemon?limit=${limit}`,
    );
    return response.data.results;
  },
  async getPokemonByName(name: string) {
    const response = await pokeAPIClient.get<Pokemon>(
      `pokemon/${name.toLowerCase()}`,
    );
    return response.data;
  },
};
