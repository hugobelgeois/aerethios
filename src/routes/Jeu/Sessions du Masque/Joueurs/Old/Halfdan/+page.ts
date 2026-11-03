import type { PageLoad } from "./$types";

export const prerender = true;

export const load: PageLoad = () => ({
  pageTitle: "Halfdan",
  pageDescription: "",
  fullBleed: false,
  fullHeight: false,
  headings: [
    {
      "id": "attributs",
      "text": "Attributs",
      "level": 2
    },
    {
      "id": "combat",
      "text": "Combat",
      "level": 3
    },
    {
      "id": "magie",
      "text": "Magie",
      "level": 3
    },
    {
      "id": "competences",
      "text": "Compétences",
      "level": 2
    },
    {
      "id": "equipement",
      "text": "Equipement",
      "level": 2
    },
    {
      "id": "armes",
      "text": "[[Armes]]",
      "level": 3
    },
    {
      "id": "armures",
      "text": "[[Armures]]",
      "level": 3
    },
    {
      "id": "apprentissages",
      "text": "[[Apprentissages]]",
      "level": 2
    },
    {
      "id": "inventaire",
      "text": "Inventaire",
      "level": 2
    },
    {
      "id": "connaissances",
      "text": "Connaissances",
      "level": 2
    }
  ],
});
