import type { PageLoad } from "./$types";

export const prerender = true;

export const load: PageLoad = () => ({
  pageTitle: "Enchantements de Mêlées",
  pageDescription: "",
  fullBleed: false,
  fullHeight: false,
});
