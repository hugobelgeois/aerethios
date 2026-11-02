import type { PageLoad } from "./$types";

export const prerender = true;

export const load: PageLoad = () => ({
  pageTitle: "statblock",
  pageDescription: "",
  fullBleed: false,
  fullHeight: false,
});
