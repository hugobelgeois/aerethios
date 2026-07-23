import type { PageLoad } from "./$types";

export const prerender = true;

export const load: PageLoad = () => ({
  pageTitle: "Anneau de Feu",
  pageDescription: "",
  fullBleed: false,
  fullHeight: false,
});
