<script lang="ts">
  import { onDestroy } from "svelte";
  import { tocHeadings } from "$lib/stores";
  import { applyBase, renderMarkdown } from "$lib/markdownRenderer";
  import LinkPreview from "$lib/LinkPreview.svelte";
  import EmbedBlock from "$lib/EmbedBlock.svelte";

  tocHeadings.set([
      {
          "id": "fabrication",
          "text": "Fabrication",
          "level": 4
      },
      {
          "id": "rcolte",
          "text": "Récolte",
          "level": 4
      },
      {
          "id": "lieu",
          "text": "Lieu",
          "level": 4
      }
  ]);

  onDestroy(() => tocHeadings.set([]));
</script>

<svelte:head>
  <title>Rappel</title>
</svelte:head>

<article class="md-page">
  <header class="md-header">
    <h1>Rappel</h1>
  </header>
  <div class="markdown-rendered">
		{@render fabrication()}
		{@render rcolte()}
		{@render lieu()}
  </div>
</article>

<LinkPreview />

{#snippet fabrication()}
	<section>
		<h4 id="fabrication">{@html applyBase("Fabrication")}</h4>
	{@html renderMarkdown("\n|                               | Déchet | Commun | Peu Commun | Rare | Légendaire |\n| ----------------------------- | :----: | :----: | :--------: | :--: | :--------: |\n| **Difficulté de Fabrication** |   10   |   20   |     40     |  80  |    150     |\n| **Expérience de Fabrication** |   -    |   1    |     2      |  4   |     8      |\n| **Taux d'Échec**              |   1    |   3    |     6      |  10  |     15     |\n")}

	</section>
{/snippet}

{#snippet rcolte()}
	<section>
		<h4 id="rcolte">{@html applyBase("Récolte")}</h4>
	{@html renderMarkdown("\n|                         |  Rien  | Déchet  | Commun  | Peu Commun |  Rare   | Légendaire |\n| ----------------------- | :----: | :-----: | :-----: | :--------: | :-----: | :--------: |\n| **Chance Récolte**      | 1 - 10 | 11 - 30 | 31 - 60 |  61 - 85   | 86 - 96 |  97 - 100  |\n| **Quantité de Récolte** |   -    |  1d10   |   1d8   |    1d6     |   1d4   |    1d2     |\n| **Prix Moyen**          |   -    |  ~10pc  |  ~1pa   |   ~10pa    |  ~1po   |   ~10po    |\n")}

	</section>
{/snippet}

{#snippet lieu()}
	<section>
		<h4 id="lieu">{@html applyBase("Lieu")}</h4>
	{@html renderMarkdown("\n| Zone sauvage | Campement | Lieu sécurisé | Lieu conçu pour             |\n| ------------ | --------- | ------------- | --------------------------- |\n| Désavantage  | Résultat  | Avantage      | Difficulté de Fabrication/2 |\n| ---          | ---       | Rareté +1     | Rareté +2                   |")}

	</section>
{/snippet}
