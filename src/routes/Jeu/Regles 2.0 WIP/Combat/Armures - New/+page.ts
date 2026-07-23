import type { PageLoad } from "./$types";

export const prerender = true;

export const load: PageLoad = () => ({
  pageTitle: "Armures - New",
  pageDescription: "",
  fullBleed: false,
  fullHeight: false,
});
