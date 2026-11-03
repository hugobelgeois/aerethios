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
  <title>{"Arc 2 - 08 - 30.05.25"}</title>
</svelte:head>

<article class="md-page">
  <header class="md-header">
    <h1>{"Arc 2 - 08 - 30.05.25"}</h1>
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
	{@html "<p>Lieu actuel : Ovliin, Ruvik</p>\n<p>Objectif : Chercher Orvain Thessarion à Ruvik</p>\n<p>Pnjs notables : Bryumnes, Einar, Orvain Thessarion</p>"}

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
	{@html "<p>Capitale</p>\n<ul><li>Chercher Orvain Thessarion</li><li>Emmené par l'Eglise pour expérimentation illégale</li><li>Exécuté par Einar (ne connaît pas le nom des victimes pour ne pas être biaisé)</li><li>Einar les amène à Bryumnes</li><li>Leur conversation avec Billy avait été espionnée, les états sont en froids car ils pensent que les autres font des armes contre eux</li></ul>\n<p>La guerre</p>\n<ul><li>Elle veut les tester pour voir s'ils ont une chance de réussir leur mission</li><li>Les garder à Ovliin est trop dangereux pour le peuple, Bryumnes veut les dégager</li><li>Ils doivent attendre 3 jours le temps qu'elle récupère des infos sur Tarquin Alsyon</li></ul>"}

	</section>
{/snippet}

{#snippet joueurs()}
	<section>
		<h2 id="joueurs">{@html "Joueurs"}</h2>
	{@html applyBase("<ul><li><input type=\"checkbox\" disabled> Diego 9</li><li><input type=\"checkbox\" disabled checked> Loïc 7</li><li><input type=\"checkbox\" disabled checked> Lucas 2</li><li><input type=\"checkbox\" disabled checked> Michel 10</li><li><input type=\"checkbox\" disabled checked> Thomas 9</li><li><input type=\"checkbox\" disabled> William 4</li></ul>\n<div class=\"table-scroll\"><table><thead><tr><th>Précédent</th><th>Suivant</th></tr></thead><tbody><tr><td><a href=\"%%BASE%%/Jeu/Sessions du Masque/Arc 2/Arc 2 - 07 - 21.05.25\" class=\"wiki-link internal-link\" data-wiki-href=\"/Jeu/Sessions du Masque/Arc 2/Arc 2 - 07 - 21.05.25\" data-wiki-fragment=\"\">Arc 2 - 07 - 21.05.25</a></td><td><a href=\"%%BASE%%/Jeu/Sessions du Masque/Arc 2/Arc 2 - 09 - 13.06.25\" class=\"wiki-link internal-link\" data-wiki-href=\"/Jeu/Sessions du Masque/Arc 2/Arc 2 - 09 - 13.06.25\" data-wiki-fragment=\"\">Arc 2 - 09 - 13.06.25</a></td></tr></tbody></table></div>")}

	</section>
{/snippet}
