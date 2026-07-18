<script lang="ts">
  import { onDestroy } from "svelte";
  import { tocHeadings } from "$lib/stores";
  import { renderMarkdown } from "$lib/markdownRenderer";
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
  <title>Arc 3 - 12 - 19.09.25</title>
</svelte:head>

<article class="md-page">
  <header class="md-header">
    <h1>Arc 3 - 12 - 19.09.25</h1>
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
		<h2 id="dtails">Détails</h2>
	{@html renderMarkdown("\nLieu actuel : Suraja, ville au sud d'Irkma\n\nObjectif : Baiser le forgeron pour récupérer son minerai en mithril\n\nPnjs notables : -\n")}

	</section>
{/snippet}

{#snippet scnario()}
	<section>
		<h2 id="scnario">Scénario</h2>


	</section>
{/snippet}

{#snippet notes()}
	<section>
		<h2 id="notes">Notes</h2>
	{@html renderMarkdown("\n__Equilibrage__\nRetirer les armes en mithril et remettre les anciennes\nLe forgeron possède un minerai rare dans une vitrine qui pourrait faire 3 lingots\nLe minerai a une valeur sentimentale et coûte cher\n\nConvois de carapaces pour aller à Irkma\n")}

	</section>
{/snippet}

{#snippet joueurs()}
	<section>
		<h2 id="joueurs">Joueurs</h2>
	{@html renderMarkdown("\n- [x] Diego 13\n- [ ] Loïc 9\n- [x] Lucas 3\n- [x] Michel 14\n- [x] Nolan 2\n- [x] Thomas 13\n- [x] William 6\n\n|     Précédent     |      Suivant      |\n| :---------------: | :---------------: |\n| <a href=\"/Jeu/Sessions du Masque/Arc 3/Arc 3 - 13 - 29.08.25\" class=\"wiki-link internal-link\" data-wiki-href=\"/Jeu/Sessions du Masque/Arc 3/Arc 3 - 13 - 29.08.25\" data-wiki-fragment=\"\">Arc 3 - 13 - 29.08.25</a> | <a href=\"/Jeu/Sessions du Masque/Arc 3/Arc 3 - 13b - 03.10.25\" class=\"wiki-link internal-link\" data-wiki-href=\"/Jeu/Sessions du Masque/Arc 3/Arc 3 - 13b - 03.10.25\" data-wiki-fragment=\"\">Arc 3 - 13b - 03.10.25</a> |")}

	</section>
{/snippet}
