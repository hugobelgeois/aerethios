<script lang="ts">
  import { onDestroy } from "svelte";
  import { tocHeadings } from "$lib/stores";
  import { applyBase } from "$lib/basePath";
  import LinkPreview from "$lib/LinkPreview.svelte";
  import EmbedBlock from "$lib/EmbedBlock.svelte";

  tocHeadings.set([
      {
          "id": "dtails",
          "text": "Détails",
          "level": 2
      },
      {
          "id": "scnario",
          "text": "Scénario",
          "level": 2
      },
      {
          "id": "notes",
          "text": "Notes",
          "level": 2
      },
      {
          "id": "joueurs",
          "text": "Joueurs",
          "level": 2
      }
  ]);

  onDestroy(() => tocHeadings.set([]));
</script>

<svelte:head>
  <title>{"Arc 3 - 12 - 19.09.25"}</title>
</svelte:head>

<article class="md-page">
  <header class="md-header">
    <h1>{"Arc 3 - 12 - 19.09.25"}</h1>
  </header>
  <div class="markdown-rendered">
		{@render preamble()}
		{@render dtails()}
		{@render scnario()}
		{@render notes()}
		{@render joueurs()}
  </div>
</article>

<LinkPreview />

{#snippet preamble()}
	{@html "<blockquote>Résumé</blockquote>"}
{/snippet}

{#snippet dtails()}
	<section>
		<h2 id="dtails">{@html "Détails"}</h2>
	{@html "<p>Lieu actuel : Suraja, ville au sud d'Irkma</p>\n<p>Objectif : Baiser le forgeron pour récupérer son minerai en mithril</p>\n<p>Pnjs notables : -</p>"}

	</section>
{/snippet}

{#snippet scnario()}
	<section>
		<h2 id="scnario">{@html "Scénario"}</h2>


	</section>
{/snippet}

{#snippet notes()}
	<section>
		<h2 id="notes">{@html "Notes"}</h2>
	{@html "<p><strong>Equilibrage</strong><br>\nRetirer les armes en mithril et remettre les anciennes<br>\nLe forgeron possède un minerai rare dans une vitrine qui pourrait faire 3 lingots<br>\nLe minerai a une valeur sentimentale et coûte cher</p>\n<p>Convois de carapaces pour aller à Irkma</p>"}

	</section>
{/snippet}

{#snippet joueurs()}
	<section>
		<h2 id="joueurs">{@html "Joueurs"}</h2>
	{@html applyBase("<ul><li><input type=\"checkbox\" disabled checked> Diego 13</li><li><input type=\"checkbox\" disabled> Loïc 9</li><li><input type=\"checkbox\" disabled checked> Lucas 3</li><li><input type=\"checkbox\" disabled checked> Michel 14</li><li><input type=\"checkbox\" disabled checked> Nolan 2</li><li><input type=\"checkbox\" disabled checked> Thomas 13</li><li><input type=\"checkbox\" disabled checked> William 6</li></ul>\n<div class=\"table-scroll\"><table><thead><tr><th>Précédent</th><th>Suivant</th></tr></thead><tbody><tr><td><a href=\"%%BASE%%/Jeu/Sessions du Masque/Arc 3/Arc 3 - 13 - 29.08.25\" class=\"wiki-link internal-link\" data-wiki-href=\"/Jeu/Sessions du Masque/Arc 3/Arc 3 - 13 - 29.08.25\" data-wiki-fragment=\"\">Arc 3 - 13 - 29.08.25</a></td><td><a href=\"%%BASE%%/Jeu/Sessions du Masque/Arc 3/Arc 3 - 13b - 03.10.25\" class=\"wiki-link internal-link\" data-wiki-href=\"/Jeu/Sessions du Masque/Arc 3/Arc 3 - 13b - 03.10.25\" data-wiki-fragment=\"\">Arc 3 - 13b - 03.10.25</a></td></tr></tbody></table></div>")}

	</section>
{/snippet}
