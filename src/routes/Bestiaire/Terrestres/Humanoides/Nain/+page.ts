import type { PageLoad } from "./$types";

export const prerender = true;

export const load: PageLoad = () => ({
  pageTitle: "Nain",
  pageDescription: "",
  fullBleed: false,
  fullHeight: false,
  headings: [
    {
      "id": "apparence",
      "text": "Apparence",
      "level": 2
    },
    {
      "id": "histoire",
      "text": "Histoire",
      "level": 2
    },
    {
      "id": "le-nuage",
      "text": "Le Nuage",
      "level": 2
    },
    {
      "id": "larmure",
      "text": "L'Armure",
      "level": 2
    },
    {
      "id": "religion",
      "text": "Religion",
      "level": 2
    },
    {
      "id": "particularites",
      "text": "Particularités",
      "level": 2
    }
  ],
});
