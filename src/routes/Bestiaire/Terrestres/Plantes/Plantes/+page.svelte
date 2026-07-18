<script lang="ts">
  import { onDestroy } from "svelte";
  import { tocHeadings } from "$lib/stores";
  import { applyBase, renderMarkdown } from "$lib/markdownRenderer";
  import LinkPreview from "$lib/LinkPreview.svelte";
  import EmbedBlock from "$lib/EmbedBlock.svelte";

  tocHeadings.set([
      {
          "id": "fixes",
          "text": "Fixées",
          "level": 1
      },
      {
          "id": "animes",
          "text": "Animées",
          "level": 1
      },
      {
          "id": "parasites",
          "text": "Parasites",
          "level": 1
      }
  ]);

  onDestroy(() => tocHeadings.set([]));
</script>

<svelte:head>
  <title>Plantes</title>
</svelte:head>

<article class="md-page">
  <header class="md-header">
    <h1>Plantes</h1>
  </header>
  <div class="markdown-rendered">
		{@render preamble()}
		{@render fixes()}
		{@render animes()}
		{@render parasites()}
  </div>
</article>

<LinkPreview />

{#snippet preamble()}
	{@html renderMarkdown("Définit les créatures dont le sang est remplacé par de la sève (entre autre) et qui ne possèdent pas d'organes.\n")}
{/snippet}

{#snippet fixes()}
	<section>
		<h1 id="fixes">{@html applyBase("Fixées")}</h1>
	{@html renderMarkdown("\nagissent lentement, ex. carnivores, lianes constricteurs\n")}

	</section>
{/snippet}

{#snippet animes()}
	<section>
		<h1 id="animes">{@html applyBase("Animées")}</h1>
	{@html renderMarkdown("\nformes animales ou humanoïdes, ex. homme-champignon, dryades\n")}

	</section>
{/snippet}

{#snippet parasites()}
	<section>
		<h1 id="parasites">{@html applyBase("Parasites")}</h1>


	</section>
{/snippet}
