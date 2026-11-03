import type { PageLoad } from "./$types";

export const prerender = true;

export const load: PageLoad = () => ({
  pageTitle: "Magie - Types",
  pageDescription: "",
  fullBleed: false,
  fullHeight: false,
  headings: [
    {
      "id": "magies-de-base",
      "text": "Magies de Base",
      "level": 2
    },
    {
      "id": "fusion",
      "text": "Fusion",
      "level": 2
    },
    {
      "id": "reactions",
      "text": "Réactions",
      "level": 2
    }
  ],
});
