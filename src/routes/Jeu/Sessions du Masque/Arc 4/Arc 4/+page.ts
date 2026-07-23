import type { PageLoad } from "./$types";

export const prerender = true;

export const load: PageLoad = () => ({
  pageTitle: "Arc 4",
  pageDescription: "",
  fullBleed: false,
  fullHeight: false,
});
