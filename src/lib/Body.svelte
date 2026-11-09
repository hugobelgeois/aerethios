<script lang="ts">
	import type { Snippet } from "svelte";
	import { afterNavigate } from "$app/navigation";
	import { page } from "$app/state";
	const {
		children,
		onContentClick,
	}: {
		children: Snippet;
		/** Capture-phase click anywhere in the note column; returns true if
		 * it consumed the click (it then never reaches links/buttons inside). */
		onContentClick?: () => boolean;
	} = $props();

	function handleClickCapture(e: MouseEvent) {
		if (onContentClick?.()) {
			e.preventDefault();
			e.stopPropagation();
		}
	}

	let contentEl: HTMLElement;

	// The scrollable area is this inner div (overflow-y:auto), not the
	// window — SvelteKit's built-in scroll reset only targets window
	// scroll, so navigating to a new page never scrolled this div back
	// to the top on its own.
	afterNavigate(() => {
		contentEl?.scrollTo(0, 0);
	});
</script>

<!-- svelte-ignore a11y_click_events_have_key_events, a11y_no_static_element_interactions -->
<div class="workspace-split mod-vertical mod-root" onclickcapture={handleClickCapture}>
	<div
		class="workspace-tabs mod-top workspace-tab-container workspace-leaf workspace-leaf-content view-content markdown-preview-view"
		data-type="markdown"
		bind:this={contentEl}
	>
		<div
			class="markdown-preview-sizer"
			class:full-bleed={page.data.fullBleed}
			class:full-height={page.data.fullHeight}
		>
			{@render children()}
		</div>
	</div>
</div>