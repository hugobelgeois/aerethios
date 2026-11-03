import type { PageLoad } from "./$types";

export const prerender = true;

export const load: PageLoad = () => ({
  pageTitle: "Arc 4 - 22 - 03.04.26",
  pageDescription: "",
  fullBleed: false,
  fullHeight: false,
  headings: [
    {
      "id": "details",
      "text": "Détails",
      "level": 2
    },
    {
      "id": "notes",
      "text": "Notes",
      "level": 2
    },
    {
      "id": "scenario",
      "text": "Scénario",
      "level": 2
    },
    {
      "id": "1-arrivee",
      "text": "1) Arrivée",
      "level": 3
    },
    {
      "id": "2-premiere-nuit",
      "text": "2) Première nuit",
      "level": 3
    },
    {
      "id": "3-deuxieme-nuit",
      "text": "3) Deuxième nuit",
      "level": 3
    },
    {
      "id": "4-troisieme-nuit",
      "text": "4) Troisième nuit",
      "level": 3
    },
    {
      "id": "joueurs",
      "text": "Joueurs",
      "level": 2
    }
  ],
});
