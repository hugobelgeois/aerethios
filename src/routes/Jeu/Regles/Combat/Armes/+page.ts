import type { PageLoad } from "./$types";

export const prerender = true;

export const load: PageLoad = () => ({
  pageTitle: "Armes",
  pageDescription: "",
  fullBleed: false,
  fullHeight: false,
  headings: [
    {
      "id": "degats",
      "text": "Dégâts",
      "level": 2
    },
    {
      "id": "armes",
      "text": "Armes",
      "level": 3
    },
    {
      "id": "modifications",
      "text": "Modifications",
      "level": 3
    },
    {
      "id": "enchantements",
      "text": "Enchantements",
      "level": 3
    },
    {
      "id": "specificites",
      "text": "Spécificités",
      "level": 3
    },
    {
      "id": "materiaux",
      "text": "Matériaux",
      "level": 2
    },
    {
      "id": "principaux",
      "text": "Principaux",
      "level": 3
    },
    {
      "id": "revetements",
      "text": "Revêtements",
      "level": 4
    },
    {
      "id": "munitions",
      "text": "Munitions",
      "level": 3
    }
  ],
});
