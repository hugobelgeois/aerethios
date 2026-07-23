import type { PageLoad } from "./$types";

export const prerender = true;

export const load: PageLoad = () => ({
  pageTitle: "Calico",
  pageDescription: "",
  fullBleed: false,
  fullHeight: false,
});
