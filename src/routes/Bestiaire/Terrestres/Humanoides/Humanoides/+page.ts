import type { PageLoad } from "./$types";

export const prerender = true;

export const load: PageLoad = () => ({
  pageTitle: "Humanoïdes",
  pageDescription: "",
  fullBleed: false,
  fullHeight: false,
  headings: [
    {
      "id": "humain",
      "text": "[[Humain]]",
      "level": 2
    },
    {
      "id": "nain",
      "text": "[[Nain]]",
      "level": 2
    },
    {
      "id": "elfe",
      "text": "[[Elfe]]",
      "level": 2
    },
    {
      "id": "orc",
      "text": "[[Orc]]",
      "level": 2
    },
    {
      "id": "calico",
      "text": "[[Calico]]",
      "level": 2
    }
  ],
});
