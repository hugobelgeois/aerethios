import type { PageLoad } from "./$types";

export const prerender = true;

export const load: PageLoad = () => ({
  pageTitle: "Magie et crystaux",
  pageDescription: "",
  fullBleed: false,
  fullHeight: false,
  headings: [
    {
      "id": "lancer-un-sort",
      "text": "Lancer un sort",
      "level": 2
    },
    {
      "id": "sort-de-zone",
      "text": "Sort de zone",
      "level": 3
    },
    {
      "id": "sort-deffet",
      "text": "Sort d'effet",
      "level": 3
    },
    {
      "id": "concentration",
      "text": "Concentration",
      "level": 3
    },
    {
      "id": "soins",
      "text": "Soins",
      "level": 3
    },
    {
      "id": "depasser-ses-limites",
      "text": "Dépasser ses limites",
      "level": 3
    },
    {
      "id": "sans-implants",
      "text": "Sans implants",
      "level": 2
    },
    {
      "id": "catalyseurs",
      "text": "Catalyseurs",
      "level": 3
    },
    {
      "id": "bijoux",
      "text": "Bijoux",
      "level": 3
    },
    {
      "id": "crystal-lance",
      "text": "Crystal lancé",
      "level": 3
    },
    {
      "id": "crystaux",
      "text": "Crystaux",
      "level": 2
    },
    {
      "id": "implants",
      "text": "Implants",
      "level": 3
    },
    {
      "id": "consommation",
      "text": "Consommation",
      "level": 3
    },
    {
      "id": "apprentissage",
      "text": "Apprentissage",
      "level": 2
    }
  ],
});
