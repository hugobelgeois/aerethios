import type { PageLoad } from "./$types";

export const prerender = true;

export const load: PageLoad = () => ({
  pageTitle: "Arc 2 - Ovliin",
  pageDescription: "",
  fullBleed: false,
  fullHeight: false,
  headings: [
    {
      "id": "270425",
      "text": "$$27.04.25$$",
      "level": 6
    },
    {
      "id": "180525",
      "text": "$$18.05.25$$",
      "level": 6
    },
    {
      "id": "210525",
      "text": "$$21.05.25$$",
      "level": 6
    },
    {
      "id": "300525",
      "text": "$$30.05.25$$",
      "level": 6
    },
    {
      "id": "130625",
      "text": "$$13.06.25$$",
      "level": 6
    },
    {
      "id": "270625",
      "text": "$$27.06.25$$",
      "level": 6
    }
  ],
});
