export interface Pokemon {
  id: number;
  name: string;
  types: [
    {
      slot: number;
      type: {
        name: string;
        url: string;
      };
    },
  ];
  sprites: {
    other: {
      officialArtwork: {
        frontDefault: string;
      };
    };
  };
}
