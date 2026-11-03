import type { PageLoad } from "./$types";

export const prerender = true;

export const load: PageLoad = () => ({
  pageTitle: "00b. xx-xx-26",
  pageDescription: "",
  fullBleed: false,
  fullHeight: false,
  headings: [
    {
      "id": "creation-de-personnages",
      "text": "Création de personnages",
      "level": 2
    },
    {
      "id": "etape-0--inspiration",
      "text": "Étape 0 : Inspiration",
      "level": 3
    },
    {
      "id": "etape-1--identite",
      "text": "Étape 1 : Identité",
      "level": 3
    },
    {
      "id": "etape-2--relations",
      "text": "Étape 2 : Relations",
      "level": 3
    },
    {
      "id": "etape-3--monde",
      "text": "Étape 3 : Monde",
      "level": 3
    },
    {
      "id": "etape-4--intrigues",
      "text": "Étape 4 : Intrigues",
      "level": 3
    },
    {
      "id": "etape-5--ensemble-autour-de-la-table",
      "text": "Étape 5 : Ensemble autour de la table",
      "level": 3
    }
  ],
});
