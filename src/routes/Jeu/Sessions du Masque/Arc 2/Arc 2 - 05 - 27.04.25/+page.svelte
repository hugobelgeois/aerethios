<script lang="ts">
  import { onDestroy } from "svelte";
  import { tocHeadings } from "$lib/stores";
  import { applyBase, renderMarkdown } from "$lib/markdownRenderer";
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
  <title>Arc 2 - 05 - 27.04.25</title>
</svelte:head>

<article class="md-page">
  <header class="md-header">
    <h1>Arc 2 - 05 - 27.04.25</h1>
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
	{@html renderMarkdown("> Combat contre le Goss Harag\n")}
{/snippet}

{#snippet dtails()}
	<section>
		<h2 id="dtails">{@html applyBase("Détails")}</h2>
	{@html renderMarkdown("\nLieu actuel : Ovliin, les terres d'Orvain, entre Siv, Bizmor et Ruvik\n\nObjectif : Combattre le Goss Harag et trouver des infos sur Orvain\n\nPnjs notables : -\n")}

	</section>
{/snippet}

{#snippet scnario()}
	<section>
		<h2 id="scnario">{@html applyBase("Scénario")}</h2>
	{@html renderMarkdown("\nJ-41  \nCombat contre Harag\n")}

	</section>
{/snippet}

{#snippet notes()}
	<section>
		<h2 id="notes">{@html applyBase("Notes")}</h2>
	{@html renderMarkdown("\n**Combat contre Goss Harag**\n> Armure : 14 (16 tête et bras avant)\n> Arme : 8 +D6 (D8 quand enragé)\n\nLe monstre finit par se replier dans sa tanière\nDedans on y trouve un laboratoire beaucoup plus sophistiqué que celui de la maison\nIl y a le chien de Full Metal Alchemist\n\nLe monstre est retourné se soigner dans sa cuve, ils peuvent l'achever ou le laisser là\nIls trouvent le journal d'Orvain, qui dit qu'il est parti à la capital, Ruvik\nPour s'y rendre, il suffit de se diriger vers la montagne qui fume au nord (ils sont dans la région rocheuse entre Bizmor et Ruvik)\n")}

	</section>
{/snippet}

{#snippet joueurs()}
	<section>
		<h2 id="joueurs">{@html applyBase("Joueurs")}</h2>
	{@html renderMarkdown("\n- [x] Diego 7\n- [x] Loïc 5\n- [x] Michel 7\n- [x] Thomas 7\n- [ ] William 3\n\n| Précédent |          Suivant          |\n| :-------: | :-----------------------: |\n|           | <a href=\"%%BASE%%/Jeu/Sessions du Masque/Arc 2/Arc 2 - 06 - 18.05.25\" class=\"wiki-link internal-link\" data-wiki-href=\"/Jeu/Sessions du Masque/Arc 2/Arc 2 - 06 - 18.05.25\" data-wiki-fragment=\"\">Arc 2 - 06 - 18.05.25</a> |\n")}

	</section>
{/snippet}
