import type { PageLoad } from "./$types";

export const prerender = true;

export const load: PageLoad = () => ({
  pageTitle: "Commerçant",
  pageDescription: "",
  fullBleed: false,
  fullHeight: false,
  headings: [
    {
      "id": "fonctionnement",
      "text": "Fonctionnement",
      "level": 2
    },
    {
      "id": "reseau",
      "text": "Réseau",
      "level": 2
    },
    {
      "id": "reputation",
      "text": "Réputation",
      "level": 2
    },
    {
      "id": "depenses-supplementaires",
      "text": "Dépenses supplémentaires",
      "level": 2
    },
    {
      "id": "taxes",
      "text": "Taxes",
      "level": 3
    },
    {
      "id": "main-dœuvre",
      "text": "Main-d'œuvre",
      "level": 3
    },
    {
      "id": "paiements-reguliers",
      "text": "Paiements réguliers",
      "level": 3
    },
    {
      "id": "autres",
      "text": "Autres",
      "level": 3
    },
    {
      "id": "transports",
      "text": "Transports",
      "level": 3
    }
  ],
});
