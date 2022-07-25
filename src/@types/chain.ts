export type chain = {
  species: {
    name: string;
    sprite: string;
  };
  evolves_to?: [
    {
      species: {
        name: string;
        sprite: string;
      };
      evolves_to?: [
        {
          species: {
            name: string;
            sprite: string;
          };
        },
      ];
    },
  ];
};
