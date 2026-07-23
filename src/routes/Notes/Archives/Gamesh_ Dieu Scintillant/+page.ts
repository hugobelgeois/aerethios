import type { PageLoad } from "./$types";

export const prerender = true;

export const load: PageLoad = () => ({
  pageTitle: "Gamesh, Dieu Scintillant",
  pageDescription: "",
  fullBleed: false,
  fullHeight: false,
});
