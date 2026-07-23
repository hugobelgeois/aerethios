import type { PageLoad } from "./$types";

export const prerender = true;

export const load: PageLoad = () => ({
  pageTitle: "Stats joueurs",
  pageDescription: "",
  fullBleed: false,
  fullHeight: false,
});
