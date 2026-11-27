import type { PageLoad } from "./$types";

export const prerender = true;

export const load: PageLoad = () => ({
  pageTitle: "Inventaire",
  pageDescription: "",
  fullBleed: false,
  fullHeight: false,
  headings: [
    {
      "id": "taille",
      "text": "Taille",
      "level": 2
    },
    {
      "id": "contenant",
      "text": "Contenant",
      "level": 2
    },
    {
      "id": "objets",
      "text": "Objets",
      "level": 2
    }
  ],
});
