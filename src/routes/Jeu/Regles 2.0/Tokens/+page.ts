import type { PageLoad } from "./$types";

export const prerender = true;

export const load: PageLoad = () => ({
  pageTitle: "Tokens",
  pageDescription: "",
  fullBleed: false,
  fullHeight: false,
  headings: [
    {
      "id": "obtention",
      "text": "Obtention",
      "level": 2
    },
    {
      "id": "utilisation",
      "text": "Utilisation",
      "level": 2
    },
    {
      "id": "doubler",
      "text": "Doubler",
      "level": 3
    },
    {
      "id": "tokens-du-mj",
      "text": "Tokens du MJ",
      "level": 2
    }
  ],
});
