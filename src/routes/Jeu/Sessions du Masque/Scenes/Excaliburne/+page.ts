import type { PageLoad } from "./$types";

export const prerender = true;

export const load: PageLoad = () => ({
  pageTitle: "Excaliburne",
  pageDescription: "",
  fullBleed: false,
  fullHeight: false,
  headings: [],
});
