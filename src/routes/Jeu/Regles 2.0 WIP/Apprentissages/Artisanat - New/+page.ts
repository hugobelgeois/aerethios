import type { PageLoad } from "./$types";

export const prerender = true;

export const load: PageLoad = () => ({
  pageTitle: "Artisanat - New",
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
      "id": "artificier---wip",
      "text": "Artificier - WIP",
      "level": 3
    },
    {
      "id": "bijoutier",
      "text": "Bijoutier",
      "level": 3
    },
    {
      "id": "enchanteur",
      "text": "Enchanteur",
      "level": 3
    },
    {
      "id": "forgeron",
      "text": "Forgeron",
      "level": 3
    }
  ],
});
