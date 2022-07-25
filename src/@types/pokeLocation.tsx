type version = {
  version: {
    name: string;
  };
};

export type pokeLocation = {
  location_area: {
    name: string;
    url: string;
  };
  version_details: version[];
};
