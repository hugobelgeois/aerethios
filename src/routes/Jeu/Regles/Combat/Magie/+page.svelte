<script lang="ts">
  import { onDestroy } from "svelte";
  import { tocHeadings } from "$lib/stores";
  import { renderMarkdown } from "$lib/markdownRenderer";
  import LinkPreview from "$lib/LinkPreview.svelte";
  import EmbedBlock from "$lib/EmbedBlock.svelte";

  tocHeadings.set([
      {
          "id": "combat",
          "text": "Combat",
          "level": 2
      },
      {
          "id": "v2",
          "text": "v2",
          "level": 3
      },
      {
          "id": "utilitaire",
          "text": "Utilitaire",
          "level": 2
      },
      {
          "id": "toiles-clestes",
          "text": "Toiles Célestes",
          "level": 2
      }
  ]);

  onDestroy(() => tocHeadings.set([]));
</script>

<svelte:head>
  <title>Magie</title>
</svelte:head>

<article class="md-page">
  <header class="md-header">
    <h1>Magie</h1>
  </header>
  <div class="markdown-rendered">
		{@render combat()}
		{@render utilitaire()}
		{@render toilesClestes()}
  </div>
</article>

<LinkPreview />

{#snippet combat()}
	<section>
		<h2 id="combat">Combat</h2>
	{@html renderMarkdown(">Dé + Mental(Arcaniste|Intelligence|Sagesse) >= AC -> DR - (Résultat * (Crystaux + Toile Célèste)) = Dégâts au HP\n\n| Dé de précision | Résultat (Mental [-5:10]) | Crystaux max (% de la Magie)<br>Arrondi vers le haut | Dégâts (Magie [0:10]) |\n| :-------------: | :-----------------------: | :--------------------------------------------------: | :-------------------: |\n|      2d12       |          [-3:34]          |                         10%                          |        [3:34]         |\n|       2d8       |          [-3:26]          |                         20%                          |        [3:52]         |\n|      1d12       |          [-4:22]          |                         40%                          |        [4:88]         |\n|       1d8       |          [-4:18]          |                         70%                          |        [4:126]        |\n|       1d4       |          [-4:14]          |                         100%                         |        [4:140]        |\n\nSi l'attaque n'atteint pas l'AC, lancer 1d4 pour savoir combien de crystaux ont été consommé.\n")}
	{@render v2()}
	</section>
{/snippet}

{#snippet v2()}
	<section>
		<h3 id="v2">v2</h3>
	{@html renderMarkdown("\n(Dé de magie + Maîtrise) x Nombre de crystaux + Toile Célèste = Dégâts\n\n(1d12 + [0:10]) x [1:20] + ? = [1:440]\n")}

	</section>
{/snippet}

{#snippet utilitaire()}
	<section>
		<h2 id="utilitaire">Utilitaire</h2>
	{@html renderMarkdown(">1d20 + Mental (Arcaniste|Intelligence|Sagesse) >= DC\n\nS'il s'agit d'un buff, le coût en crystaux varie selon le type de stats que l'on souhaite buffer.\n\nS'il s'agit d'une action particulière, le MJ décide du coût en crystaux.\n")}

	</section>
{/snippet}

{#snippet toilesClestes()}
	<section>
		<h2 id="toiles-clestes">Toiles Célestes</h2>
	{@html renderMarkdown("\nS'il s'agit d'une Toile basée sur les magies courantes, on ajoute la valeur de la Toile")}

	</section>
{/snippet}
