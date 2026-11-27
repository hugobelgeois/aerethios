import type { PageLoad } from "./$types";

export const prerender = true;

export const load: PageLoad = () => ({
  pageTitle: "Préparation de l'équipement",
  pageDescription: "",
  fullBleed: false,
  fullHeight: false,
  headings: [
    {
      "id": "gemmes",
      "text": "Gemmes",
      "level": 2
    },
    {
      "id": "armes-a-distance",
      "text": "Armes à distance",
      "level": 3
    },
    {
      "id": "infusion-de-magie",
      "text": "Infusion de magie",
      "level": 3
    },
    {
      "id": "materiaux-darme",
      "text": "Matériaux d'arme",
      "level": 2
    },
    {
      "id": "huiles",
      "text": "Huiles",
      "level": 2
    },
    {
      "id": "enchantements",
      "text": "Enchantements",
      "level": 2
    },
    {
      "id": "enchantements-simples-a-utiliser",
      "text": "Enchantements simples à utiliser",
      "level": 3
    },
    {
      "id": "enchantements-a-motif-de-des",
      "text": "Enchantements à motif de dés",
      "level": 3
    }
  ],
});
