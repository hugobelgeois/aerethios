import type { PageLoad } from "./$types";

export const prerender = true;

export const load: PageLoad = () => ({
  pageTitle: "Alcoolique",
  pageDescription: "",
  fullBleed: false,
  fullHeight: false,
  headings: [
    {
      "id": "fonctionnement",
      "text": "Fonctionnement",
      "level": 2
    },
    {
      "id": "boissons",
      "text": "Boissons",
      "level": 2
    }
  ],
});
