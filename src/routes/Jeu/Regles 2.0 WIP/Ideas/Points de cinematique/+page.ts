import type { PageLoad } from "./$types";

export const prerender = true;

export const load: PageLoad = () => ({
  pageTitle: "Points de cinématique",
  pageDescription: "",
  fullBleed: false,
  fullHeight: false,
  headings: [],
});
