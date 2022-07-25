import { pokeAbilities } from './pokeAbilities';
import { pokeLocation } from './pokeLocation';
import { pokeType } from './pokeType';
import { statType } from './statType';
import { nameType } from './nameType';
import { chain } from './chain';

export type Poke = {
  name: string;
  id: string;
  base_experience: number;
  types: [pokeType];
  sprites: string;
  height: number;
  weight: number;
  abilities: pokeAbilities[];
  stats: statType[];
  evolution_chain: {
    chain: chain;
  };
  location_area_encounters: pokeLocation[];
  weakness: nameType[];
  strongness: nameType[];
  capture_rate: number;
  growth_rate: string;
  egg_groups: string[];
  poke_species: string;
};
