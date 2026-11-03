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
  <title>{"Arc 3 - 14 - 11.10.25"}</title>
</svelte:head>

<article class="md-page">
  <header class="md-header">
    <h1>{"Arc 3 - 14 - 11.10.25"}</h1>
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
	{@html "<p>Lieu actuel : Suraja, Irkma</p>\n<p>Objectif : Rencontre de Chlorys et récupération d'infos sur son groupe</p>\n<p>Pnjs notables : Chlorys</p>"}

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
	{@html "<p><strong>Irkma -> Chlorys</strong><br>\nQuand elle voit Arek la chercher, elle part en courant</p>\n<blockquote>Course poursuite + combat pour la calmer<br>Discussion dans une taverne après</blockquote>\n<p>Engagée pour garantir la sécurité et l'anonymat des membres du groupe Esper<br>\nAucune notion de ce qu'ils font, elle est assez payée que pour ne pas s'y intéresser<br>\nElle pourrait se souvenir de détails s'ils l'aident à voler un commerçant rival</p>\n<p>Ils font le casse et peuvent se rendre compte qu'il s'agit des affaires de Dara<br>\nIls la retrouvent après et peuvent la confronter</p>\n<blockquote>Elle trouve que Raja est une grosse pute qui se la pète avec son physique et qui a trop de reconnaissance alors qu'elle ne prend aucun risque</blockquote>\n<p>Elle connaît 2 membres du groupe qui sont souvent ensemble à Irkma<br>\nNimaya, une ancienne esclave qui gère le réseau pauvre et recrute des hommes pour Chlorys<br>\nTazim, un prêtre du \"Prendre\" qui assemble des fonds pour le groupe</p>"}

	</section>
{/snippet}

{#snippet joueurs()}
	<section>
		<h2 id="joueurs">{@html "Joueurs"}</h2>
	{@html applyBase("<ul><li><input type=\"checkbox\" disabled checked> Diego 15</li><li><input type=\"checkbox\" disabled checked> Loïc 12</li><li><input type=\"checkbox\" disabled checked> Lucas 5</li><li><input type=\"checkbox\" disabled checked> Michel 17</li><li><input type=\"checkbox\" disabled> Nolan 3</li><li><input type=\"checkbox\" disabled checked> Thomas 16</li><li><input type=\"checkbox\" disabled> William 7</li></ul>\n<div class=\"table-scroll\"><table><thead><tr><th>Précédent</th><th>Suivant</th></tr></thead><tbody><tr><td><a href=\"%%BASE%%/Jeu/Sessions du Masque/Arc 3/Arc 3 - 13b - 03.10.25\" class=\"wiki-link internal-link\" data-wiki-href=\"/Jeu/Sessions du Masque/Arc 3/Arc 3 - 13b - 03.10.25\" data-wiki-fragment=\"\">Arc 3 - 13b - 03.10.25</a></td><td><a href=\"%%BASE%%/Jeu/Sessions du Masque/Arc 3/Arc 3 - 15 - 14.11.25\" class=\"wiki-link internal-link\" data-wiki-href=\"/Jeu/Sessions du Masque/Arc 3/Arc 3 - 15 - 14.11.25\" data-wiki-fragment=\"\">Arc 3 - 15 - 14.11.25</a></td></tr></tbody></table></div>")}

	</section>
{/snippet}
