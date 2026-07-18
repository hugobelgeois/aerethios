<script lang="ts">
  import { onDestroy } from "svelte";
  import { tocHeadings } from "$lib/stores";
  import { renderMarkdown } from "$lib/markdownRenderer";
  import LinkPreview from "$lib/LinkPreview.svelte";
  import EmbedBlock from "$lib/EmbedBlock.svelte";

  tocHeadings.set([
      {
          "id": "vampires",
          "text": "Vampires",
          "level": 1
      },
      {
          "id": "gobelins",
          "text": "Gobelins",
          "level": 1
      },
      {
          "id": "esprits",
          "text": "Esprits",
          "level": 1
      },
      {
          "id": "spectres",
          "text": "Spectres",
          "level": 1
      },
      {
          "id": "dieux",
          "text": "Dieux",
          "level": 1
      },
      {
          "id": "possds",
          "text": "Possédés",
          "level": 1
      },
      {
          "id": "ressuscits",
          "text": "Ressuscités",
          "level": 1
      },
      {
          "id": "liches",
          "text": "Liches",
          "level": 1
      },
      {
          "id": "vampires",
          "text": "Vampires",
          "level": 1
      }
  ]);

  onDestroy(() => tocHeadings.set([]));
</script>

<svelte:head>
  <title>Planaires</title>
</svelte:head>

<article class="md-page">
  <header class="md-header">
    <h1>Planaires</h1>
  </header>
  <div class="markdown-rendered">
		{@render vampires()}
		{@render gobelins()}
		{@render esprits()}
		{@render spectres()}
		{@render dieux()}
		{@render possds()}
		{@render ressuscits()}
		{@render liches()}
		{@render vampires_2()}
  </div>
</article>

<LinkPreview />

{#snippet vampires()}
	<section>
		<h1 id="vampires"><span class="wiki-unresolved">Vampires</span></h1>


	</section>
{/snippet}

{#snippet gobelins()}
	<section>
		<h1 id="gobelins"><span class="wiki-unresolved">Gobelins</span></h1>


	</section>
{/snippet}

{#snippet esprits()}
	<section>
		<h1 id="esprits"><span class="wiki-unresolved">Esprits</span></h1>


	</section>
{/snippet}

{#snippet spectres()}
	<section>
		<h1 id="spectres"><span class="wiki-unresolved">Spectres</span></h1>
	{@html renderMarkdown("\nune âme libre non dangereuse dans cet état\n")}

	</section>
{/snippet}

{#snippet dieux()}
	<section>
		<h1 id="dieux"><a href="/0_Private/Dieux" class="wiki-link internal-link" data-wiki-href="/0_Private/Dieux" data-wiki-fragment="">Dieux</a></h1>


	</section>
{/snippet}

{#snippet possds()}
	<section>
		<h1 id="possds"><span class="wiki-unresolved">Possédés</span></h1>
	{@html renderMarkdown("\nune âme possède un vivant et remplace son âme\n")}

	</section>
{/snippet}

{#snippet ressuscits()}
	<section>
		<h1 id="ressuscits"><span class="wiki-unresolved">Ressuscités</span></h1>
	{@html renderMarkdown("\nune âme récupère son corps d'origine\n")}

	</section>
{/snippet}

{#snippet liches()}
	<section>
		<h1 id="liches"><span class="wiki-unresolved">Liches</span></h1>
	{@html renderMarkdown("\nsorcier qui s'est séparé de son âme\n")}

	</section>
{/snippet}

{#snippet vampires_2()}
	<section>
		<h1 id="vampires"><span class="wiki-unresolved">Vampires</span></h1>


	</section>
{/snippet}
