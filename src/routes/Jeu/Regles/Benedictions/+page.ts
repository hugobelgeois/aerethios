import type { PageLoad } from "./$types";

export const prerender = true;

export const load: PageLoad = () => ({
  pageTitle: "Bénédictions",
  pageDescription: "",
  fullBleed: false,
  fullHeight: false,
  headings: [
    {
      "id": "benedictions-complexes",
      "text": "Bénédictions Complexes",
      "level": 2
    },
    {
      "id": "benedictions-simples",
      "text": "Bénédictions Simples",
      "level": 2
    },
    {
      "id": "benediction-conservatrice",
      "text": "Bénédiction Conservatrice",
      "level": 3
    },
    {
      "id": "benediction-opportune",
      "text": "Bénédiction Opportune",
      "level": 3
    },
    {
      "id": "benediction-explosive",
      "text": "Bénédiction Explosive",
      "level": 3
    },
    {
      "id": "benediction-hasardeuse",
      "text": "Bénédiction Hasardeuse",
      "level": 3
    },
    {
      "id": "benediction-double",
      "text": "Bénédiction Double",
      "level": 3
    },
    {
      "id": "benediction-fratricide",
      "text": "Bénédiction Fratricide",
      "level": 3
    },
    {
      "id": "benediction-de-moyenne",
      "text": "Bénédiction de Moyenne",
      "level": 3
    },
    {
      "id": "benediction-de-la-piece",
      "text": "Bénédiction de la pièce",
      "level": 3
    }
  ],
});
