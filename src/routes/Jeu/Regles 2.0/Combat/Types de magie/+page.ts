import type { PageLoad } from "./$types";

export const prerender = true;

export const load: PageLoad = () => ({
  pageTitle: "Types de magie",
  pageDescription: "",
  fullBleed: false,
  fullHeight: false,
  headings: [
    {
      "id": "magies-de-base",
      "text": "Magies de base",
      "level": 2
    },
    {
      "id": "fusion",
      "text": "Fusion",
      "level": 2
    },
    {
      "id": "reactions",
      "text": "Réactions",
      "level": 2
    },
    {
      "id": "lumiere-et-tenebres",
      "text": "Lumière et Ténèbres",
      "level": 3
    }
  ],
});
