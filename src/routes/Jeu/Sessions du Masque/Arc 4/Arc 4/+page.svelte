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
          "id": "sessions",
          "text": "Sessions",
          "level": 2
      }
  ]);

  onDestroy(() => tocHeadings.set([]));
</script>

<svelte:head>
  <title>{"Arc 4"}</title>
</svelte:head>

<article class="md-page">
  <header class="md-header">
    <h1>{"Arc 4"}</h1>
  </header>
  <div class="markdown-rendered">
		{@render dtails()}
		{@render sessions()}
  </div>
</article>

<LinkPreview />

{#snippet dtails()}
	<section>
		<h2 id="dtails">{@html "Détails"}</h2>
	{@html applyBase("<p>Lieu actuel : <a href=\"%%BASE%%/Geographie/Nirina/Nirina\" class=\"wiki-link internal-link\" data-wiki-href=\"/Geographie/Nirina/Nirina\" data-wiki-fragment=\"\">Nirina</a></p>\n<p>Objectif.s : Enquêter sur le culte du masque et leurs armes pour le maîtriser, Abattre le Magala</p>\n<p>Pnjs notables : <span class=\"wiki-unresolved\">Syrithia</span>,</p>\n<p>Boss final : </p>")}

	</section>
{/snippet}

{#snippet sessions()}
	<section>
		<h2 id="sessions">{@html "Sessions"}</h2>
	{@html applyBase("<p><a href=\"%%BASE%%/Jeu/Sessions du Masque/Arc 4/Arc 4 - 18 - 02.01.26\" class=\"wiki-link internal-link\" data-wiki-href=\"/Jeu/Sessions du Masque/Arc 4/Arc 4 - 18 - 02.01.26\" data-wiki-fragment=\"\">Arc 4 - 18 - 02.01.26</a></p>\n<p><a href=\"%%BASE%%/Jeu/Sessions du Masque/Arc 4/Arc 4 - 19 - 23.01.26\" class=\"wiki-link internal-link\" data-wiki-href=\"/Jeu/Sessions du Masque/Arc 4/Arc 4 - 19 - 23.01.26\" data-wiki-fragment=\"\">Arc 4 - 19 - 23.01.26</a></p>\n<div class=\"table-scroll\"><table><thead><tr><th>Précédent</th><th>Suivant</th></tr></thead><tbody><tr><td><a href=\"%%BASE%%/Jeu/Sessions du Masque/Arc 3/Arc 3\" class=\"wiki-link internal-link\" data-wiki-href=\"/Jeu/Sessions du Masque/Arc 3/Arc 3\" data-wiki-fragment=\"\">Arc 3</a></td><td><span class=\"wiki-unresolved\">Arc 5</span></td></tr></tbody></table></div>")}

	</section>
{/snippet}
