import type { PageLoad } from "./$types";

export const prerender = true;

export const load: PageLoad = () => ({
  pageTitle: "Affinités",
  pageDescription: "",
  fullBleed: false,
  fullHeight: false,
  headings: [
    {
      "id": "affinites",
      "text": "Affinités",
      "level": 3
    },
    {
      "id": "ancienne-version",
      "text": "Ancienne version",
      "level": 3
    },
    {
      "id": "categories",
      "text": "Catégories",
      "level": 2
    },
    {
      "id": "culture",
      "text": "Culture",
      "level": 3
    },
    {
      "id": "exploration",
      "text": "Exploration",
      "level": 3
    },
    {
      "id": "production",
      "text": "Production",
      "level": 3
    }
  ],
});
