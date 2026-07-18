import type { PageLoad } from "./$types";

export const prerender = true;

export const load: PageLoad = () => ({
  pageTitle: "Obel, Dieu Affamé",
  pageDescription: "",
  fullBleed: false,
});
