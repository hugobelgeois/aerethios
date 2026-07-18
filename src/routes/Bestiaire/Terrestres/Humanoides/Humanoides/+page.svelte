<script lang="ts">
  import { onDestroy } from "svelte";
  import { tocHeadings } from "$lib/stores";
  import { applyBase, renderMarkdown } from "$lib/markdownRenderer";
  import LinkPreview from "$lib/LinkPreview.svelte";
  import EmbedBlock from "$lib/EmbedBlock.svelte";

  tocHeadings.set([
      {
          "id": "humain",
          "text": "Humain",
          "level": 2
      },
      {
          "id": "nain",
          "text": "Nain",
          "level": 2
      },
      {
          "id": "elfe",
          "text": "Elfe",
          "level": 2
      },
      {
          "id": "orc",
          "text": "Orc",
          "level": 2
      },
      {
          "id": "calico",
          "text": "Calico",
          "level": 2
      }
  ]);

  onDestroy(() => tocHeadings.set([]));
</script>

<svelte:head>
  <title>Humanoïdes</title>
</svelte:head>

<article class="md-page">
  <header class="md-header">
    <h1>Humanoïdes</h1>
  </header>
  <div class="markdown-rendered">
		{@render preamble()}
		{@render humain()}
		{@render nain()}
		{@render elfe()}
		{@render orc()}
		{@render calico()}
  </div>
</article>

<LinkPreview />

{#snippet preamble()}
	{@html renderMarkdown(">Définit les entités se tenant debout dotées d'une intelligence sociale inter-espèce\n")}
{/snippet}

{#snippet humain()}
	<section>
		<h2 id="humain">{@html applyBase("<a href=\"%%BASE%%/Bestiaire/Terrestres/Humanoides/Humain\" class=\"wiki-link internal-link\" data-wiki-href=\"/Bestiaire/Terrestres/Humanoides/Humain\" data-wiki-fragment=\"\">Humain</a>")}</h2>


	</section>
{/snippet}

{#snippet nain()}
	<section>
		<h2 id="nain">{@html applyBase("<a href=\"%%BASE%%/Bestiaire/Terrestres/Humanoides/Nain\" class=\"wiki-link internal-link\" data-wiki-href=\"/Bestiaire/Terrestres/Humanoides/Nain\" data-wiki-fragment=\"\">Nain</a>")}</h2>


	</section>
{/snippet}

{#snippet elfe()}
	<section>
		<h2 id="elfe">{@html applyBase("<a href=\"%%BASE%%/Bestiaire/Terrestres/Humanoides/Elfe\" class=\"wiki-link internal-link\" data-wiki-href=\"/Bestiaire/Terrestres/Humanoides/Elfe\" data-wiki-fragment=\"\">Elfe</a>")}</h2>


	</section>
{/snippet}

{#snippet orc()}
	<section>
		<h2 id="orc">{@html applyBase("<a href=\"%%BASE%%/Bestiaire/Terrestres/Humanoides/Orc\" class=\"wiki-link internal-link\" data-wiki-href=\"/Bestiaire/Terrestres/Humanoides/Orc\" data-wiki-fragment=\"\">Orc</a>")}</h2>


	</section>
{/snippet}

{#snippet calico()}
	<section>
		<h2 id="calico">{@html applyBase("<a href=\"%%BASE%%/Bestiaire/Terrestres/Humanoides/Calico\" class=\"wiki-link internal-link\" data-wiki-href=\"/Bestiaire/Terrestres/Humanoides/Calico\" data-wiki-fragment=\"\">Calico</a>")}</h2>


	</section>
{/snippet}
