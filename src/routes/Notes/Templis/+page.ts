import type { PageLoad } from "./$types";

export const prerender = true;

export const load: PageLoad = () => ({
  pageTitle: "Templis",
  pageDescription: "",
  fullBleed: false,
});
