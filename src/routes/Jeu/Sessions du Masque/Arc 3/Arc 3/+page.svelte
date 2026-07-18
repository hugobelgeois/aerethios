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
  <title>Arc 3</title>
</svelte:head>

<article class="md-page">
  <header class="md-header">
    <h1>Arc 3</h1>
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
	{@html renderMarkdown("\nLieu actuel : <a href=\"%%BASE%%/Geographie/Suraja/Suraja\" class=\"wiki-link internal-link\" data-wiki-href=\"/Geographie/Suraja/Suraja\" data-wiki-fragment=\"\">Suraja</a>\n\nObjectif : Abattre le Shara Ishvalda pour s'introduire dans le groupe Espers et se renseigner sur leur relation avec le masque\n\nPnjs notables : Billy, <span class=\"wiki-unresolved\">Raja</span>, Forgeron, <span class=\"wiki-unresolved\">Rysom Javak</span>, <span class=\"wiki-unresolved\">Chlorys</span>, <span class=\"wiki-unresolved\">Dieu Dormant</span>, <span class=\"wiki-unresolved\">Nocim</span>\n\nBoss final : <span class=\"wiki-unresolved\">Shara Ishvalda</span>\n")}

	</section>
{/snippet}

{#snippet sessions()}
	<section>
		<h2 id="sessions">Sessions</h2>
	{@html renderMarkdown("\n<a href=\"%%BASE%%/Jeu/Sessions du Masque/Arc 3/Arc 3 - 11 - 14.08.25\" class=\"wiki-link internal-link\" data-wiki-href=\"/Jeu/Sessions du Masque/Arc 3/Arc 3 - 11 - 14.08.25\" data-wiki-fragment=\"\">Arc 3 - 11 - 14.08.25</a>\n\n<a href=\"%%BASE%%/Jeu/Sessions du Masque/Arc 3/Arc 3 - 13 - 29.08.25\" class=\"wiki-link internal-link\" data-wiki-href=\"/Jeu/Sessions du Masque/Arc 3/Arc 3 - 13 - 29.08.25\" data-wiki-fragment=\"\">Arc 3 - 13 - 29.08.25</a>\n\n<a href=\"%%BASE%%/Jeu/Sessions du Masque/Arc 3/Arc 3 - 12 - 19.09.25\" class=\"wiki-link internal-link\" data-wiki-href=\"/Jeu/Sessions du Masque/Arc 3/Arc 3 - 12 - 19.09.25\" data-wiki-fragment=\"\">Arc 3 - 12 - 19.09.25</a>\n\n<a href=\"%%BASE%%/Jeu/Sessions du Masque/Arc 3/Arc 3 - 13b - 03.10.25\" class=\"wiki-link internal-link\" data-wiki-href=\"/Jeu/Sessions du Masque/Arc 3/Arc 3 - 13b - 03.10.25\" data-wiki-fragment=\"\">Arc 3 - 13b - 03.10.25</a>\n\n<a href=\"%%BASE%%/Jeu/Sessions du Masque/Arc 3/Arc 3 - 14 - 11.10.25\" class=\"wiki-link internal-link\" data-wiki-href=\"/Jeu/Sessions du Masque/Arc 3/Arc 3 - 14 - 11.10.25\" data-wiki-fragment=\"\">Arc 3 - 14 - 11.10.25</a>\n\n<a href=\"%%BASE%%/Jeu/Sessions du Masque/Arc 3/Arc 3 - 15 - 14.11.25\" class=\"wiki-link internal-link\" data-wiki-href=\"/Jeu/Sessions du Masque/Arc 3/Arc 3 - 15 - 14.11.25\" data-wiki-fragment=\"\">Arc 3 - 15 - 14.11.25</a>\n\n<a href=\"%%BASE%%/Jeu/Sessions du Masque/Arc 3/Arc 3 - 16 - 28.11.25\" class=\"wiki-link internal-link\" data-wiki-href=\"/Jeu/Sessions du Masque/Arc 3/Arc 3 - 16 - 28.11.25\" data-wiki-fragment=\"\">Arc 3 - 16 - 28.11.25</a>\n\n<a href=\"%%BASE%%/Jeu/Sessions du Masque/Arc 3/Arc 3 - 17 - 20.12.25\" class=\"wiki-link internal-link\" data-wiki-href=\"/Jeu/Sessions du Masque/Arc 3/Arc 3 - 17 - 20.12.25\" data-wiki-fragment=\"\">Arc 3 - 17 - 20.12.25</a>\n\n| Précédent |  Suivant  |\n| :-------: | :-------: |\n| <span class=\"wiki-unresolved\">Arc 2</span> | <a href=\"%%BASE%%/Jeu/Sessions du Masque/Arc 4/Arc 4\" class=\"wiki-link internal-link\" data-wiki-href=\"/Jeu/Sessions du Masque/Arc 4/Arc 4\" data-wiki-fragment=\"\">Arc 4</a> |")}

	</section>
{/snippet}
