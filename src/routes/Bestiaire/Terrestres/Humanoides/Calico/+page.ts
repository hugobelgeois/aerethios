import type { PageLoad } from "./$types";

export const prerender = true;

export const load: PageLoad = () => ({
  pageTitle: "Calico",
  pageDescription: "",
  fullBleed: false,
  fullHeight: false,
  headings: [
    {
      "id": "lore",
      "text": "Lore",
      "level": 1
    },
    {
      "id": "apparence",
      "text": "Apparence",
      "level": 2
    },
    {
      "id": "societe",
      "text": "Société",
      "level": 2
    },
    {
      "id": "calicos-civilises",
      "text": "Calicos civilisés",
      "level": 3
    },
    {
      "id": "calicos-sauvages",
      "text": "Calicos sauvages",
      "level": 3
    },
    {
      "id": "culture",
      "text": "Culture",
      "level": 2
    },
    {
      "id": "particularites",
      "text": "Particularités",
      "level": 2
    }
  ],
});
