import type { PageLoad } from "./$types";

export const prerender = true;

export const load: PageLoad = () => ({
  pageTitle: "Magiques",
  pageDescription: "",
  fullBleed: false,
  fullHeight: false,
  headings: [
    {
      "id": "invocation",
      "text": "[[Invocation]]",
      "level": 1
    },
    {
      "id": "elementaire",
      "text": "[[Elémentaire]]",
      "level": 1
    },
    {
      "id": "mimics",
      "text": "[[Mimics]]",
      "level": 1
    },
    {
      "id": "draconide",
      "text": "[[Draconide]]",
      "level": 1
    }
  ],
});
