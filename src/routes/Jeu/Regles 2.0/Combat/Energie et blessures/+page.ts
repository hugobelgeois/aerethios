import type { PageLoad } from "./$types";

export const prerender = true;

export const load: PageLoad = () => ({
  pageTitle: "Énergie et blessures",
  pageDescription: "",
  fullBleed: false,
  fullHeight: false,
  headings: [
    {
      "id": "energie",
      "text": "Énergie",
      "level": 2
    },
    {
      "id": "blessures",
      "text": "Blessures",
      "level": 2
    },
    {
      "id": "blessures-legeres",
      "text": "Blessures légères",
      "level": 3
    },
    {
      "id": "blessures-graves",
      "text": "Blessures graves",
      "level": 3
    },
    {
      "id": "coma-et-mort",
      "text": "Coma et mort",
      "level": 2
    },
    {
      "id": "refuser-la-mort",
      "text": "Refuser la mort",
      "level": 3
    },
    {
      "id": "repos",
      "text": "Repos",
      "level": 2
    }
  ],
});
