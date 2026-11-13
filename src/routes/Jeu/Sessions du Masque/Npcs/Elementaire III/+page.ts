import type { PageLoad } from "./$types";

export const prerender = true;

export const load: PageLoad = () => ({
  pageTitle: "Elementaire III",
  pageDescription: "",
  fullBleed: false,
  fullHeight: false,
  headings: [],
});
