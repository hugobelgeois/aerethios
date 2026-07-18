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
  <title>Arc 2 - 09 - 13.06.25</title>
</svelte:head>

<article class="md-page">
  <header class="md-header">
    <h1>Arc 2 - 09 - 13.06.25</h1>
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
	{@html renderMarkdown("> Résumé\n")}
{/snippet}

{#snippet dtails()}
	<section>
		<h2 id="dtails">{@html applyBase("Détails")}</h2>
	{@html renderMarkdown("\nLieu actuel : Ovliin, Ruvik\n\nObjectif : S'occuper en attendant que Bryumnes trouve des infos sur Tarquin Alsyon\n\nPnjs notables : Bryumnes\n")}

	</section>
{/snippet}

{#snippet scnario()}
	<section>
		<h2 id="scnario">{@html applyBase("Scénario")}</h2>


	</section>
{/snippet}

{#snippet notes()}
	<section>
		<h2 id="notes">{@html applyBase("Notes")}</h2>
	{@html renderMarkdown("\nEn attendant les 3 jours, ils vont faire une quête pour abattre une des créature d'Orvain Thessarion qui se serait échappée\n- Combat contre 1 Owlbear horrifique\n- Un deuxième car malus\n\n*ombat contre Owlbear**\n> Armure : 4\n> Arme : 4 + D10\n> Esquive : > 8\n\nRetour à Ruvik, les infos de Bryumnes :\n- Tarquin Alsyon n'est pas une personne, mais un groupe\n- Elle peut les tp là où ils doivent se rendre, mais il faut aller chez une connaissance qui lui est redevable\n")}

	</section>
{/snippet}

{#snippet joueurs()}
	<section>
		<h2 id="joueurs">{@html applyBase("Joueurs")}</h2>
	{@html renderMarkdown("\n- [x] Diego 10\n- [x] Loïc 8\n- [x] Michel 11\n- [x] Thomas 10\n- [ ] William 4\n\n|     Précédent     |      Suivant      |\n| :---------------: | :---------------: |\n| <a href=\"%%BASE%%/Jeu/Sessions du Masque/Arc 2/Arc 2 - 08 - 30.05.25\" class=\"wiki-link internal-link\" data-wiki-href=\"/Jeu/Sessions du Masque/Arc 2/Arc 2 - 08 - 30.05.25\" data-wiki-fragment=\"\">Arc 2 - 08 - 30.05.25</a> | <a href=\"%%BASE%%/Jeu/Sessions du Masque/Arc 2/Arc 2 - 09b - 27.06.25\" class=\"wiki-link internal-link\" data-wiki-href=\"/Jeu/Sessions du Masque/Arc 2/Arc 2 - 09b - 27.06.25\" data-wiki-fragment=\"\">Arc 2 - 09b - 27.06.25</a> |")}

	</section>
{/snippet}
