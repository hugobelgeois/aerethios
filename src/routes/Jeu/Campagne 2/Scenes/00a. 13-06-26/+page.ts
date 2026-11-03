import type { PageLoad } from "./$types";

export const prerender = true;

export const load: PageLoad = () => ({
  pageTitle: "00a. 13-06-26",
  pageDescription: "",
  fullBleed: false,
  fullHeight: false,
  headings: [
    {
      "id": "regles-hrp",
      "text": "Règles HRP",
      "level": 2
    },
    {
      "id": "points-dinspiration---relancer-un-de-de-son-choix",
      "text": "Points d'inspiration -> Relancer un dé de son choix",
      "level": 2
    },
    {
      "id": "preparation-du-monde",
      "text": "Préparation du monde",
      "level": 2
    }
  ],
});
