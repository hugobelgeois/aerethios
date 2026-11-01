import type { PageLoad } from "./$types";

export const prerender = true;

export const load: PageLoad = () => ({
  pageTitle: "06.",
  pageDescription: "",
  fullBleed: false,
  fullHeight: false,
});
