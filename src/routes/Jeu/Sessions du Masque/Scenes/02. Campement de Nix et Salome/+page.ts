import type { PageLoad } from "./$types";

export const prerender = true;

export const load: PageLoad = () => ({
  pageTitle: "02. Campement de Nix et Salomé",
  pageDescription: "",
  fullBleed: false,
  fullHeight: false,
  headings: [
    {
      "id": "description",
      "text": "Description",
      "level": 2
    },
    {
      "id": "details",
      "text": "Détails",
      "level": 2
    },
    {
      "id": "maps",
      "text": "Maps",
      "level": 3
    },
    {
      "id": "rencontres",
      "text": "Rencontres",
      "level": 3
    },
    {
      "id": "intrigues",
      "text": "Intrigues",
      "level": 2
    },
    {
      "id": "lepreuve-des-enfants",
      "text": "L'épreuve des Enfants",
      "level": 3
    },
    {
      "id": "la-gemme-maudite",
      "text": "La Gemme Maudite",
      "level": 3
    },
    {
      "id": "les-murmures-sous-les-racines",
      "text": "Les Murmures Sous les Racines",
      "level": 3
    },
    {
      "id": "actions-des-joueurs",
      "text": "Actions des joueurs",
      "level": 2
    }
  ],
});
