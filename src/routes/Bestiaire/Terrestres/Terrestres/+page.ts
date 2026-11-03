import type { PageLoad } from "./$types";

export const prerender = true;

export const load: PageLoad = () => ({
  pageTitle: "Terrestres",
  pageDescription: "",
  fullBleed: false,
  fullHeight: false,
  headings: [
    {
      "id": "humanoides",
      "text": "[[Humanoïdes]]",
      "level": 1
    },
    {
      "id": "hybrides",
      "text": "[[Hybrides]]",
      "level": 1
    },
    {
      "id": "magiques",
      "text": "[[Magiques]]",
      "level": 1
    },
    {
      "id": "mythiques",
      "text": "[[Mythiques]]",
      "level": 1
    },
    {
      "id": "naturels",
      "text": "[[Naturels]]",
      "level": 1
    },
    {
      "id": "plantes",
      "text": "[[Plantes]]",
      "level": 1
    }
  ],
});
