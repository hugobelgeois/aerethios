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
  <title>Anneau des Tempêtes</title>
</svelte:head>

<article class="md-page">
  <header class="md-header">
    <h1>Anneau des Tempêtes</h1>
  </header>
  <div class="markdown-rendered">
		{@render preamble()}
  </div>
</article>

<LinkPreview />

{#snippet preamble()}
	{@html renderMarkdown("<a href=\"/Geographie/Nirina/Nirina\" class=\"wiki-link internal-link\" data-wiki-href=\"/Geographie/Nirina/Nirina\" data-wiki-fragment=\"\">Nirina</a>\n<span class=\"wiki-unresolved\">Rapides d'Erve</span>\n<span class=\"wiki-unresolved\">Merché</span>\n<span class=\"wiki-unresolved\">Mer des Dents</span>\n<span class=\"wiki-unresolved\">Mer Lactée</span>")}
{/snippet}
