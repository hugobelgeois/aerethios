import type { PageLoad } from "./$types";

export const prerender = true;

export const load: PageLoad = () => ({
  pageTitle: "Arc 3",
  pageDescription: "",
  fullBleed: false,
  fullHeight: false,
});
