import type { PageLoad } from "./$types";

export const prerender = true;

export const load: PageLoad = () => ({
  pageTitle: "WorldMap",
  pageDescription: "",
  fullBleed: true,
  fullHeight: true,
});
