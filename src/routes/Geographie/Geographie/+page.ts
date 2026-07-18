import type { PageLoad } from "./$types";

export const prerender = true;

export const load: PageLoad = () => ({
  pageTitle: "Géographie",
  pageDescription: "",
  fullBleed: false,
});
