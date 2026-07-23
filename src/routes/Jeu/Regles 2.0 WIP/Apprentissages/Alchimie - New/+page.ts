import type { PageLoad } from "./$types";

export const prerender = true;

export const load: PageLoad = () => ({
  pageTitle: "Alchimie - New",
  pageDescription: "",
  fullBleed: false,
  fullHeight: false,
});
