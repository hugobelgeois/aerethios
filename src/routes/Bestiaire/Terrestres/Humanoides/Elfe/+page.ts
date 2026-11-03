import type { PageLoad } from "./$types";

export const prerender = true;

export const load: PageLoad = () => ({
  pageTitle: "Elfe",
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
      "id": "obsession",
      "text": "Obsession",
      "level": 2
    },
    {
      "id": "societe",
      "text": "Société",
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
