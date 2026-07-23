import adapter from '@sveltejs/adapter-static';
import { sveltekit } from '@sveltejs/kit/vite';
import { defineConfig } from 'vite';

export default defineConfig({
	plugins: [
		sveltekit({
			compilerOptions: {
				// Force runes mode for the project, except for libraries. Can be removed in svelte 6.
				runes: ({ filename }) =>
					filename.split(/[/\\]/).includes('node_modules') ? undefined : true
			},

			// adapter-auto only supports some environments, see https://svelte.dev/docs/kit/adapter-auto for a list.
			// If your environment is not supported, or you settled on a specific environment, switch out the adapter.
			// See https://svelte.dev/docs/kit/adapters for more information about adapters.
			adapter: adapter({ fallback: '404.html' }),

			// GitHub project pages are served from https://<user>.github.io/<repo>/ —
			// BASE_PATH is set by .github/workflows/deploy.yml at build time so the
			// site resolves correctly under that subpath without hardcoding the repo
			// name here (empty locally, so `npm run dev`/`preview` still work at "/").
			// relative: false keeps every generated href/src an absolute
			// "${base}/…" path instead of SvelteKit's default dot-relative
			// ("../../foo") rewriting. GitHub Pages never redirects a
			// trailing-slash-less request (e.g. the bare repo URL) to add
			// the slash the way a real web server would, so a relative link
			// on that page resolves one directory too high and drops the
			// "/<repo>" prefix entirely — absolute paths sidestep that.
			paths: { base: process.env.BASE_PATH ?? "", relative: false },

			// A vault this size will always have a few dead wikilinks or
			// missing embeds — don't let one broken link abort the entire
			// export. Log it and keep prerendering everything else.
			prerender: {
				handleHttpError: ({ message }) => {
					console.warn(`[prerender] ${message}`);
				}
			}
		})
	]
});
