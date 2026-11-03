import type { PageLoad } from "./$types";

export const prerender = true;

export const load: PageLoad = () => ({
  pageTitle: "04. Ville du Dragon",
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
      "id": "details",
      "text": "Détails",
      "level": 2
    },
    {
      "id": "musiques",
      "text": "Musiques",
      "level": 3
    },
    {
      "id": "rencontres",
      "text": "Rencontres",
      "level": 3
    },
    {
      "id": "intrigues",
      "text": "Intrigues",
      "level": 2
    },
    {
      "id": "actions-des-joueurs",
      "text": "Actions des joueurs",
      "level": 2
    },
    {
      "id": "01-11-2026",
      "text": "**01-11-2026**",
      "level": 2
    }
  ],
});
