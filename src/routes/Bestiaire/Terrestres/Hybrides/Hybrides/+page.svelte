<script lang="ts">
  import { onDestroy } from "svelte";
  import { tocHeadings } from "$lib/stores";
  import { applyBase, renderMarkdown } from "$lib/markdownRenderer";
  import LinkPreview from "$lib/LinkPreview.svelte";
  import EmbedBlock from "$lib/EmbedBlock.svelte";

  tocHeadings.set([
      {
          "id": "mutations--maladies",
          "text": "Mutations / Maladies",
          "level": 1
      },
      {
          "id": "evolutifs",
          "text": "Evolutifs",
          "level": 1
      },
      {
          "id": "symbiotiques",
          "text": "Symbiotiques",
          "level": 1
      },
      {
          "id": "hommes-btes",
          "text": "Hommes-bêtes",
          "level": 1
      },
      {
          "id": "chimres",
          "text": "Chimères",
          "level": 1
      }
  ]);

  onDestroy(() => tocHeadings.set([]));
</script>

<svelte:head>
  <title>Hybrides</title>
</svelte:head>

<article class="md-page">
  <header class="md-header">
    <h1>Hybrides</h1>
  </header>
  <div class="markdown-rendered">
		{@render preamble()}
		{@render mutations_Maladies()}
		{@render evolutifs()}
		{@render symbiotiques()}
		{@render hommesBtes()}
		{@render chimres()}
  </div>
</article>

<LinkPreview />

{#snippet preamble()}
	{@html renderMarkdown(">Définit les créatures ayant des origines venant d'au moins 2 espèces différentes.\n")}
{/snippet}

{#snippet mutations_Maladies()}
	<section>
		<h1 id="mutations--maladies">{@html applyBase("<span class=\"wiki-unresolved\">Mutations</span> / Maladies")}</h1>
	{@html renderMarkdown("\n- <a href=\"%%BASE%%/Bestiaire/Terrestres/Hybrides/Vampire\" class=\"wiki-link internal-link\" data-wiki-href=\"/Bestiaire/Terrestres/Hybrides/Vampire\" data-wiki-fragment=\"\">Vampire</a>\n")}

	</section>
{/snippet}

{#snippet evolutifs()}
	<section>
		<h1 id="evolutifs">{@html applyBase("<span class=\"wiki-unresolved\">Evolutifs</span>")}</h1>
	{@html renderMarkdown("\n- <a href=\"%%BASE%%/Bestiaire/Terrestres/Hybrides/Naga\" class=\"wiki-link internal-link\" data-wiki-href=\"/Bestiaire/Terrestres/Hybrides/Naga\" data-wiki-fragment=\"\">Naga</a>\n")}

	</section>
{/snippet}

{#snippet symbiotiques()}
	<section>
		<h1 id="symbiotiques">{@html applyBase("<span class=\"wiki-unresolved\">Symbiotiques</span>")}</h1>


	</section>
{/snippet}

{#snippet hommesBtes()}
	<section>
		<h1 id="hommes-btes">{@html applyBase("<span class=\"wiki-unresolved\">Hommes-bêtes</span>")}</h1>


	</section>
{/snippet}

{#snippet chimres()}
	<section>
		<h1 id="chimres">{@html applyBase("<span class=\"wiki-unresolved\">Chimères</span>")}</h1>


	</section>
{/snippet}
