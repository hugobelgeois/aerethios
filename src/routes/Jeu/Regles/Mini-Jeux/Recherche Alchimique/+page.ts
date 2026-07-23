import type { PageLoad } from "./$types";

export const prerender = true;

export const load: PageLoad = () => ({
  pageTitle: "Recherche Alchimique",
  pageDescription: "",
  fullBleed: false,
  fullHeight: false,
});
