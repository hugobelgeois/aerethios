<script lang="ts">
  import { onDestroy } from "svelte";
  import { tocHeadings } from "$lib/stores";
  import { applyBase } from "$lib/basePath";
  import LinkPreview from "$lib/LinkPreview.svelte";
  import EmbedBlock from "$lib/EmbedBlock.svelte";

  tocHeadings.set([
      {
          "id": "cuivre",
          "text": "Cuivre",
          "level": 2
      },
      {
          "id": "argent",
          "text": "Argent",
          "level": 2
      },
      {
          "id": "or",
          "text": "Or",
          "level": 2
      }
  ]);

  onDestroy(() => tocHeadings.set([]));
</script>

<svelte:head>
  <title>{"Economie"}</title>
</svelte:head>

<article class="md-page">
  <header class="md-header">
    <h1>{"Economie"}</h1>
  </header>
  <div class="markdown-rendered">
		{@render preamble()}
		{@render cuivre()}
		{@render argent()}
		{@render or()}
  </div>
</article>

<LinkPreview />

{#snippet preamble()}
	{@html "<p>1 pièce d'or = 100 pièces d'argent = 10.000 pièces de cuivre</p>\n<p>1 pièce d'électrum = 50 pièces d'argent<br>\n1 pièce de platine = 10 pièce d'or</p>"}
{/snippet}

{#snippet cuivre()}
	<section>
		<h2 id="cuivre">{@html "Cuivre"}</h2>
	{@html "<blockquote>Monnaie du paysan</blockquote>\n<p>Achète à manger, des vêtements et des outils simples</p>\n<p>Un paysan moyen gagne 15/20 pc par jour</p>\n<p>Un fruit coûte 1-2 pc<br>\nUne bière coûte 4 pc<br>\nUn repas à l'auberge coûte 10 pc<br>\nUne nuit à l'auberge coûte 20 pc<br>\nUne tenue complète coûte 50 pc</p>\n<p>Les joueurs gagnent du cuivre comme récompenses de quêtes jusqu'au niveau 4-5 en moyenne</p>"}

	</section>
{/snippet}

{#snippet argent()}
	<section>
		<h2 id="argent">{@html "Argent"}</h2>
	{@html "<blockquote>Monnaie de l'aventurier et des artisans</blockquote>\n<p>Achète de l'équipement, des potions et des meubles</p>\n<p>Les joueurs gagnent de l'argent comme récompenses de quêtes jusqu'au niveau 9-10 en moyenne</p>"}

	</section>
{/snippet}

{#snippet or()}
	<section>
		<h2 id="or">{@html "Or"}</h2>
	{@html "<blockquote>Monnaie des nobles</blockquote>\n<p>Achète des bijoux, de la magie et des bâtiments</p>"}

	</section>
{/snippet}
