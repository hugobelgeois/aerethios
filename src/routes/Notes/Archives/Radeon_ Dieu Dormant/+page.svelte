<script lang="ts">
  import { onDestroy } from "svelte";
  import { tocHeadings } from "$lib/stores";
  import { renderMarkdown } from "$lib/markdownRenderer";
  import LinkPreview from "$lib/LinkPreview.svelte";
  import EmbedBlock from "$lib/EmbedBlock.svelte";

  tocHeadings.set([
      {
          "id": "le-rveur-qui-refusa-de-voir",
          "text": "Le Rêveur qui Refusa de Voir",
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
  <title>Radeon, Dieu Dormant</title>
</svelte:head>

<article class="md-page">
  <header class="md-header">
    <h1>Radeon, Dieu Dormant</h1>
  </header>
  <div class="markdown-rendered">
		{@render leRveurQuiRefusaDeVoir()}
  </div>
</article>

<LinkPreview />

{#snippet leRveurQuiRefusaDeVoir()}
	<section>
		<h2 id="le-rveur-qui-refusa-de-voir">Le Rêveur qui Refusa de Voir</h2>
	{@html renderMarkdown("\nUn homme rêvait chaque nuit qu’il tombait.\n\nToujours la même chute.\nToujours le même vide.\n\nAlors il pria pour ne plus rêver.\n\nEt le rêve cessa.\n\nLes jours passèrent.\nEt un autre rêve vint.\n\nIl se voyait roi.\n\nFort. Aimé. Intouchable.\n\nIl s’y abandonna.\n\nMais un jour, au milieu de son royaume,\nil trébucha.\n\nEt il tomba.\n\nComme dans le premier rêve.\n\nAlors il comprit.\n\nIl n’avait pas cessé de tomber.\n\nIl avait seulement cessé de regarder.\n")}
	{@render totem()}
	{@render chanson()}
	</section>
{/snippet}

{#snippet totem()}
	<section>
		<h3 id="totem">Totem</h3>
	{@html renderMarkdown("\nUn **masque à deux faces** :\n\n- une tournée vers le ciel\n- une tournée vers un abîme\n")}

	</section>
{/snippet}

{#snippet chanson()}
	<section>
		<h3 id="chanson">Chanson</h3>
	{@html renderMarkdown("\n> Ce que je vois peut naître\n> Ce que j’ignore grandit\n> Le rêve appelle le monde\n> Et l’ombre lui répond")}

	</section>
{/snippet}
