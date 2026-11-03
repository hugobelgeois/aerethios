import type { PageLoad } from "./$types";

export const prerender = true;

export const load: PageLoad = () => ({
  pageTitle: "Rappel",
  pageDescription: "",
  fullBleed: false,
  fullHeight: false,
  headings: [
    {
      "id": "fabrication",
      "text": "Fabrication",
      "level": 4
    },
    {
      "id": "recolte",
      "text": "Récolte",
      "level": 4
    },
    {
      "id": "lieu",
      "text": "Lieu",
      "level": 4
    }
  ],
});
