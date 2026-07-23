import type { PageLoad } from "./$types";

export const prerender = true;

export const load: PageLoad = () => ({
  pageTitle: "Arc 1 - Kothula",
  pageDescription: "",
  fullBleed: false,
  fullHeight: false,
});
