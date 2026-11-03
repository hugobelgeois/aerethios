import type { PageLoad } from "./$types";

export const prerender = true;

export const load: PageLoad = () => ({
  pageTitle: "Enchanteur",
  pageDescription: "",
  fullBleed: false,
  fullHeight: false,
  headings: [
    {
      "id": "apprentissage",
      "text": "Apprentissage",
      "level": 2
    },
    {
      "id": "composants",
      "text": "Composants",
      "level": 2
    },
    {
      "id": "prix-du-marche-pour-enchanter-po",
      "text": "Prix du marché pour enchanter (po)",
      "level": 2
    },
    {
      "id": "kothula-wip",
      "text": "[[Kothula]] (WIP)",
      "level": 2
    },
    {
      "id": "nirina",
      "text": "[[Nirina]]",
      "level": 2
    },
    {
      "id": "ovliin",
      "text": "[[Ovliin]]",
      "level": 2
    },
    {
      "id": "arme",
      "text": "Arme",
      "level": 3
    },
    {
      "id": "armure",
      "text": "Armure",
      "level": 3
    },
    {
      "id": "suraja",
      "text": "[[Suraja]]",
      "level": 2
    },
    {
      "id": "ajouter",
      "text": "Ajouter",
      "level": 3
    },
    {
      "id": "ameliorer",
      "text": "Améliorer",
      "level": 3
    }
  ],
});
