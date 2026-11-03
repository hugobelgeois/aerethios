<script lang="ts">
  import { onDestroy } from "svelte";
  import { tocHeadings } from "$lib/stores";
  import { applyBase } from "$lib/basePath";
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
  <title>{"Planaires"}</title>
</svelte:head>

<article class="md-page">
  <header class="md-header">
    <h1>{"Planaires"}</h1>
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
		<h1 id="vampires">{@html "<span class=\"wiki-unresolved\">Vampires</span>"}</h1>


	</section>
{/snippet}

{#snippet gobelins()}
	<section>
		<h1 id="gobelins">{@html "<span class=\"wiki-unresolved\">Gobelins</span>"}</h1>


	</section>
{/snippet}

{#snippet esprits()}
	<section>
		<h1 id="esprits">{@html "<span class=\"wiki-unresolved\">Esprits</span>"}</h1>


	</section>
{/snippet}

{#snippet spectres()}
	<section>
		<h1 id="spectres">{@html "<span class=\"wiki-unresolved\">Spectres</span>"}</h1>
	{@html "<p>une âme libre non dangereuse dans cet état</p>"}

	</section>
{/snippet}

{#snippet dieux()}
	<section>
		<h1 id="dieux">{@html applyBase("<a href=\"%%BASE%%/Bestiaire/Planaires/Dieux/Dieux\" class=\"wiki-link internal-link\" data-wiki-href=\"/Bestiaire/Planaires/Dieux/Dieux\" data-wiki-fragment=\"\">Dieux</a>")}</h1>


	</section>
{/snippet}

{#snippet possds()}
	<section>
		<h1 id="possds">{@html "<span class=\"wiki-unresolved\">Possédés</span>"}</h1>
	{@html "<p>une âme possède un vivant et remplace son âme</p>"}

	</section>
{/snippet}

{#snippet ressuscits()}
	<section>
		<h1 id="ressuscits">{@html "<span class=\"wiki-unresolved\">Ressuscités</span>"}</h1>
	{@html "<p>une âme récupère son corps d'origine</p>"}

	</section>
{/snippet}

{#snippet liches()}
	<section>
		<h1 id="liches">{@html "<span class=\"wiki-unresolved\">Liches</span>"}</h1>
	{@html "<p>sorcier qui s'est séparé de son âme</p>"}

	</section>
{/snippet}

{#snippet vampires_2()}
	<section>
		<h1 id="vampires">{@html "<span class=\"wiki-unresolved\">Vampires</span>"}</h1>


	</section>
{/snippet}
