import type { PageLoad } from "./$types";

export const prerender = true;

export const load: PageLoad = () => ({
  pageTitle: "Armes à distance",
  pageDescription: "",
  fullBleed: false,
  fullHeight: false,
  headings: [
    {
      "id": "armes-a-corde",
      "text": "Armes à corde",
      "level": 2
    },
    {
      "id": "armes-a-feu",
      "text": "Armes à feu",
      "level": 2
    },
    {
      "id": "mecanisme",
      "text": "Mécanisme",
      "level": 3
    },
    {
      "id": "propulsion",
      "text": "Propulsion",
      "level": 3
    },
    {
      "id": "situations-de-tir",
      "text": "Situations de tir",
      "level": 2
    }
  ],
});
