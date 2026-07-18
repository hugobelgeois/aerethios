import type { PageLoad } from "./$types";

export const prerender = true;

export const load: PageLoad = () => ({
  pageTitle: "Kira, Dieu Pourpre",
  pageDescription: "",
  fullBleed: false,
});
