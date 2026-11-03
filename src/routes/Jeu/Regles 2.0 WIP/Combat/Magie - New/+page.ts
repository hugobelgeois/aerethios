import type { PageLoad } from "./$types";

export const prerender = true;

export const load: PageLoad = () => ({
  pageTitle: "Magie - New",
  pageDescription: "",
  fullBleed: false,
  fullHeight: false,
  headings: [
    {
      "id": "crystaux",
      "text": "Crystaux",
      "level": 2
    },
    {
      "id": "base",
      "text": "Base",
      "level": 2
    },
    {
      "id": "catalyseur",
      "text": "Catalyseur",
      "level": 3
    },
    {
      "id": "dangers",
      "text": "Dangers",
      "level": 3
    },
    {
      "id": "types",
      "text": "Types",
      "level": 2
    },
    {
      "id": "apprentissage",
      "text": "Apprentissage",
      "level": 2
    }
  ],
});
