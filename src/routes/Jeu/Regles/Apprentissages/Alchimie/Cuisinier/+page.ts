import type { PageLoad } from "./$types";

export const prerender = true;

export const load: PageLoad = () => ({
  pageTitle: "Cuisinier",
  pageDescription: "",
  fullBleed: false,
  fullHeight: false,
});
