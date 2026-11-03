import type { PageLoad } from "./$types";

export const prerender = true;

export const load: PageLoad = () => ({
  pageTitle: "Niveaux",
  pageDescription: "",
  fullBleed: false,
  fullHeight: false,
  headings: [
    {
      "id": "niveau-1",
      "text": "Niveau 1",
      "level": 2
    },
    {
      "id": "niveau-superieur",
      "text": "Niveau supérieur",
      "level": 2
    }
  ],
});
