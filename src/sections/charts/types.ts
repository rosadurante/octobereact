export type Pokemon = {
  id: number;
  name: string;
  types: string[];
}

export type PokemonType = {
  name: string;
}

export type TypesCounter = {
  name: string;
  counter: number;
}

export type PokemonResponse = {
  id: number;
  name: string;
  types: {
    type: {
      name: string;
    }
  }[];
}