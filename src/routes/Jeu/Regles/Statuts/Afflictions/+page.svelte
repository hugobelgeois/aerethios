<script lang="ts">
  import { onDestroy } from "svelte";
  import { tocHeadings } from "$lib/stores";
  import { renderMarkdown } from "$lib/markdownRenderer";
  import LinkPreview from "$lib/LinkPreview.svelte";
  import EmbedBlock from "$lib/EmbedBlock.svelte";

  tocHeadings.set([
      {
          "id": "saignement",
          "text": "Saignement",
          "level": 2
      },
      {
          "id": "poison",
          "text": "Poison",
          "level": 2
      },
      {
          "id": "surcharge",
          "text": "Surcharge",
          "level": 2
      }
  ]);

  onDestroy(() => tocHeadings.set([]));
</script>

<svelte:head>
  <title>Afflictions</title>
</svelte:head>

<article class="md-page">
  <header class="md-header">
    <h1>Afflictions</h1>
  </header>
  <div class="markdown-rendered">
		{@render saignement()}
		{@render poison()}
		{@render surcharge()}
  </div>
</article>

<LinkPreview />

{#snippet saignement()}
	<section>
		<h2 id="saignement">Saignement</h2>
	{@html renderMarkdown("La cible perd Xd4 HP par tour jusqu'à être soignée.\n*X représente le nombre de saignement appliqués.*\n\nSoin :\n\t- kit de soin,\n\t- sort de soutien de DC 20.\n")}

	</section>
{/snippet}

{#snippet poison()}
	<section>
		<h2 id="poison">Poison</h2>
	{@html renderMarkdown("La cible prend 1d6 HP par tour pendant 3 tours ou jusqu'à être soigné.\n\nChaque nouvelle application ajoute 3 tours.\n\nSoin :\n\t- antidote,\n\t- sort de soutien de DC 15.\n")}

	</section>
{/snippet}

{#snippet surcharge()}
	<section>
		<h2 id="surcharge">Surcharge</h2>
	{@html renderMarkdown("\nLa cible perd 1d4 crystaux et prend 1d6 HP par crystal perdu.\n\nSi les dégâts sont supérieurs à 12, elle doit se concentrer pour pouvoir réutiliser sa magie et régénérer ses crystaux.")}

	</section>
{/snippet}
