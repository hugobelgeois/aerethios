import type { PageLoad } from "./$types";

export const prerender = true;

export const load: PageLoad = () => ({
  pageTitle: "Radeon, Dieu Dormant",
  pageDescription: "",
  fullBleed: false,
  fullHeight: false,
});
