import type { PageLoad } from "./$types";

export const prerender = true;

export const load: PageLoad = () => ({
  pageTitle: "Armures",
  pageDescription: "",
  fullBleed: false,
  fullHeight: false,
});
