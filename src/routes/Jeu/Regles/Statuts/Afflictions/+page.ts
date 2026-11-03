import type { PageLoad } from "./$types";

export const prerender = true;

export const load: PageLoad = () => ({
  pageTitle: "Afflictions",
  pageDescription: "",
  fullBleed: false,
  fullHeight: false,
  headings: [
    {
      "id": "saignement",
      "text": "Saignement",
      "level": 2
    },
    {
      "id": "poison",
      "text": "Poison",
      "level": 2
    },
    {
      "id": "surcharge",
      "text": "Surcharge",
      "level": 2
    }
  ],
});
