import type { PageLoad } from "./$types";

export const prerender = true;

export const load: PageLoad = () => ({
  pageTitle: "Armes de mêlée",
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
      "id": "types",
      "text": "Types",
      "level": 2
    },
    {
      "id": "deux-armes",
      "text": "Deux armes",
      "level": 2
    }
  ],
});
