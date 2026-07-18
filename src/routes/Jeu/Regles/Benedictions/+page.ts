import type { PageLoad } from "./$types";

export const prerender = true;

export const load: PageLoad = () => ({
  pageTitle: "Bénédictions",
  pageDescription: "",
  fullBleed: false,
});
