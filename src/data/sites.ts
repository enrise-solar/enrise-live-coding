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
    installedPower: 420,
    plantPrice: 400000, // €
    actualEnergyPrice: 105, // €/MWh
  },
  {
    id: "2",
    name: "Super U",
    location: "3 Rue de la Vergne, 79300 Bressuire, France",
    installedPower: 300,
    plantPrice: 320000, // €
    actualEnergyPrice: 125, // €/MWh
  },
  {
    id: "3",
    name: "Flunch",
    location: "37 Av. des 2 Fontaines, 57140 Metz, France",
    installedPower: 350,
    plantPrice: 380000, // €
    actualEnergyPrice: 115, // €/MWh
  },
];
