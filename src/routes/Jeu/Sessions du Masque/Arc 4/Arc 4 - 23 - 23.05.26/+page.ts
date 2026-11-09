import type { PageLoad } from "./$types";

export const prerender = true;

export const load: PageLoad = () => ({
  pageTitle: "Arc 4 - 23 - 23.05.26",
  pageDescription: "",
  fullBleed: false,
  fullHeight: false,
  headings: [
    {
      "id": "notes",
      "text": "Notes",
      "level": 2
    },
    {
      "id": "scenario",
      "text": "Scénario",
      "level": 2
    },
    {
      "id": "1-orphelinat-dhazdaim",
      "text": "1. Orphelinat d'Hazdaim",
      "level": 3
    },
    {
      "id": "2-campement-de-nix-et-salome",
      "text": "2. Campement de Nix et Salomé",
      "level": 3
    },
    {
      "id": "3-village-du-chef",
      "text": "3. Village du chef",
      "level": 3
    },
    {
      "id": "4-ville-du-dragon",
      "text": "4. Ville du Dragon",
      "level": 3
    },
    {
      "id": "05-troupes-dhavel",
      "text": "05. Troupes d'Havel",
      "level": 3
    },
    {
      "id": "06-antre-de-bayle",
      "text": "06. Antre de Bayle",
      "level": 3
    }
  ],
});
