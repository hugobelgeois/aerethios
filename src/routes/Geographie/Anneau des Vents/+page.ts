import type { PageLoad } from "./$types";

export const prerender = true;

export const load: PageLoad = () => ({
  pageTitle: "Anneau des Vents",
  pageDescription: "",
  fullBleed: false,
  fullHeight: false,
});
