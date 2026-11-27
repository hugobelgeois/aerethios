import type { PageLoad } from "./$types";

export const prerender = true;

export const load: PageLoad = () => ({
  pageTitle: "Création et niveaux",
  pageDescription: "",
  fullBleed: false,
  fullHeight: false,
  headings: [
    {
      "id": "creation",
      "text": "Création",
      "level": 2
    },
    {
      "id": "magie",
      "text": "Magie",
      "level": 3
    },
    {
      "id": "competences",
      "text": "Compétences",
      "level": 3
    },
    {
      "id": "monter-de-niveau",
      "text": "Monter de niveau",
      "level": 2
    },
    {
      "id": "au-dela-de-20",
      "text": "Au-delà de 20",
      "level": 3
    },
    {
      "id": "arbre-complet",
      "text": "Arbre complet",
      "level": 4
    },
    {
      "id": "recapitulatif",
      "text": "Récapitulatif",
      "level": 3
    }
  ],
});
