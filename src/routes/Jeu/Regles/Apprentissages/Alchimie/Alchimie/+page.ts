import type { PageLoad } from "./$types";

export const prerender = true;

export const load: PageLoad = () => ({
  pageTitle: "Alchimie",
  pageDescription: "",
  fullBleed: false,
  fullHeight: false,
  headings: [
    {
      "id": "specialisations",
      "text": "Spécialisations",
      "level": 2
    },
    {
      "id": "cuisinier",
      "text": "[[Cuisinier]]",
      "level": 3
    },
    {
      "id": "invocateur",
      "text": "[[Invocateur]]",
      "level": 3
    },
    {
      "id": "potionniste",
      "text": "[[Potionniste]]",
      "level": 3
    },
    {
      "id": "fabrication",
      "text": "Fabrication",
      "level": 2
    },
    {
      "id": "fabrication-1",
      "text": "Fabrication",
      "level": 3
    },
    {
      "id": "difficulte-par-ingredient",
      "text": "Difficulté par ingrédient",
      "level": 3
    },
    {
      "id": "difficulte-par-emplacement",
      "text": "Difficulté par emplacement",
      "level": 3
    },
    {
      "id": "prix-indicatifs-des-ingredients-pa",
      "text": "Prix indicatifs des ingrédients (pa)",
      "level": 3
    },
    {
      "id": "recolte",
      "text": "Récolte",
      "level": 2
    }
  ],
});
