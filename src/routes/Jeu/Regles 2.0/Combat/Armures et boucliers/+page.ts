import type { PageLoad } from "./$types";

export const prerender = true;

export const load: PageLoad = () => ({
  pageTitle: "Armures et boucliers",
  pageDescription: "",
  fullBleed: false,
  fullHeight: false,
  headings: [
    {
      "id": "armures",
      "text": "Armures",
      "level": 2
    },
    {
      "id": "fabrication",
      "text": "Fabrication",
      "level": 3
    },
    {
      "id": "boucliers",
      "text": "Boucliers",
      "level": 2
    }
  ],
});
