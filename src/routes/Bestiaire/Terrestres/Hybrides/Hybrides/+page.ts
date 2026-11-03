import type { PageLoad } from "./$types";

export const prerender = true;

export const load: PageLoad = () => ({
  pageTitle: "Hybrides",
  pageDescription: "",
  fullBleed: false,
  fullHeight: false,
  headings: [
    {
      "id": "mutations--maladies",
      "text": "[[Mutations]] / Maladies",
      "level": 1
    },
    {
      "id": "evolutifs",
      "text": "[[Evolutifs]]",
      "level": 1
    },
    {
      "id": "symbiotiques",
      "text": "[[Symbiotiques]]",
      "level": 1
    },
    {
      "id": "hommes-betes",
      "text": "[[Hommes-bêtes]]",
      "level": 1
    },
    {
      "id": "chimeres",
      "text": "[[Chimères]]",
      "level": 1
    }
  ],
});
