import type { PageLoad } from "./$types";

export const prerender = true;

export const load: PageLoad = () => ({
  pageTitle: "Armes à distances - New",
  pageDescription: "",
  fullBleed: false,
  fullHeight: false,
});
