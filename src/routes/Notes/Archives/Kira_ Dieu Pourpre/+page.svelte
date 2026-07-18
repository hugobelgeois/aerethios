<script lang="ts">
  import { onDestroy } from "svelte";
  import { tocHeadings } from "$lib/stores";
  import { applyBase, renderMarkdown } from "$lib/markdownRenderer";
  import LinkPreview from "$lib/LinkPreview.svelte";
  import EmbedBlock from "$lib/EmbedBlock.svelte";

  tocHeadings.set([
      {
          "id": "les-deux-guerriers",
          "text": "Les Deux Guerriers",
          "level": 2
      },
      {
          "id": "totem",
          "text": "Totem",
          "level": 3
      },
      {
          "id": "chanson",
          "text": "Chanson",
          "level": 3
      }
  ]);

  onDestroy(() => tocHeadings.set([]));
</script>

<svelte:head>
  <title>Kira, Dieu Pourpre</title>
</svelte:head>

<article class="md-page">
  <header class="md-header">
    <h1>Kira, Dieu Pourpre</h1>
  </header>
  <div class="markdown-rendered">
		{@render lesDeuxGuerriers()}
  </div>
</article>

<LinkPreview />

{#snippet lesDeuxGuerriers()}
	<section>
		<h2 id="les-deux-guerriers">{@html applyBase("Les Deux Guerriers")}</h2>
	{@html renderMarkdown("\nDeux guerriers jurèrent de s’entretuer.\n\nIls se cherchèrent des années.\n\nÀ travers champs, mers, royaumes.\n\nÀ chaque fois qu’ils s’approchaient,  \nle monde semblait les rapprocher encore plus.\n\nEt quand enfin ils se trouvèrent,  \nils ne purent s’arrêter.\n\nLe combat dura des jours.  \nPuis des nuits.\n\nJusqu’à ce qu’ils tombent.\n\nL’un contre l’autre.\n\nMorts.\n\nLeurs corps ne furent jamais séparés.\n\nCar personne ne put dire  \noù l’un finissait  \net où l’autre commençait.\n")}
	{@render totem()}
	{@render chanson()}
	</section>
{/snippet}

{#snippet totem()}
	<section>
		<h3 id="totem">{@html applyBase("Totem")}</h3>
	{@html renderMarkdown("\nDeux **lames croisées**, fusionnées au point d’impact\n")}

	</section>
{/snippet}

{#snippet chanson()}
	<section>
		<h3 id="chanson">{@html applyBase("Chanson")}</h3>
	{@html renderMarkdown("\n> Ce qui brûle se rejoint  \n> Ce qui frappe se lie  \n> L’amour et la guerre  \n> Ne font qu’un cri")}

	</section>
{/snippet}
