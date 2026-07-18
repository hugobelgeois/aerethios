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
          "id": "mdecine",
          "text": "Médecine",
          "level": 3
      }
  ]);

  onDestroy(() => tocHeadings.set([]));
</script>

<svelte:head>
  <title>Érudition</title>
</svelte:head>

<article class="md-page">
  <header class="md-header">
    <h1>Érudition</h1>
  </header>
  <div class="markdown-rendered">
		{@render preamble()}
		{@render spcialisations()}
  </div>
</article>

<LinkPreview />

{#snippet preamble()}
	{@html renderMarkdown(">L’érudition a pour objectif d'**améliorer ses connaissances magiques**.\n")}
{/snippet}

{#snippet spcialisations()}
	<section>
		<h2 id="spcialisations">Spécialisations</h2>

	{@render mdecine()}
	</section>
{/snippet}

{#snippet mdecine()}
	<section>
		<h3 id="mdecine"><span class="wiki-unresolved">Médecine</span></h3>


	</section>
{/snippet}
