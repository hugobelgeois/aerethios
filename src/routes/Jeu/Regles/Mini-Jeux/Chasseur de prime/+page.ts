import type { PageLoad } from "./$types";

export const prerender = true;

export const load: PageLoad = () => ({
  pageTitle: "Chasseur de prime",
  pageDescription: "",
  fullBleed: false,
  fullHeight: false,
  headings: [
    {
      "id": "fonctionnement",
      "text": "Fonctionnement",
      "level": 2
    },
    {
      "id": "phase-de-recherche",
      "text": "Phase de Recherche",
      "level": 2
    },
    {
      "id": "ennuis-et-bagarres",
      "text": "Ennuis et Bagarres",
      "level": 2
    },
    {
      "id": "recompenses",
      "text": "Récompenses",
      "level": 2
    }
  ],
});
