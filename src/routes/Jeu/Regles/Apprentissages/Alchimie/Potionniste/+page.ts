import type { PageLoad } from "./$types";

export const prerender = true;

export const load: PageLoad = () => ({
  pageTitle: "Potionniste",
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
      "id": "utilisation-des-concoctions",
      "text": "Utilisation des concoctions",
      "level": 2
    },
    {
      "id": "resultat-de-fabrication",
      "text": "Résultat de Fabrication",
      "level": 2
    },
    {
      "id": "consommation-et-intoxication",
      "text": "Consommation et Intoxication",
      "level": 2
    },
    {
      "id": "prix-indicatif-par-nombre-dingredients-pa",
      "text": "Prix indicatif par nombre d'ingrédients (pa)",
      "level": 2
    },
    {
      "id": "types-dingredients-et-effets",
      "text": "Types d’ingrédients et effets",
      "level": 2
    }
  ],
});
