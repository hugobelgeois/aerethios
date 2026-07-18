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
          "id": "sessions",
          "text": "Sessions",
          "level": 2
      }
  ]);

  onDestroy(() => tocHeadings.set([]));
</script>

<svelte:head>
  <title>Arc 4</title>
</svelte:head>

<article class="md-page">
  <header class="md-header">
    <h1>Arc 4</h1>
  </header>
  <div class="markdown-rendered">
		{@render dtails()}
		{@render sessions()}
  </div>
</article>

<LinkPreview />

{#snippet dtails()}
	<section>
		<h2 id="dtails">Détails</h2>
	{@html renderMarkdown("\nLieu actuel : <a href=\"%%BASE%%/Geographie/Nirina/Nirina\" class=\"wiki-link internal-link\" data-wiki-href=\"/Geographie/Nirina/Nirina\" data-wiki-fragment=\"\">Nirina</a>\n\nObjectif.s : Enquêter sur le culte du masque et leurs armes pour le maîtriser, Abattre le Magala\n\nPnjs notables : <span class=\"wiki-unresolved\">Syrithia</span>,\n\nBoss final : \n")}

	</section>
{/snippet}

{#snippet sessions()}
	<section>
		<h2 id="sessions">Sessions</h2>
	{@html renderMarkdown("\n<a href=\"%%BASE%%/Jeu/Sessions du Masque/Arc 4/Arc 4 - 18 - 02.01.26\" class=\"wiki-link internal-link\" data-wiki-href=\"/Jeu/Sessions du Masque/Arc 4/Arc 4 - 18 - 02.01.26\" data-wiki-fragment=\"\">Arc 4 - 18 - 02.01.26</a>\n\n<a href=\"%%BASE%%/Jeu/Sessions du Masque/Arc 4/Arc 4 - 19 - 23.01.26\" class=\"wiki-link internal-link\" data-wiki-href=\"/Jeu/Sessions du Masque/Arc 4/Arc 4 - 19 - 23.01.26\" data-wiki-fragment=\"\">Arc 4 - 19 - 23.01.26</a>\n\n| Précédent |  Suivant  |\n| :-------: | :-------: |\n| <a href=\"%%BASE%%/Jeu/Sessions du Masque/Arc 3/Arc 3\" class=\"wiki-link internal-link\" data-wiki-href=\"/Jeu/Sessions du Masque/Arc 3/Arc 3\" data-wiki-fragment=\"\">Arc 3</a> | <span class=\"wiki-unresolved\">Arc 5</span> |")}

	</section>
{/snippet}
