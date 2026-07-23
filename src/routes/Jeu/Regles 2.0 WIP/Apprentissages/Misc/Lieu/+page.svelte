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
  <title>Lieu</title>
</svelte:head>

<article class="md-page">
  <header class="md-header">
    <h1>Lieu</h1>
  </header>
  <div class="markdown-rendered">
		{@render preamble()}
  </div>
</article>

<LinkPreview />

{#snippet preamble()}
	{@html renderMarkdown("\n| Zone sauvage | Campement | Lieu sécurisé | Lieu conçu pour |\n| ------------ | --------- | ------------- | --------------- |\n| Désavantage  | Résultat  | Avantage      | Temps/2         |\n| ---          | ---       | Rareté +1     | Rareté +2       |\n")}
{/snippet}
