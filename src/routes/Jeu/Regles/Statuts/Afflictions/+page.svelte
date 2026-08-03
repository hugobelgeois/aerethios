<script lang="ts">
  import { onDestroy } from "svelte";
  import { tocHeadings } from "$lib/stores";
  import { applyBase, renderMarkdown } from "$lib/markdownRenderer";
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
		<h2 id="saignement">{@html applyBase("Saignement")}</h2>
	{@html renderMarkdown("La cible perd Xd4 HP par tour jusqu'à être soignée.\n*X représente le nombre de saignement appliqués.*\n\nSoin :\n\t- kit de soin,\n\t- sort de soutien de DC 20.\n")}

	</section>
{/snippet}

{#snippet poison()}
	<section>
		<h2 id="poison">{@html applyBase("Poison")}</h2>
	{@html renderMarkdown("La cible prend 1d6 HP par tour pendant 3 tours ou jusqu'à être soigné.\n\nChaque nouvelle application ajoute 3 tours.\n\nSoin :\n\t- antidote,\n\t- sort de soutien de DC 15.\n")}

	</section>
{/snippet}

{#snippet surcharge()}
	<section>
		<h2 id="surcharge">{@html applyBase("Surcharge")}</h2>
	{@html renderMarkdown("\nLa cible perd 1d4 crystaux et perd 4 HP par crystal perdu.\n\nSi les dégâts valent 16, elle doit utiliser une action pour se concentrer afin de réutiliser sa magie et régénérer ses crystaux.\n\nUne fois atteinte de Surcharge, la cible est immunisé pour le reste du combat.")}

	</section>
{/snippet}
