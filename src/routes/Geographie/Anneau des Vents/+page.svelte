<script lang="ts">
  import { onDestroy } from "svelte";
  import { tocHeadings } from "$lib/stores";
  import { renderMarkdown } from "$lib/markdownRenderer";
  import LinkPreview from "$lib/LinkPreview.svelte";
  import EmbedBlock from "$lib/EmbedBlock.svelte";

  tocHeadings.set([]);

  onDestroy(() => tocHeadings.set([]));
</script>

<svelte:head>
  <title>Anneau des Vents</title>
</svelte:head>

<article class="md-page">
  <header class="md-header">
    <h1>Anneau des Vents</h1>
  </header>
  <div class="markdown-rendered">
		{@render preamble()}
  </div>
</article>

<LinkPreview />

{#snippet preamble()}
	{@html renderMarkdown("<a href=\"%%BASE%%/Geographie/Kothula/Kothula\" class=\"wiki-link internal-link\" data-wiki-href=\"/Geographie/Kothula/Kothula\" data-wiki-fragment=\"\">Kothula</a>\n<span class=\"wiki-unresolved\">Chaumide</span>\n<span class=\"wiki-unresolved\">Grand Bleu</span>\n<span class=\"wiki-unresolved\">Mer Triste</span>")}
{/snippet}
