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
  <title>{"Arc 2 - 09 - 13.06.25"}</title>
</svelte:head>

<article class="md-page">
  <header class="md-header">
    <h1>{"Arc 2 - 09 - 13.06.25"}</h1>
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
	{@html "<p>Lieu actuel : Ovliin, Ruvik</p>\n<p>Objectif : S'occuper en attendant que Bryumnes trouve des infos sur Tarquin Alsyon</p>\n<p>Pnjs notables : Bryumnes</p>"}

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
	{@html "<p>En attendant les 3 jours, ils vont faire une quête pour abattre une des créature d'Orvain Thessarion qui se serait échappée</p>\n<ul><li>Combat contre 1 Owlbear horrifique</li><li>Un deuxième car malus</li></ul>\n<p><em>ombat contre Owlbear</em>*</p>\n<blockquote>Armure : 4<br>Arme : 4 + D10<br>Esquive : > 8</blockquote>\n<p>Retour à Ruvik, les infos de Bryumnes :</p>\n<ul><li>Tarquin Alsyon n'est pas une personne, mais un groupe</li><li>Elle peut les tp là où ils doivent se rendre, mais il faut aller chez une connaissance qui lui est redevable</li></ul>"}

	</section>
{/snippet}

{#snippet joueurs()}
	<section>
		<h2 id="joueurs">{@html "Joueurs"}</h2>
	{@html applyBase("<ul><li><input type=\"checkbox\" disabled checked> Diego 10</li><li><input type=\"checkbox\" disabled checked> Loïc 8</li><li><input type=\"checkbox\" disabled checked> Michel 11</li><li><input type=\"checkbox\" disabled checked> Thomas 10</li><li><input type=\"checkbox\" disabled> William 4</li></ul>\n<div class=\"table-scroll\"><table><thead><tr><th>Précédent</th><th>Suivant</th></tr></thead><tbody><tr><td><a href=\"%%BASE%%/Jeu/Sessions du Masque/Arc 2/Arc 2 - 08 - 30.05.25\" class=\"wiki-link internal-link\" data-wiki-href=\"/Jeu/Sessions du Masque/Arc 2/Arc 2 - 08 - 30.05.25\" data-wiki-fragment=\"\">Arc 2 - 08 - 30.05.25</a></td><td><a href=\"%%BASE%%/Jeu/Sessions du Masque/Arc 2/Arc 2 - 09b - 27.06.25\" class=\"wiki-link internal-link\" data-wiki-href=\"/Jeu/Sessions du Masque/Arc 2/Arc 2 - 09b - 27.06.25\" data-wiki-fragment=\"\">Arc 2 - 09b - 27.06.25</a></td></tr></tbody></table></div>")}

	</section>
{/snippet}
