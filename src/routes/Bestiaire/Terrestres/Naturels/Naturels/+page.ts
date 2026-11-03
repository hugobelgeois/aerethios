import type { PageLoad } from "./$types";

export const prerender = true;

export const load: PageLoad = () => ({
  pageTitle: "Naturels",
  pageDescription: "",
  fullBleed: false,
  fullHeight: false,
  headings: [
    {
      "id": "bete",
      "text": "[[Bête]]",
      "level": 1
    },
    {
      "id": "insectoide",
      "text": "[[Insectoïde]]",
      "level": 1
    },
    {
      "id": "necrophages",
      "text": "[[Nécrophages]]",
      "level": 1
    }
  ],
});
