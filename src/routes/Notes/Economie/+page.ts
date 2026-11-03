import type { PageLoad } from "./$types";

export const prerender = true;

export const load: PageLoad = () => ({
  pageTitle: "Economie",
  pageDescription: "",
  fullBleed: false,
  fullHeight: false,
  headings: [
    {
      "id": "cuivre",
      "text": "Cuivre",
      "level": 2
    },
    {
      "id": "argent",
      "text": "Argent",
      "level": 2
    },
    {
      "id": "or",
      "text": "Or",
      "level": 2
    }
  ],
});
