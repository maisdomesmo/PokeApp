import { pokeType } from './pokeType';

export type pokeCardInfo = {
  name: string;
  id: number;
  types: [pokeType];
  sprites: {
    other: {
      'official-artwork': { front_default: string };
    };
  };
  height: number;
  weight: number;
  weakness: pokeType[];
};
