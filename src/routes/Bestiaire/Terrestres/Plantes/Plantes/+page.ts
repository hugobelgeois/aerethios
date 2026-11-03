import type { PageLoad } from "./$types";

export const prerender = true;

export const load: PageLoad = () => ({
  pageTitle: "Plantes",
  pageDescription: "",
  fullBleed: false,
  fullHeight: false,
  headings: [
    {
      "id": "fixees",
      "text": "Fixées",
      "level": 1
    },
    {
      "id": "animees",
      "text": "Animées",
      "level": 1
    },
    {
      "id": "parasites",
      "text": "Parasites",
      "level": 1
    }
  ],
});
