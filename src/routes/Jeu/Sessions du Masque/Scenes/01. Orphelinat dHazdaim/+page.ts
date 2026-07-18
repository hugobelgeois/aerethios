import type { PageLoad } from "./$types";

export const prerender = true;

export const load: PageLoad = () => ({
  pageTitle: "01. Orphelinat d'Hazdaim",
  pageDescription: "",
  fullBleed: false,
});
