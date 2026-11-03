import type { PageLoad } from "./$types";

export const prerender = true;

export const load: PageLoad = () => ({
  pageTitle: "Propriétés",
  pageDescription: "",
  fullBleed: false,
  fullHeight: false,
  headings: [
    {
      "id": "delicat",
      "text": "Délicat",
      "level": 2
    },
    {
      "id": "parade",
      "text": "Parade",
      "level": 2
    },
    {
      "id": "finesse",
      "text": "Finesse",
      "level": 2
    },
    {
      "id": "versatile",
      "text": "Versatile",
      "level": 2
    },
    {
      "id": "leger",
      "text": "Léger",
      "level": 2
    },
    {
      "id": "jetable",
      "text": "Jetable",
      "level": 2
    },
    {
      "id": "preparation",
      "text": "Préparation",
      "level": 2
    },
    {
      "id": "lent",
      "text": "Lent",
      "level": 2
    },
    {
      "id": "laceration",
      "text": "Lacération",
      "level": 2
    },
    {
      "id": "critique",
      "text": "Critique",
      "level": 2
    },
    {
      "id": "double",
      "text": "Double",
      "level": 2
    },
    {
      "id": "charge",
      "text": "Charge",
      "level": 2
    },
    {
      "id": "portee",
      "text": "Portée",
      "level": 2
    },
    {
      "id": "instable",
      "text": "Instable",
      "level": 2
    }
  ],
});
