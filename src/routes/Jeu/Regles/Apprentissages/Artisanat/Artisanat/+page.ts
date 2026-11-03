import type { PageLoad } from "./$types";

export const prerender = true;

export const load: PageLoad = () => ({
  pageTitle: "Artisanat",
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
      "id": "artificier",
      "text": "[[Artificier]]",
      "level": 3
    },
    {
      "id": "bijoutier",
      "text": "[[Bijoutier]]",
      "level": 3
    },
    {
      "id": "enchanteur",
      "text": "[[Enchanteur]]",
      "level": 3
    },
    {
      "id": "forgeron",
      "text": "[[Forgeron]]",
      "level": 3
    },
    {
      "id": "tanneur",
      "text": "[[Tanneur]]",
      "level": 3
    },
    {
      "id": "fabrication",
      "text": "Fabrication",
      "level": 2
    },
    {
      "id": "raffinage",
      "text": "Raffinage",
      "level": 3
    },
    {
      "id": "fabrication-1",
      "text": "Fabrication",
      "level": 3
    },
    {
      "id": "prix-indicatifs-pa",
      "text": "Prix indicatifs (pa)",
      "level": 3
    },
    {
      "id": "recolte",
      "text": "Récolte",
      "level": 2
    }
  ],
});
