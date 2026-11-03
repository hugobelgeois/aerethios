import type { PageLoad } from "./$types";

export const prerender = true;

export const load: PageLoad = () => ({
  pageTitle: "Bestiaire",
  pageDescription: "",
  fullBleed: false,
  fullHeight: false,
  headings: [
    {
      "id": "creatures-terrestres",
      "text": "Créatures Terrestres",
      "level": 1
    },
    {
      "id": "creatures-planaires",
      "text": "Créatures Planaires",
      "level": 1
    },
    {
      "id": "alterations",
      "text": "Altérations",
      "level": 1
    },
    {
      "id": "tailles",
      "text": "Tailles",
      "level": 1
    }
  ],
});
