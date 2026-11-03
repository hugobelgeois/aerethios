import type { PageLoad } from "./$types";

export const prerender = true;

export const load: PageLoad = () => ({
  pageTitle: "Forgeron",
  pageDescription: "",
  fullBleed: false,
  fullHeight: false,
  headings: [
    {
      "id": "raffinage",
      "text": "Raffinage",
      "level": 2
    },
    {
      "id": "dechet",
      "text": "Déchet",
      "level": 3
    },
    {
      "id": "communs",
      "text": "Communs",
      "level": 3
    },
    {
      "id": "peu-communs",
      "text": "Peu communs",
      "level": 3
    },
    {
      "id": "rares",
      "text": "Rares",
      "level": 3
    },
    {
      "id": "legendaires",
      "text": "Légendaires",
      "level": 3
    },
    {
      "id": "technique-de-forge",
      "text": "Technique de forge",
      "level": 2
    }
  ],
});
