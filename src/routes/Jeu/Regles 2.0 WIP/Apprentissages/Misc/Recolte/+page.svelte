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
  <title>Récolte</title>
</svelte:head>

<article class="md-page">
  <header class="md-header">
    <h1>Récolte</h1>
  </header>
  <div class="markdown-rendered">
		{@render preamble()}
  </div>
</article>

<LinkPreview />

{#snippet preamble()}
	{@html renderMarkdown("|                         |  Rien  | Déchet  | Commun  | Peu Commun |  Rare   | Légendaire |\n| ----------------------- | :----: | :-----: | :-----: | :--------: | :-----: | :--------: |\n| **Chance Récolte**      | 1 - 10 | 11 - 30 | 31 - 60 |  61 - 85   | 86 - 96 |  97 - 100  |\n| **Quantité de Récolte** |   -    |  1d10   |   1d8   |    1d6     |   1d4   |    1d2     |\n| **Prix Moyen**          |   -    |  ~10pc  |  ~1pa   |   ~10pa    |  ~1po   |   ~10po    |\n")}
{/snippet}
