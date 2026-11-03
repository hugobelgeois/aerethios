<script lang="ts">
  import { onDestroy } from "svelte";
  import { tocHeadings } from "$lib/stores";
  import { applyBase } from "$lib/basePath";
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
  <title>{"Rappel"}</title>
</svelte:head>

<article class="md-page">
  <header class="md-header">
    <h1>{"Rappel"}</h1>
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
		<h4 id="fabrication">{@html "Fabrication"}</h4>
	{@html "<div class=\"table-scroll\"><table><thead><tr><th></th><th>Déchet</th><th>Commun</th><th>Peu Commun</th><th>Rare</th><th>Légendaire</th></tr></thead><tbody><tr><td><strong>Difficulté de Fabrication</strong></td><td>10</td><td>20</td><td>40</td><td>80</td><td>150</td></tr><tr><td><strong>Expérience de Fabrication</strong></td><td>-</td><td>1</td><td>2</td><td>4</td><td>8</td></tr><tr><td><strong>Taux d'Échec</strong></td><td>1</td><td>3</td><td>6</td><td>10</td><td>15</td></tr></tbody></table></div>"}

	</section>
{/snippet}

{#snippet rcolte()}
	<section>
		<h4 id="rcolte">{@html "Récolte"}</h4>
	{@html "<div class=\"table-scroll\"><table><thead><tr><th></th><th>Rien</th><th>Déchet</th><th>Commun</th><th>Peu Commun</th><th>Rare</th><th>Légendaire</th></tr></thead><tbody><tr><td><strong>Chance Récolte</strong></td><td>1 - 10</td><td>11 - 30</td><td>31 - 60</td><td>61 - 85</td><td>86 - 96</td><td>97+</td></tr><tr><td><strong>Quantité de Récolte</strong></td><td>-</td><td>1d10</td><td>1d8</td><td>1d6</td><td>1d4</td><td>1d2</td></tr><tr><td><strong>Prix Moyen</strong></td><td>-</td><td>~10pc</td><td>~1pa</td><td>~10pa</td><td>~1po</td><td>~10po</td></tr></tbody></table></div>"}

	</section>
{/snippet}

{#snippet lieu()}
	<section>
		<h4 id="lieu">{@html "Lieu"}</h4>
	{@html "<div class=\"table-scroll\"><table><thead><tr><th>Zone sauvage</th><th>Campement</th><th>Lieu sécurisé</th><th>Lieu conçu pour</th></tr></thead><tbody><tr><td>Désavantage</td><td>Résultat</td><td>Avantage</td><td>Difficulté de Fabrication/2</td></tr><tr><td>---</td><td>---</td><td>Rareté +1</td><td>Rareté +2</td></tr></tbody></table></div>"}

	</section>
{/snippet}
