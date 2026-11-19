import type { PageLoad } from "./$types";

export const prerender = true;

export const load: PageLoad = () => ({
  pageTitle: "02. Campement de Nix et Salomé",
  pageDescription: "",
  fullBleed: false,
  fullHeight: false,
  headings: [
    {
      "id": "description",
      "text": "Description",
      "level": 2
    },
    {
      "id": "actions-des-joueurs",
      "text": "Actions des joueurs",
      "level": 2
    }
  ],
});
