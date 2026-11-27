import type { PageLoad } from "./$types";

export const prerender = true;

export const load: PageLoad = () => ({
  pageTitle: "Guide MJ - Ennemis",
  pageDescription: "",
  fullBleed: false,
  fullHeight: false,
  headings: [
    {
      "id": "creer-un-ennemi",
      "text": "Créer un ennemi",
      "level": 2
    },
    {
      "id": "petits-ennemis",
      "text": "Petits ennemis",
      "level": 3
    },
    {
      "id": "boss",
      "text": "Boss",
      "level": 3
    },
    {
      "id": "types-et-defenses",
      "text": "Types et défenses",
      "level": 2
    },
    {
      "id": "attaques-de-boss",
      "text": "Attaques de boss",
      "level": 2
    },
    {
      "id": "exemple--bayle",
      "text": "Exemple : Bayle",
      "level": 2
    }
  ],
});
