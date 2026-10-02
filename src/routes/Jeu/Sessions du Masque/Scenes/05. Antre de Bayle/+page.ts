import type { PageLoad } from "./$types";

export const prerender = true;

export const load: PageLoad = () => ({
  pageTitle: "05. Antre de Bayle",
  pageDescription: "",
  fullBleed: false,
  fullHeight: false,
});
