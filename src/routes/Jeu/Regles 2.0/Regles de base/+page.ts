import type { PageLoad } from "./$types";

export const prerender = true;

export const load: PageLoad = () => ({
  pageTitle: "Règles de base",
  pageDescription: "",
  fullBleed: false,
  fullHeight: false,
  headings: [
    {
      "id": "principes",
      "text": "Principes",
      "level": 2
    },
    {
      "id": "glossaire",
      "text": "Glossaire",
      "level": 2
    },
    {
      "id": "toucher-et-blesser",
      "text": "Toucher et blesser",
      "level": 2
    },
    {
      "id": "critique-et-echec-critique",
      "text": "Critique et échec critique",
      "level": 3
    },
    {
      "id": "attaques-speciales",
      "text": "Attaques spéciales",
      "level": 3
    },
    {
      "id": "deroulement-du-combat",
      "text": "Déroulement du combat",
      "level": 2
    },
    {
      "id": "reaction",
      "text": "Réaction",
      "level": 3
    },
    {
      "id": "fuir",
      "text": "Fuir",
      "level": 2
    }
  ],
});
