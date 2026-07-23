import type { PageLoad } from "./$types";

export const prerender = true;

export const load: PageLoad = () => ({
  pageTitle: "Aldrich",
  pageDescription: "",
  fullBleed: false,
  fullHeight: false,
});
