import type { PageLoad } from "./$types";

export const prerender = true;

export const load: PageLoad = () => ({
  pageTitle: "Mythiques",
  pageDescription: "",
  fullBleed: false,
  fullHeight: false,
  headings: [
    {
      "id": "ange",
      "text": "[[Ange]]",
      "level": 1
    },
    {
      "id": "demon",
      "text": "[[Démon]]",
      "level": 1
    }
  ],
});
