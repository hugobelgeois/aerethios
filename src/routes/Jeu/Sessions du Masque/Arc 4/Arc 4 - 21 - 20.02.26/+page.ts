import type { PageLoad } from "./$types";

export const prerender = true;

export const load: PageLoad = () => ({
  pageTitle: "Arc 4 - 21 - 20.02.26",
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
      "id": "1-le-duo-de-paladins-est-platine-ou-hieromage",
      "text": "1) Le duo de Paladins est Platine ou Hiéromage",
      "level": 3
    },
    {
      "id": "2-voyage-jusqua-la-douane",
      "text": "2) Voyage jusqu'à la douane",
      "level": 3
    },
    {
      "id": "3-aventurier-solitaire-en-quete-de-defi",
      "text": "3) Aventurier solitaire en quête de défi",
      "level": 3
    },
    {
      "id": "4-bloque-a-la-douane-par-ordre-des-lions-dargent",
      "text": "4) Bloqué à la douane ~~par ordre des Lions d'Argent~~",
      "level": 3
    },
    {
      "id": "5-a-la-recherche-de-nyx-et-salome",
      "text": "5) A la recherche de Nyx et Salomé",
      "level": 3
    },
    {
      "id": "joueurs",
      "text": "Joueurs",
      "level": 2
    }
  ],
});
