import type { PageLoad } from "./$types";

export const prerender = true;

export const load: PageLoad = () => ({
  pageTitle: "05. Troupes d'Havel",
  pageDescription: "",
  fullBleed: false,
  fullHeight: false,
});
