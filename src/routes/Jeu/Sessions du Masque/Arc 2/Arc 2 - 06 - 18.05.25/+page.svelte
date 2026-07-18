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
  <title>Arc 2 - 06 - 18.05.25</title>
</svelte:head>

<article class="md-page">
  <header class="md-header">
    <h1>Arc 2 - 06 - 18.05.25</h1>
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
	{@html renderMarkdown("\nLieu actuel : Ovliin, voyage entre Siv et Ruvik\n\nObjectif : Rejoindre Ruvik pour se renseigner sur Orvain\n\nPnjs notables : Einar\n")}

	</section>
{/snippet}

{#snippet scnario()}
	<section>
		<h2 id="scnario">{@html applyBase("Scénario")}</h2>
	{@html renderMarkdown("\nJ-41  \nVoyage vers Ruvik  \n  \nJ-43  \nRencontre d'un Gammoth  \nDara utilise les ténèbres pour qu'il attaque son troupeau  \n  \nJ-48  \nRencontre de Einar qui les héberge, les nourri et les emmène à la capitale\n")}

	</section>
{/snippet}

{#snippet notes()}
	<section>
		<h2 id="notes">{@html applyBase("Notes")}</h2>
	{@html renderMarkdown("\nVoyage vers la capitale\n- Troupeau de mamouthons et un Gammoth\n- Vivres limités\n\nPlus loin, ils arrivent sur la route principale et tombent sur une maison\nDedans se trouve Einar\nIl doit aller à la capitale pour faire son travail de bourreau, il en profitera pour dire bonjour à sa fille Bryumnes, chef de guerre d'Ovliin\n\nVoyage\n- S'ils se font attaquer, Einar ne se bat pas car il ne veut plus tuer s'il n'est pas sûr des méfaits d'une personne\n")}

	</section>
{/snippet}

{#snippet joueurs()}
	<section>
		<h2 id="joueurs">{@html applyBase("Joueurs")}</h2>
	{@html renderMarkdown("\n- [x] Diego 8\n- [ ] Loïc 5\n- [x] Michel 8\n- [x] Thomas 8\n- [ ] William 3\n\n|     Précédent     |      Suivant      |\n| :---------------: | :---------------: |\n| <a href=\"%%BASE%%/Jeu/Sessions du Masque/Arc 2/Arc 2 - 05 - 27.04.25\" class=\"wiki-link internal-link\" data-wiki-href=\"/Jeu/Sessions du Masque/Arc 2/Arc 2 - 05 - 27.04.25\" data-wiki-fragment=\"\">Arc 2 - 05 - 27.04.25</a> | <a href=\"%%BASE%%/Jeu/Sessions du Masque/Arc 2/Arc 2 - 07 - 21.05.25\" class=\"wiki-link internal-link\" data-wiki-href=\"/Jeu/Sessions du Masque/Arc 2/Arc 2 - 07 - 21.05.25\" data-wiki-fragment=\"\">Arc 2 - 07 - 21.05.25</a> |")}

	</section>
{/snippet}
