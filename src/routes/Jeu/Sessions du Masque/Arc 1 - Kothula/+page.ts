import type { PageLoad } from "./$types";

export const prerender = true;

export const load: PageLoad = () => ({
  pageTitle: "Arc 1 - Kothula",
  pageDescription: "",
  fullBleed: false,
  fullHeight: false,
  headings: [
    {
      "id": "240125",
      "text": "$$24.01.25$$",
      "level": 6
    },
    {
      "id": "070225",
      "text": "$$07.02.25$$",
      "level": 6
    },
    {
      "id": "210225",
      "text": "$$21.02.25$$",
      "level": 6
    },
    {
      "id": "140325",
      "text": "$$14.03.25$$",
      "level": 6
    },
    {
      "id": "280325",
      "text": "$$28.03.25$$",
      "level": 6
    },
    {
      "id": "110425",
      "text": "$$11.04.25$$",
      "level": 6
    }
  ],
});
