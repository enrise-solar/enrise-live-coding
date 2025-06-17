export type Site = {
  id: string;
  name: string;
  location: string;
  installedPower: number;
  plantPrice: number;
  actualEnergyPrice: number;
};

export const sites: Site[] = [
  {
    id: "1",
    name: "Strauss",
    location: "160 Av. Marcou Delanglade, 84000 Avignon, France",
    installedPower: 170,
    plantPrice: 200000, // €
    actualEnergyPrice: 180, // €/MWh
  },
  {
    id: "2",
    name: "Super U",
    location: "3 Rue de la Vergne, 79300 Bressuire, France",
    installedPower: 250,
    plantPrice: 220000, // €
    actualEnergyPrice: 185, // €/MWh
  },
  {
    id: "3",
    name: "Flunch",
    location: "37 Av. des 2 Fontaines, 57140 Metz, France",
    installedPower: 300,
    plantPrice: 330000, // €
    actualEnergyPrice: 170,
  },
];
