import type { PageLoad } from "./$types";

export const prerender = true;

export const load: PageLoad = () => ({
  pageTitle: "Humain",
  pageDescription: "",
  fullBleed: false,
  fullHeight: false,
  headings: [
    {
      "id": "nature",
      "text": "Nature",
      "level": 2
    },
    {
      "id": "mentalite",
      "text": "Mentalité",
      "level": 2
    },
    {
      "id": "reputation",
      "text": "Réputation",
      "level": 2
    },
    {
      "id": "particularites",
      "text": "Particularités",
      "level": 2
    }
  ],
});
