import type { PageLoad } from "./$types";

export const prerender = true;

export const load: PageLoad = () => ({
  pageTitle: "03. Ville du chef",
  pageDescription: "",
  fullBleed: false,
  fullHeight: false,
});
