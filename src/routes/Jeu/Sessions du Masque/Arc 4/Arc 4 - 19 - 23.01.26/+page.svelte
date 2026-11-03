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
          "id": "notes",
          "text": "Notes",
          "level": 2
      },
      {
          "id": "scnario",
          "text": "Scénario",
          "level": 2
      },
      {
          "id": "1-document-dinformation-sur-le-groupe",
          "text": "1) Document d'information sur le groupe",
          "level": 4
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
  <title>{"Arc 4 - 19 - 23.01.26"}</title>
</svelte:head>

<article class="md-page">
  <header class="md-header">
    <h1>{"Arc 4 - 19 - 23.01.26"}</h1>
  </header>
  <div class="markdown-rendered">
		{@render preamble()}
		{@render dtails()}
		{@render notes()}
		{@render scnario()}
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
	{@html "<p>Lieu actuel : Nirina, Pranels</p>\n<p>Objectif :</p>\n<p>Pnjs notables : Ilmar Hakka</p>"}

	</section>
{/snippet}

{#snippet notes()}
	<section>
		<h2 id="notes">{@html "Notes"}</h2>


	</section>
{/snippet}

{#snippet scnario()}
	<section>
		<h2 id="scnario">{@html "Scénario"}</h2>

	{@render _DocumentDinformationSurLeGroupe()}
	</section>
{/snippet}

{#snippet _DocumentDinformationSurLeGroupe()}
	<section>
		<h4 id="1-document-dinformation-sur-le-groupe">{@html "1) Document d'information sur le groupe"}</h4>
	{@html "<blockquote><strong>Event</strong>, Qui > Quoi</blockquote>\n<p>Contact :</p>\n<ul><li>Théon, Templis, pourrait se renseigner en interne</li><li>Nyx, contact d'Arek</li></ul>\n<ul><li>Thierry du Lion d'Argent</li><li>Mattias du Lion Tuant</li></ul>\n<ul><li>Ferdinand du Lion d'Argent</li><li>Chlodvig du Marteau Lourd</li></ul>\n<p>\tGroupe avec des sous-fifres</p>\n<ul><li>Salomé du Lion d'Argent</li><li>Nyx du Lion d'Argent</li></ul>\n<p>\tRépandent la foi</p>\n<ul><li>Florian de l'Ancienne Bataille</li><li>Erasmus du Tranchant</li></ul>\n<ul><li>Ilmar Hakka</li><li>Kigan Krust</li></ul>\n<p>\tSe trouvent dans Sulimund, à Crache Poussière</p>\n<p>Parmi les leaders se trouve forcément le planificateur de tout ce qu'il se passe.</p>\n<p>Il faudrait réussir à se renseigner auprès des autres leaders pour savoir de qui il s'agit.</p>"}

	</section>
{/snippet}

{#snippet joueurs()}
	<section>
		<h2 id="joueurs">{@html "Joueurs"}</h2>
	{@html applyBase("<ul><li><input type=\"checkbox\" disabled checked> Diego 20</li><li><input type=\"checkbox\" disabled> Loïc 15</li><li><input type=\"checkbox\" disabled> Lucas 8</li><li><input type=\"checkbox\" disabled checked> Michel 22</li><li><input type=\"checkbox\" disabled checked> Nolan 8</li><li><input type=\"checkbox\" disabled checked> Thomas 20</li><li><input type=\"checkbox\" disabled> William 7</li></ul>\n<div class=\"table-scroll\"><table><thead><tr><th>Précédent</th><th>Suivant</th></tr></thead><tbody><tr><td><a href=\"%%BASE%%/Jeu/Sessions du Masque/Arc 4/Arc 4 - 18 - 02.01.26\" class=\"wiki-link internal-link\" data-wiki-href=\"/Jeu/Sessions du Masque/Arc 4/Arc 4 - 18 - 02.01.26\" data-wiki-fragment=\"\">Arc 4 - 18 - 02.01.26</a></td><td><a href=\"%%BASE%%/Jeu/Sessions du Masque/Arc 4/Arc 4 - 20 - 13.02.26\" class=\"wiki-link internal-link\" data-wiki-href=\"/Jeu/Sessions du Masque/Arc 4/Arc 4 - 20 - 13.02.26\" data-wiki-fragment=\"\">Arc 4 - 20 - 13.02.26</a></td></tr></tbody></table></div>")}

	</section>
{/snippet}
