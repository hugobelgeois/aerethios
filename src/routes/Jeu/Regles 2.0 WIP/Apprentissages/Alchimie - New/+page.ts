import type { PageLoad } from "./$types";

export const prerender = true;

export const load: PageLoad = () => ({
  pageTitle: "Alchimie - New",
  pageDescription: "",
  fullBleed: false,
  fullHeight: false,
  headings: [
    {
      "id": "rappel",
      "text": "Rappel",
      "level": 3
    },
    {
      "id": "specialisations",
      "text": "Spécialisations",
      "level": 2
    },
    {
      "id": "bijoutier",
      "text": "Bijoutier",
      "level": 3
    },
    {
      "id": "cuisinier",
      "text": "Cuisinier",
      "level": 3
    },
    {
      "id": "invocateur",
      "text": "Invocateur",
      "level": 3
    },
    {
      "id": "potionniste",
      "text": "Potionniste",
      "level": 3
    },
    {
      "id": "potions",
      "text": "Potions",
      "level": 4
    },
    {
      "id": "huiles",
      "text": "Huiles",
      "level": 4
    }
  ],
});
