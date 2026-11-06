import type { PageLoad } from "./$types";

export const prerender = true;

export const load: PageLoad = () => ({
  pageTitle: "Arek",
  pageDescription: "",
  fullBleed: false,
  fullHeight: false,
  headings: [
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
