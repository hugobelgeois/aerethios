import type { PageLoad } from "./$types";

export const prerender = true;

export const load: PageLoad = () => ({
  pageTitle: "Chasseur de prime",
  pageDescription: "",
  fullBleed: false,
});
