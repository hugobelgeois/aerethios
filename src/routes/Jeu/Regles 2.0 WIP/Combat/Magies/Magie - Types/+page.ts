import type { PageLoad } from "./$types";

export const prerender = true;

export const load: PageLoad = () => ({
  pageTitle: "Magie - Types",
  pageDescription: "",
  fullBleed: false,
  fullHeight: false,
});
