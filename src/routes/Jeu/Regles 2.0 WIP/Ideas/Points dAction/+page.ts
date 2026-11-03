import type { PageLoad } from "./$types";

export const prerender = true;

export const load: PageLoad = () => ({
  pageTitle: "Points d'Action",
  pageDescription: "",
  fullBleed: false,
  fullHeight: false,
  headings: [
    {
      "id": "actions",
      "text": "Actions",
      "level": 1
    },
    {
      "id": "mouvement",
      "text": "Mouvement",
      "level": 2
    },
    {
      "id": "action",
      "text": "Action",
      "level": 2
    },
    {
      "id": "action-bonus",
      "text": "Action Bonus",
      "level": 2
    },
    {
      "id": "reaction",
      "text": "Réaction",
      "level": 2
    }
  ],
});
