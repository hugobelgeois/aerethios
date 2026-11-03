import type { PageLoad } from "./$types";

export const prerender = true;

export const load: PageLoad = () => ({
  pageTitle: "Apprentissages",
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
      "id": "regles-generales",
      "text": "Règles générales",
      "level": 3
    },
    {
      "id": "apprentissages-categorisees",
      "text": "Apprentissages catégorisées",
      "level": 3
    },
    {
      "id": "alchimie",
      "text": "[[Alchimie]]",
      "level": 4
    },
    {
      "id": "artisanat",
      "text": "[[Artisanat]]",
      "level": 4
    },
    {
      "id": "apprentissages-libres",
      "text": "Apprentissages libres",
      "level": 3
    },
    {
      "id": "apprendre",
      "text": "Apprendre",
      "level": 2
    },
    {
      "id": "difficulte-dapprentissage",
      "text": "Difficulté d’apprentissage",
      "level": 3
    },
    {
      "id": "gain-dexperience",
      "text": "Gain d’expérience",
      "level": 3
    },
    {
      "id": "tutorer",
      "text": "Tutorer",
      "level": 2
    }
  ],
});
