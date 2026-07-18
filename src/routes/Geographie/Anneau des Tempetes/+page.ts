import type { PageLoad } from "./$types";

export const prerender = true;

export const load: PageLoad = () => ({
  pageTitle: "Anneau des Tempêtes",
  pageDescription: "",
  fullBleed: false,
});
