import type { PageLoad } from "./$types";

export const prerender = true;

export const load: PageLoad = () => ({
  pageTitle: "Points d'Action",
  pageDescription: "",
  fullBleed: false,
  fullHeight: false,
});
