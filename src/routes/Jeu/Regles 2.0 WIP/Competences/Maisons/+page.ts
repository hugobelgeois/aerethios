import type { PageLoad } from "./$types";

export const prerender = true;

export const load: PageLoad = () => ({
  pageTitle: "Maisons",
  pageDescription: "",
  fullBleed: false,
  fullHeight: false,
  headings: [
    {
      "id": "arvens",
      "text": "Arvens",
      "level": 2
    },
    {
      "id": "runild---wip",
      "text": "Runild - WIP",
      "level": 2
    },
    {
      "id": "scienctes---wip",
      "text": "Scienctes - WIP",
      "level": 2
    },
    {
      "id": "templis---wip",
      "text": "Templis - WIP",
      "level": 2
    }
  ],
});
