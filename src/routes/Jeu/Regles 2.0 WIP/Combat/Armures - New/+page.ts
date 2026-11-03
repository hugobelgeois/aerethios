import type { PageLoad } from "./$types";

export const prerender = true;

export const load: PageLoad = () => ({
  pageTitle: "Armures - New",
  pageDescription: "",
  fullBleed: false,
  fullHeight: false,
  headings: [
    {
      "id": "armures",
      "text": "Armures",
      "level": 2
    },
    {
      "id": "instabilite",
      "text": "Instabilité",
      "level": 3
    },
    {
      "id": "categories",
      "text": "Catégories",
      "level": 2
    },
    {
      "id": "legere",
      "text": "Légère",
      "level": 3
    },
    {
      "id": "lourde",
      "text": "Lourde",
      "level": 3
    },
    {
      "id": "rarete",
      "text": "Rareté",
      "level": 3
    },
    {
      "id": "boucliers",
      "text": "Boucliers",
      "level": 2
    }
  ],
});
