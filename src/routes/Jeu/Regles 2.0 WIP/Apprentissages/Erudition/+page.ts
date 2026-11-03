import type { PageLoad } from "./$types";

export const prerender = true;

export const load: PageLoad = () => ({
  pageTitle: "Érudition",
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
      "id": "enchanteur",
      "text": "Enchanteur",
      "level": 3
    },
    {
      "id": "invocateur",
      "text": "Invocateur",
      "level": 3
    },
    {
      "id": "joaillier",
      "text": "Joaillier",
      "level": 3
    },
    {
      "id": "runniste---wip",
      "text": "Runniste - WIP",
      "level": 3
    }
  ],
});
