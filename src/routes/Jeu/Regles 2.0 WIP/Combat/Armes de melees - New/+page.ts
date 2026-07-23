import type { PageLoad } from "./$types";

export const prerender = true;

export const load: PageLoad = () => ({
  pageTitle: "Armes de mêlées - New",
  pageDescription: "",
  fullBleed: false,
  fullHeight: false,
});
