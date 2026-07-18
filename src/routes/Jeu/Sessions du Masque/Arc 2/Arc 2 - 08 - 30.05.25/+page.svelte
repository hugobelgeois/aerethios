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
  <title>Arc 2 - 08 - 30.05.25</title>
</svelte:head>

<article class="md-page">
  <header class="md-header">
    <h1>Arc 2 - 08 - 30.05.25</h1>
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
	{@html renderMarkdown("\nLieu actuel : Ovliin, Ruvik\n\nObjectif : Chercher Orvain Thessarion à Ruvik\n\nPnjs notables : Bryumnes, Einar, Orvain Thessarion\n")}

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
	{@html renderMarkdown("\nCapitale\n- Chercher Orvain Thessarion\n- Emmené par l'Eglise pour expérimentation illégale\n- Exécuté par Einar (ne connaît pas le nom des victimes pour ne pas être biaisé)\n- Einar les amène à Bryumnes\n- Leur conversation avec Billy avait été espionnée, les états sont en froids car ils pensent que les autres font des armes contre eux\n\nLa guerre\n- Elle veut les tester pour voir s'ils ont une chance de réussir leur mission\n- Les garder à Ovliin est trop dangereux pour le peuple, Bryumnes veut les dégager\n- Ils doivent attendre 3 jours le temps qu'elle récupère des infos sur Tarquin Alsyon\n")}

	</section>
{/snippet}

{#snippet joueurs()}
	<section>
		<h2 id="joueurs">{@html applyBase("Joueurs")}</h2>
	{@html renderMarkdown("\n- [ ] Diego 9\n- [x] Loïc 7\n- [x] Lucas 2\n- [x] Michel 10\n- [x] Thomas 9\n- [ ] William 4\n\n|     Précédent     |      Suivant      |\n| :---------------: | :---------------: |\n| <a href=\"%%BASE%%/Jeu/Sessions du Masque/Arc 2/Arc 2 - 07 - 21.05.25\" class=\"wiki-link internal-link\" data-wiki-href=\"/Jeu/Sessions du Masque/Arc 2/Arc 2 - 07 - 21.05.25\" data-wiki-fragment=\"\">Arc 2 - 07 - 21.05.25</a> | <a href=\"%%BASE%%/Jeu/Sessions du Masque/Arc 2/Arc 2 - 09 - 13.06.25\" class=\"wiki-link internal-link\" data-wiki-href=\"/Jeu/Sessions du Masque/Arc 2/Arc 2 - 09 - 13.06.25\" data-wiki-fragment=\"\">Arc 2 - 09 - 13.06.25</a> |")}

	</section>
{/snippet}
