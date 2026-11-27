import type { PageLoad } from "./$types";

export const prerender = true;

export const load: PageLoad = () => ({
  pageTitle: "Maniements et styles",
  pageDescription: "",
  fullBleed: false,
  fullHeight: false,
  headings: [
    {
      "id": "regles",
      "text": "Règles",
      "level": 2
    },
    {
      "id": "maniements",
      "text": "Maniements",
      "level": 2
    },
    {
      "id": "armes",
      "text": "Armes",
      "level": 3
    },
    {
      "id": "magie",
      "text": "Magie",
      "level": 3
    },
    {
      "id": "prix-dun-style",
      "text": "Prix d'un style",
      "level": 2
    },
    {
      "id": "styles-generaux",
      "text": "Styles généraux",
      "level": 2
    },
    {
      "id": "styles-specifiques",
      "text": "Styles spécifiques",
      "level": 2
    }
  ],
});
