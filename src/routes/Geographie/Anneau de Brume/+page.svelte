<script lang="ts">
  import { onDestroy } from "svelte";
  import { tocHeadings } from "$lib/stores";
  import { applyBase, renderMarkdown } from "$lib/markdownRenderer";
  import LinkPreview from "$lib/LinkPreview.svelte";
  import EmbedBlock from "$lib/EmbedBlock.svelte";

  tocHeadings.set([]);

  onDestroy(() => tocHeadings.set([]));
</script>

<svelte:head>
  <title>Anneau de Brume</title>
</svelte:head>

<article class="md-page">
  <header class="md-header">
    <h1>Anneau de Brume</h1>
  </header>
  <div class="markdown-rendered">
		{@render preamble()}
  </div>
</article>

<LinkPreview />

{#snippet preamble()}
	{@html renderMarkdown("<a href=\"%%BASE%%/Geographie/Ovliin/Ovliin\" class=\"wiki-link internal-link\" data-wiki-href=\"/Geographie/Ovliin/Ovliin\" data-wiki-fragment=\"\">Ovliin</a>\n<span class=\"wiki-unresolved\">Jade Pourpre</span>")}
{/snippet}
