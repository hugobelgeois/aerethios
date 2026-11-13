import type { PageLoad } from "./$types";

export const prerender = true;

export const load: PageLoad = () => ({
  pageTitle: "Elementaire I",
  pageDescription: "",
  fullBleed: false,
  fullHeight: false,
  headings: [],
});
