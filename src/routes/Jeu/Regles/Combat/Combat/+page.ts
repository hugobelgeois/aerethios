import type { PageLoad } from "./$types";

export const prerender = true;

export const load: PageLoad = () => ({
  pageTitle: "Combat",
  pageDescription: "",
  fullBleed: false,
  fullHeight: false,
});
