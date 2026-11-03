import type { PageLoad } from "./$types";

export const prerender = true;

export const load: PageLoad = () => ({
  pageTitle: "Recherche Alchimique",
  pageDescription: "",
  fullBleed: false,
  fullHeight: false,
  headings: [
    {
      "id": "selection-des-ingredients",
      "text": "Sélection des ingrédients",
      "level": 2
    },
    {
      "id": "special-invocateur",
      "text": "Spécial Invocateur",
      "level": 2
    },
    {
      "id": "modificateurs-supplementaires",
      "text": "Modificateurs supplémentaires",
      "level": 2
    },
    {
      "id": "resolution",
      "text": "Résolution",
      "level": 2
    }
  ],
});
