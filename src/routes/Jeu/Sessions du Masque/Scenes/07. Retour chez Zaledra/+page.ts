import type { PageLoad } from "./$types";

export const prerender = true;

export const load: PageLoad = () => ({
  pageTitle: "07. Retour chez Zaledra",
  pageDescription: "",
  fullBleed: false,
  fullHeight: false,
});
