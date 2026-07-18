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
  <title>Anneau de Feu</title>
</svelte:head>

<article class="md-page">
  <header class="md-header">
    <h1>Anneau de Feu</h1>
  </header>
  <div class="markdown-rendered">
		{@render preamble()}
  </div>
</article>

<LinkPreview />

{#snippet preamble()}
	{@html renderMarkdown("<a href=\"%%BASE%%/Geographie/Suraja/Suraja\" class=\"wiki-link internal-link\" data-wiki-href=\"/Geographie/Suraja/Suraja\" data-wiki-fragment=\"\">Suraja</a>\n<span class=\"wiki-unresolved\">Grand Bleu</span>\n<span class=\"wiki-unresolved\">Mer Calme</span>")}
{/snippet}
