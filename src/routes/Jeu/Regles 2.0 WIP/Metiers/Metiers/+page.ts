import type { PageLoad } from "./$types";

export const prerender = true;

export const load: PageLoad = () => ({
  pageTitle: "Métiers",
  pageDescription: "",
  fullBleed: false,
});
