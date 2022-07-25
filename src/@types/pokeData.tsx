type egg = {
  name: string;
};

type genus = {
  genus: string;
  language: {
    name: string;
    url: string;
  };
};

export type pokeData = {
  base_happiness: number;
  capture_rate: number;
  egg_groups: egg[];
  genera: genus[];
  growth_rate: {
    name: string;
  };
};
