import type { PageLoad } from "./$types";

export const prerender = true;

export const load: PageLoad = () => ({
  pageTitle: "Armures",
  pageDescription: "",
  fullBleed: false,
  fullHeight: false,
  headings: [
    {
      "id": "ac-total",
      "text": "AC total",
      "level": 2
    },
    {
      "id": "materiaux",
      "text": "Matériaux",
      "level": 2
    },
    {
      "id": "tissus-et-fourrures",
      "text": "Tissus et Fourrures",
      "level": 3
    },
    {
      "id": "cuirs-et-peaux",
      "text": "Cuirs et Peaux",
      "level": 3
    },
    {
      "id": "ecailles-et-os",
      "text": "Écailles et Os",
      "level": 3
    },
    {
      "id": "metaux",
      "text": "Métaux",
      "level": 3
    },
    {
      "id": "boucliers",
      "text": "Boucliers",
      "level": 4
    }
  ],
});
