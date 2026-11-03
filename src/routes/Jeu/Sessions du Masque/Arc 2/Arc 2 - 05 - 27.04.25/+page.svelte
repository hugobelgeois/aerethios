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
  <title>{"Arc 2 - 05 - 27.04.25"}</title>
</svelte:head>

<article class="md-page">
  <header class="md-header">
    <h1>{"Arc 2 - 05 - 27.04.25"}</h1>
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
	{@html "<blockquote>Combat contre le Goss Harag</blockquote>"}
{/snippet}

{#snippet dtails()}
	<section>
		<h2 id="dtails">{@html "Détails"}</h2>
	{@html "<p>Lieu actuel : Ovliin, les terres d'Orvain, entre Siv, Bizmor et Ruvik</p>\n<p>Objectif : Combattre le Goss Harag et trouver des infos sur Orvain</p>\n<p>Pnjs notables : -</p>"}

	</section>
{/snippet}

{#snippet scnario()}
	<section>
		<h2 id="scnario">{@html "Scénario"}</h2>
	{@html "<p>J-41<br>Combat contre Harag</p>"}

	</section>
{/snippet}

{#snippet notes()}
	<section>
		<h2 id="notes">{@html "Notes"}</h2>
	{@html "<p><strong>Combat contre Goss Harag</strong></p>\n<blockquote>Armure : 14 (16 tête et bras avant)<br>Arme : 8 +D6 (D8 quand enragé)</blockquote>\n<p>Le monstre finit par se replier dans sa tanière<br>\nDedans on y trouve un laboratoire beaucoup plus sophistiqué que celui de la maison<br>\nIl y a le chien de Full Metal Alchemist</p>\n<p>Le monstre est retourné se soigner dans sa cuve, ils peuvent l'achever ou le laisser là<br>\nIls trouvent le journal d'Orvain, qui dit qu'il est parti à la capital, Ruvik<br>\nPour s'y rendre, il suffit de se diriger vers la montagne qui fume au nord (ils sont dans la région rocheuse entre Bizmor et Ruvik)</p>"}

	</section>
{/snippet}

{#snippet joueurs()}
	<section>
		<h2 id="joueurs">{@html "Joueurs"}</h2>
	{@html applyBase("<ul><li><input type=\"checkbox\" disabled checked> Diego 7</li><li><input type=\"checkbox\" disabled checked> Loïc 5</li><li><input type=\"checkbox\" disabled checked> Michel 7</li><li><input type=\"checkbox\" disabled checked> Thomas 7</li><li><input type=\"checkbox\" disabled> William 3</li></ul>\n<div class=\"table-scroll\"><table><thead><tr><th>Précédent</th><th>Suivant</th></tr></thead><tbody><tr><td></td><td><a href=\"%%BASE%%/Jeu/Sessions du Masque/Arc 2/Arc 2 - 06 - 18.05.25\" class=\"wiki-link internal-link\" data-wiki-href=\"/Jeu/Sessions du Masque/Arc 2/Arc 2 - 06 - 18.05.25\" data-wiki-fragment=\"\">Arc 2 - 06 - 18.05.25</a></td></tr></tbody></table></div>")}

	</section>
{/snippet}
