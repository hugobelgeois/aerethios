import type { PageLoad } from "./$types";

export const prerender = true;

export const load: PageLoad = () => ({
  pageTitle: "Orc",
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
      "id": "societe",
      "text": "Société",
      "level": 2
    },
    {
      "id": "tribus",
      "text": "Tribus",
      "level": 2
    },
    {
      "id": "influence-animale",
      "text": "Influence animale",
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
