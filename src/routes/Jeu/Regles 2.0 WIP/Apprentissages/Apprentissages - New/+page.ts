import type { PageLoad } from "./$types";

export const prerender = true;

export const load: PageLoad = () => ({
  pageTitle: "Apprentissages - New",
  pageDescription: "",
  fullBleed: false,
  fullHeight: false,
  headings: [
    {
      "id": "general",
      "text": "Général",
      "level": 2
    },
    {
      "id": "metiers",
      "text": "Métiers",
      "level": 2
    },
    {
      "id": "artisanat---new",
      "text": "[[Artisanat - New]]",
      "level": 3
    },
    {
      "id": "alchimie---new",
      "text": "[[Alchimie - New]]",
      "level": 3
    },
    {
      "id": "erudition",
      "text": "[[Érudition]]",
      "level": 3
    },
    {
      "id": "fabrication",
      "text": "Fabrication",
      "level": 2
    },
    {
      "id": "recette",
      "text": "Recette",
      "level": 3
    },
    {
      "id": "mecanique",
      "text": "Mécanique",
      "level": 3
    },
    {
      "id": "ressources",
      "text": "Ressources",
      "level": 3
    },
    {
      "id": "ustensiles",
      "text": "Ustensiles",
      "level": 3
    },
    {
      "id": "lieux",
      "text": "Lieux",
      "level": 3
    },
    {
      "id": "regles",
      "text": "Règles",
      "level": 3
    }
  ],
});
