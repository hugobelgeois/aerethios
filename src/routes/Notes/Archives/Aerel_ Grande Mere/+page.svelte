<script lang="ts">
  import { onDestroy } from "svelte";
  import { tocHeadings } from "$lib/stores";
  import { applyBase, renderMarkdown } from "$lib/markdownRenderer";
  import LinkPreview from "$lib/LinkPreview.svelte";
  import EmbedBlock from "$lib/EmbedBlock.svelte";

  tocHeadings.set([
      {
          "id": "les-deux-qui-deviennent-trois",
          "text": "Les Deux qui Deviennent Trois",
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
  <title>Aerel, Grande Mère</title>
</svelte:head>

<article class="md-page">
  <header class="md-header">
    <h1>Aerel, Grande Mère</h1>
  </header>
  <div class="markdown-rendered">
		{@render lesDeuxQuiDeviennentTrois()}
  </div>
</article>

<LinkPreview />

{#snippet lesDeuxQuiDeviennentTrois()}
	<section>
		<h2 id="les-deux-qui-deviennent-trois">{@html applyBase("Les Deux qui Deviennent Trois")}</h2>
	{@html renderMarkdown("\nDeux voyageurs se rencontrèrent au bord d’un puits.\n\nIls burent ensemble.\nIls rirent ensemble.\nIls décidèrent de ne plus se quitter.\n\nAlors le monde changea.\n\nLeurs pas laissèrent une seule trace.\nLeurs voix devinrent une seule parole.\n\nEt bientôt, ils ne furent plus deux.\n\nMais ils ne furent pas non plus un.\n\nQuelque chose d’autre naquit.\n\nQuelque chose qui pleurait quand ils riaient,\net riait quand ils pleuraient.\n\nIls voulurent se séparer.\n\nMais le puits parla :\n\n> _“Ce qui est uni ne peut rester vide.”_\n\nAlors ils partirent.\n\nTrois.\n")}
	{@render totem()}
	{@render chanson()}
	</section>
{/snippet}

{#snippet totem()}
	<section>
		<h3 id="totem">{@html applyBase("Totem")}</h3>
	{@html renderMarkdown("\nUn **cercle double entrelacé**, dont le centre contient une **troisième forme incomplète**.\n")}

	</section>
{/snippet}

{#snippet chanson()}
	<section>
		<h3 id="chanson">{@html applyBase("Chanson")}</h3>
	{@html renderMarkdown("\n> Ce qui se lie ne se défait\n> Ce qui se touche se transforme\n> Deux deviennent plus que deux\n> Et rien n’en sort intact")}

	</section>
{/snippet}
