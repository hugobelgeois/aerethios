import type { PageLoad } from "./$types";

export const prerender = true;

export const load: PageLoad = () => ({
  pageTitle: "Ligolas",
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
      "id": "armes-de-melees---new--armes-a-distances---new",
      "text": "[[Armes de mêlées - New]] | [[Armes à distances - New]]",
      "level": 3
    },
    {
      "id": "armures---new",
      "text": "[[Armures - New]]",
      "level": 3
    },
    {
      "id": "apprentissages---new",
      "text": "[[Apprentissages - New]]",
      "level": 2
    },
    {
      "id": "inventaire",
      "text": "Inventaire",
      "level": 2
    },
    {
      "id": "notes",
      "text": "Notes",
      "level": 2
    },
    {
      "id": "maison-guildes-et-organisations",
      "text": "Maison, Guildes et Organisations",
      "level": 3
    },
    {
      "id": "relations",
      "text": "Relations",
      "level": 3
    }
  ],
});
