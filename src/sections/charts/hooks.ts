import { useState } from "react";

import axios, { type AxiosError } from "axios";

import { type Pokemon, type PokemonResponse } from "./types";

export const usePokemons = () => {
  const [pokemons, setPokemons] = useState<Pokemon[]>([]);
  const [loading, setLoading] = useState<boolean>(true);
  const [error, setError] = useState<string | null>(null);

  const url = 'https://pokeapi.co/api/v2/pokemon?limit=150';

  const fetchPokemons = async () => {
    try {
      setLoading(true);
      const response = await axios.get(url);
      axios.all(
        response.data.results.map(async (p: {name: string, url: string}) => {
          const detailsResponse = await axios.get(p.url);
          const details = detailsResponse.data;
          return details;
        })
      ).then(results => {
        setPokemons(results.map((result: unknown) => (
          {
            id: (result as PokemonResponse).id,
            name: (result as PokemonResponse).name,
            types: (result as PokemonResponse).types.map((type: { type: { name: string } }) => type.type.name)
          }
        )));
      });
    } catch (error) {
      if (axios.isAxiosError(error) || error instanceof Error) {
        setError((error as AxiosError).message);
      } else {
        setError('An unknown error occurred');
      }
    } finally {
      setLoading(false);
    }
  }

  return { pokemons, loading, error, fetchPokemons };
}