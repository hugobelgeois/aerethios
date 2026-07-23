import type { PageLoad } from "./$types";

export const prerender = true;

export const load: PageLoad = () => ({
  pageTitle: "Arek",
  pageDescription: "",
  fullBleed: false,
  fullHeight: false,
});
