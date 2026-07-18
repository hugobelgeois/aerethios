<script lang="ts">
  import { onDestroy } from "svelte";
  import { tocHeadings } from "$lib/stores";
  import { renderMarkdown } from "$lib/markdownRenderer";
  import LinkPreview from "$lib/LinkPreview.svelte";
  import EmbedBlock from "$lib/EmbedBlock.svelte";

  tocHeadings.set([
      {
          "id": "spcialisations",
          "text": "Spécialisations",
          "level": 2
      },
      {
          "id": "cartographe",
          "text": "Cartographe",
          "level": 3
      },
      {
          "id": "chasseur",
          "text": "Chasseur",
          "level": 3
      },
      {
          "id": "equitation",
          "text": "Equitation",
          "level": 3
      },
      {
          "id": "natation",
          "text": "Natation",
          "level": 3
      },
      {
          "id": "navigation",
          "text": "Navigation",
          "level": 3
      }
  ]);

  onDestroy(() => tocHeadings.set([]));
</script>

<svelte:head>
  <title>Exploration</title>
</svelte:head>

<article class="md-page">
  <header class="md-header">
    <h1>Exploration</h1>
  </header>
  <div class="markdown-rendered">
		{@render preamble()}
		{@render spcialisations()}
  </div>
</article>

<LinkPreview />

{#snippet preamble()}
	{@html renderMarkdown(">L’exploration a pour objectif de **faciliter les déplacements à travers le monde**.\n")}
{/snippet}

{#snippet spcialisations()}
	<section>
		<h2 id="spcialisations">Spécialisations</h2>

	{@render cartographe()}
	{@render chasseur()}
	{@render equitation()}
	{@render natation()}
	{@render navigation()}
	</section>
{/snippet}

{#snippet cartographe()}
	<section>
		<h3 id="cartographe"><span class="wiki-unresolved">Cartographe</span></h3>


	</section>
{/snippet}

{#snippet chasseur()}
	<section>
		<h3 id="chasseur"><span class="wiki-unresolved">Chasseur</span></h3>


	</section>
{/snippet}

{#snippet equitation()}
	<section>
		<h3 id="equitation"><span class="wiki-unresolved">Equitation</span></h3>


	</section>
{/snippet}

{#snippet natation()}
	<section>
		<h3 id="natation"><span class="wiki-unresolved">Natation</span></h3>


	</section>
{/snippet}

{#snippet navigation()}
	<section>
		<h3 id="navigation"><span class="wiki-unresolved">Navigation</span></h3>


	</section>
{/snippet}
