export const prerender = true;

// Resolved before any component renders, so Body.svelte and
// +layout.svelte can size/lay out the page correctly on the very
// first (server-rendered) paint — unlike a store a child component
// would set too late. isGraphPage (distinct from fullBleed, which a
// full-width note also sets) is what tells +layout.svelte to hide
// the right sidebar's own redundant mini-graph on this route.
export const load = () => ({ fullBleed: true, isGraphPage: true });
