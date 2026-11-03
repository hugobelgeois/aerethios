import type { PageLoad } from "./$types";

export const prerender = true;

export const load: PageLoad = () => ({
  pageTitle: "01. Orphelinat d'Hazdaim",
  pageDescription: "",
  fullBleed: false,
  fullHeight: false,
  headings: [
    {
      "id": "description",
      "text": "Description",
      "level": 2
    },
    {
      "id": "details",
      "text": "Détails",
      "level": 2
    },
    {
      "id": "maps",
      "text": "Maps",
      "level": 3
    },
    {
      "id": "rencontres",
      "text": "Rencontres",
      "level": 3
    },
    {
      "id": "intrigues",
      "text": "Intrigues",
      "level": 2
    },
    {
      "id": "theon-et-hugo",
      "text": "Théon et Hugo",
      "level": 3
    },
    {
      "id": "nix-et-salome",
      "text": "Nix et Salomé",
      "level": 3
    },
    {
      "id": "les-2-paladins",
      "text": "Les 2 paladins",
      "level": 3
    },
    {
      "id": "actions-des-joueurs",
      "text": "Actions des joueurs",
      "level": 2
    }
  ],
});
