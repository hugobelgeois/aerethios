import type { PageLoad } from "./$types";

export const prerender = true;

export const load: PageLoad = () => ({
  pageTitle: "Combat",
  pageDescription: "",
  fullBleed: false,
  fullHeight: false,
  headings: [
    {
      "id": "hit-points-hp",
      "text": "Hit Points (HP)",
      "level": 2
    },
    {
      "id": "actions",
      "text": "Actions",
      "level": 2
    },
    {
      "id": "motiver",
      "text": "Motiver",
      "level": 3
    },
    {
      "id": "attaquer",
      "text": "Attaquer",
      "level": 3
    },
    {
      "id": "se-concentrer",
      "text": "Se concentrer",
      "level": 3
    }
  ],
});
