import type { PageLoad } from "./$types";

export const prerender = true;

export const load: PageLoad = () => ({
  pageTitle: "Magie",
  pageDescription: "",
  fullBleed: false,
  fullHeight: false,
  headings: [
    {
      "id": "combat",
      "text": "Combat",
      "level": 2
    },
    {
      "id": "v2",
      "text": "v2",
      "level": 3
    },
    {
      "id": "utilitaire",
      "text": "Utilitaire",
      "level": 2
    },
    {
      "id": "toiles-celestes",
      "text": "Toiles Célestes",
      "level": 2
    }
  ],
});
