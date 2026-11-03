import type { PageLoad } from "./$types";

export const prerender = true;

export const load: PageLoad = () => ({
  pageTitle: "Invocateur",
  pageDescription: "",
  fullBleed: false,
  fullHeight: false,
  headings: [
    {
      "id": "materiel",
      "text": "Matériel",
      "level": 2
    },
    {
      "id": "resultat-de-fabrication",
      "text": "Résultat de Fabrication",
      "level": 2
    },
    {
      "id": "statistiques-de-linvocation",
      "text": "Statistiques de l'invocation",
      "level": 3
    },
    {
      "id": "types-dinvocations",
      "text": "Types d'invocations",
      "level": 2
    },
    {
      "id": "force",
      "text": "Force",
      "level": 3
    },
    {
      "id": "agilite",
      "text": "Agilité",
      "level": 3
    },
    {
      "id": "magicien",
      "text": "Magicien",
      "level": 3
    },
    {
      "id": "types-dingredients-et-effets",
      "text": "Types d’ingrédients et effets",
      "level": 2
    },
    {
      "id": "duree-et-stabilite",
      "text": "Durée et stabilité",
      "level": 3
    }
  ],
});
