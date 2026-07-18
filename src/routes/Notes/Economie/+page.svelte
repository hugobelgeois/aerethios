<script lang="ts">
  import { onDestroy } from "svelte";
  import { tocHeadings } from "$lib/stores";
  import { renderMarkdown } from "$lib/markdownRenderer";
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
  <title>Economie</title>
</svelte:head>

<article class="md-page">
  <header class="md-header">
    <h1>Economie</h1>
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
	{@html renderMarkdown("1 pièce d'or = 100 pièces d'argent = 10.000 pièces de cuivre\n\n1 pièce d'électrum = 50 pièces d'argent\n1 pièce de platine = 10 pièce d'or\n")}
{/snippet}

{#snippet cuivre()}
	<section>
		<h2 id="cuivre">Cuivre</h2>
	{@html renderMarkdown("\n>Monnaie du paysan\n\nAchète à manger, des vêtements et des outils simples\n\nUn paysan moyen gagne 15/20 pc par jour\n\nUn fruit coûte 1-2 pc\nUne bière coûte 4 pc\nUn repas à l'auberge coûte 10 pc\nUne nuit à l'auberge coûte 20 pc\nUne tenue complète coûte 50 pc\n\nLes joueurs gagnent du cuivre comme récompenses de quêtes jusqu'au niveau 4-5 en moyenne\n")}

	</section>
{/snippet}

{#snippet argent()}
	<section>
		<h2 id="argent">Argent</h2>
	{@html renderMarkdown("\n>Monnaie de l'aventurier et des artisans\n\nAchète de l'équipement, des potions et des meubles\n\nLes joueurs gagnent de l'argent comme récompenses de quêtes jusqu'au niveau 9-10 en moyenne\n")}

	</section>
{/snippet}

{#snippet or()}
	<section>
		<h2 id="or">Or</h2>
	{@html renderMarkdown("\n>Monnaie des nobles\n\nAchète des bijoux, de la magie et des bâtiments")}

	</section>
{/snippet}
