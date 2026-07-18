import type { PageLoad } from "./$types";

export const prerender = true;

export const load: PageLoad = () => ({
  pageTitle: "Exploration",
  pageDescription: "",
  fullBleed: false,
});
