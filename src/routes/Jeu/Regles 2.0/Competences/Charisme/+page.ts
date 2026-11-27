import type { PageLoad } from "./$types";

export const prerender = true;

export const load: PageLoad = () => ({
  pageTitle: "Charisme",
  pageDescription: "",
  fullBleed: false,
  fullHeight: false,
  headings: [
    {
      "id": "principales",
      "text": "Principales",
      "level": 2
    },
    {
      "id": "secondaires",
      "text": "Secondaires",
      "level": 2
    },
    {
      "id": "finales",
      "text": "Finales",
      "level": 2
    }
  ],
});
