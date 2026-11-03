import type { PageLoad } from "./$types";

export const prerender = true;

export const load: PageLoad = () => ({
  pageTitle: "Armes à distances - New",
  pageDescription: "",
  fullBleed: false,
  fullHeight: false,
  headings: [
    {
      "id": "base",
      "text": "Base",
      "level": 2
    },
    {
      "id": "taille",
      "text": "Taille",
      "level": 3
    },
    {
      "id": "communs",
      "text": "Communs",
      "level": 2
    },
    {
      "id": "couvert",
      "text": "Couvert",
      "level": 3
    },
    {
      "id": "munitions",
      "text": "Munitions",
      "level": 3
    },
    {
      "id": "armes-a-corde",
      "text": "Armes à Corde",
      "level": 2
    },
    {
      "id": "armes-a-feu",
      "text": "Armes à Feu",
      "level": 2
    },
    {
      "id": "magasine",
      "text": "Magasine",
      "level": 3
    },
    {
      "id": "propulsion",
      "text": "Propulsion",
      "level": 3
    }
  ],
});
