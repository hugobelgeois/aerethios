import type { PageLoad } from "./$types";

export const prerender = true;

export const load: PageLoad = () => ({
  pageTitle: "Armes de mêlées - New",
  pageDescription: "",
  fullBleed: false,
  fullHeight: false,
  headings: [
    {
      "id": "base",
      "text": "Base",
      "level": 2
    },
    {
      "id": "materiaux",
      "text": "Matériaux",
      "level": 2
    },
    {
      "id": "infusions",
      "text": "Infusions",
      "level": 2
    }
  ],
});
