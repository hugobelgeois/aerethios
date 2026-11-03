import type { PageLoad } from "./$types";

export const prerender = true;

export const load: PageLoad = () => ({
  pageTitle: "Tokens",
  pageDescription: "",
  fullBleed: false,
  fullHeight: false,
  headings: [
    {
      "id": "des-despoir-de-peur-et-tokens",
      "text": "Dés d'Espoir, de Peur et Tokens",
      "level": 2
    },
    {
      "id": "obtention",
      "text": "Obtention",
      "level": 3
    },
    {
      "id": "utilisation",
      "text": "Utilisation",
      "level": 3
    }
  ],
});
