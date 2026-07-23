import type { PageLoad } from "./$types";

export const prerender = true;

export const load: PageLoad = () => ({
  pageTitle: "Naga",
  pageDescription: "",
  fullBleed: false,
  fullHeight: false,
});
