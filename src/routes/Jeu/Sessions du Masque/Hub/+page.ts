import type { PageLoad } from "./$types";

export const prerender = true;

export const load: PageLoad = () => ({
  pageTitle: "Hub",
  pageDescription: "",
  fullBleed: false,
  fullHeight: false,
  headings: [],
});
