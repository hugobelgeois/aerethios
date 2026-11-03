import type { PageLoad } from "./$types";

export const prerender = true;

export const load: PageLoad = () => ({
  pageTitle: "Cuisinier",
  pageDescription: "",
  fullBleed: false,
  fullHeight: false,
  headings: [
    {
      "id": "materiel",
      "text": "Matériel",
      "level": 2
    },
    {
      "id": "resultat-de-fabrication",
      "text": "Résultat de Fabrication",
      "level": 2
    },
    {
      "id": "ingredients",
      "text": "Ingrédients",
      "level": 2
    },
    {
      "id": "viandes--bonus-physiques",
      "text": "**Viandes** — bonus physiques",
      "level": 3
    },
    {
      "id": "accompagnements--bonus-magiques",
      "text": "**Accompagnements** — bonus magiques",
      "level": 3
    },
    {
      "id": "touche-du-chef",
      "text": "Touche du Chef",
      "level": 2
    }
  ],
});
