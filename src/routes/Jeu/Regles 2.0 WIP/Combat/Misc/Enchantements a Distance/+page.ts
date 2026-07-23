import type { PageLoad } from "./$types";

export const prerender = true;

export const load: PageLoad = () => ({
  pageTitle: "Enchantements à Distance",
  pageDescription: "",
  fullBleed: false,
  fullHeight: false,
});
