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
  <title>Fabrication</title>
</svelte:head>

<article class="md-page">
  <header class="md-header">
    <h1>Fabrication</h1>
  </header>
  <div class="markdown-rendered">
		{@render preamble()}
  </div>
</article>

<LinkPreview />

{#snippet preamble()}
	{@html renderMarkdown("\n|                               | Déchet | Commun | Peu Commun | Rare | Légendaire |\n| ----------------------------- | :----: | :----: | :--------: | :--: | :--------: |\n| **Difficulté de Fabrication** |   10   |   20   |     40     |  80  |    150     |\n| **Expérience de Fabrication** |   -    |   1    |     2      |  4   |     8      |\n| **Taux d'Echec**              |   1    |   3    |     6      |  10  |     15     |\n")}
{/snippet}
