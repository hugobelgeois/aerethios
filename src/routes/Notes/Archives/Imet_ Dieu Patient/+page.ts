import type { PageLoad } from "./$types";

export const prerender = true;

export const load: PageLoad = () => ({
  pageTitle: "Imet, Dieu Patient",
  pageDescription: "",
  fullBleed: false,
});
