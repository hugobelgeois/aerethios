import type { PageLoad } from "./$types";

export const prerender = true;

export const load: PageLoad = () => ({
  pageTitle: "Arc 3 - 13b - 03.10.25",
  pageDescription: "",
  fullBleed: false,
  fullHeight: false,
});
