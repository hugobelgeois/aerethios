import type { PageLoad } from "./$types";

export const prerender = true;

export const load: PageLoad = () => ({
  pageTitle: "Géographie 1",
  pageDescription: "",
  fullBleed: false,
});
