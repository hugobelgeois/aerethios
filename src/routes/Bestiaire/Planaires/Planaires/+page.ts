import type { PageLoad } from "./$types";

export const prerender = true;

export const load: PageLoad = () => ({
  pageTitle: "Planaires",
  pageDescription: "",
  fullBleed: false,
  fullHeight: false,
  headings: [
    {
      "id": "vampires",
      "text": "[[Vampires]]",
      "level": 1
    },
    {
      "id": "gobelins",
      "text": "[[Gobelins]]",
      "level": 1
    },
    {
      "id": "esprits",
      "text": "[[Esprits]]",
      "level": 1
    },
    {
      "id": "spectres",
      "text": "[[Spectres]]",
      "level": 1
    },
    {
      "id": "dieux",
      "text": "[[Dieux]]",
      "level": 1
    },
    {
      "id": "possedes",
      "text": "[[Possédés]]",
      "level": 1
    },
    {
      "id": "ressuscites",
      "text": "[[Ressuscités]]",
      "level": 1
    },
    {
      "id": "liches",
      "text": "[[Liches]]",
      "level": 1
    },
    {
      "id": "vampires-1",
      "text": "[[Vampires]]",
      "level": 1
    }
  ],
});
