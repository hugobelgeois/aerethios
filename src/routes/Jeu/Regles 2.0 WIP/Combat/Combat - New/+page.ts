import type { PageLoad } from "./$types";

export const prerender = true;

export const load: PageLoad = () => ({
  pageTitle: "Combat - New",
  pageDescription: "",
  fullBleed: false,
  fullHeight: false,
  headings: [
    {
      "id": "pendant-son-tour",
      "text": "Pendant son tour",
      "level": 2
    },
    {
      "id": "deplacement",
      "text": "Déplacement",
      "level": 3
    },
    {
      "id": "action",
      "text": "Action",
      "level": 3
    },
    {
      "id": "attaquer--lancer-un-sort",
      "text": "Attaquer & Lancer un sort",
      "level": 4
    },
    {
      "id": "se-concentrer",
      "text": "Se concentrer",
      "level": 4
    },
    {
      "id": "action-bonus",
      "text": "Action Bonus",
      "level": 3
    },
    {
      "id": "analyser",
      "text": "Analyser",
      "level": 4
    },
    {
      "id": "reaction",
      "text": "Réaction",
      "level": 4
    },
    {
      "id": "attaques-speciales",
      "text": "Attaques spéciales",
      "level": 2
    },
    {
      "id": "pendant-le-tour-des-ennemi---wip",
      "text": "Pendant le tour des ennemi - WIP",
      "level": 2
    }
  ],
});
