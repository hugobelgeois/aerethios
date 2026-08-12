import type { PageLoad } from "./$types";

export const prerender = true;

export const load: PageLoad = () => ({
  pageTitle: "Affinités aux Dégâts",
  pageDescription: "",
  fullBleed: false,
  fullHeight: false,
});
