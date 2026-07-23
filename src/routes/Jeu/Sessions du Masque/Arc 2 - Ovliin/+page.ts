import type { PageLoad } from "./$types";

export const prerender = true;

export const load: PageLoad = () => ({
  pageTitle: "Arc 2 - Ovliin",
  pageDescription: "",
  fullBleed: false,
  fullHeight: false,
});
