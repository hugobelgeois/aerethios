import type { PageLoad } from "./$types";

export const prerender = true;

export const load: PageLoad = () => ({
  pageTitle: "Dara",
  pageDescription: "",
  fullBleed: false,
  fullHeight: false,
});
