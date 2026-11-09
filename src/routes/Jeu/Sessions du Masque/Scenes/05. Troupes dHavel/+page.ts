import type { PageLoad } from "./$types";

export const prerender = true;

export const load: PageLoad = () => ({
  pageTitle: "05. Troupes d'Havel",
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
      "id": "havel",
      "text": "Havel",
      "level": 4
    },
    {
      "id": "soldat",
      "text": "Soldat",
      "level": 4
    },
    {
      "id": "intrigues",
      "text": "Intrigues",
      "level": 2
    },
    {
      "id": "arbre",
      "text": "Arbre",
      "level": 3
    },
    {
      "id": "campement",
      "text": "Campement",
      "level": 3
    },
    {
      "id": "spectre",
      "text": "Spectre",
      "level": 3
    },
    {
      "id": "next",
      "text": "Next",
      "level": 3
    },
    {
      "id": "actions-des-joueurs",
      "text": "Actions des joueurs",
      "level": 2
    }
  ],
});
