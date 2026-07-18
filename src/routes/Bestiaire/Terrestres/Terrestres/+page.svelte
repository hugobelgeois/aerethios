<script lang="ts">
  import { onDestroy } from "svelte";
  import { tocHeadings } from "$lib/stores";
  import { renderMarkdown } from "$lib/markdownRenderer";
  import LinkPreview from "$lib/LinkPreview.svelte";
  import EmbedBlock from "$lib/EmbedBlock.svelte";

  tocHeadings.set([
      {
          "id": "humanodes",
          "text": "Humanoïdes",
          "level": 1
      },
      {
          "id": "hybrides",
          "text": "Hybrides",
          "level": 1
      },
      {
          "id": "magiques",
          "text": "Magiques",
          "level": 1
      },
      {
          "id": "mythiques",
          "text": "Mythiques",
          "level": 1
      },
      {
          "id": "naturels",
          "text": "Naturels",
          "level": 1
      },
      {
          "id": "plantes",
          "text": "Plantes",
          "level": 1
      }
  ]);

  onDestroy(() => tocHeadings.set([]));
</script>

<svelte:head>
  <title>Terrestres</title>
</svelte:head>

<article class="md-page">
  <header class="md-header">
    <h1>Terrestres</h1>
  </header>
  <div class="markdown-rendered">
		{@render humanodes()}
		{@render hybrides()}
		{@render magiques()}
		{@render mythiques()}
		{@render naturels()}
		{@render plantes()}
  </div>
</article>

<LinkPreview />

{#snippet humanodes()}
	<section>
		<h1 id="humanodes"><a href="/Bestiaire/Terrestres/Humanoides/Humanoides" class="wiki-link internal-link" data-wiki-href="/Bestiaire/Terrestres/Humanoides/Humanoides" data-wiki-fragment="">Humanoïdes</a></h1>


	</section>
{/snippet}

{#snippet hybrides()}
	<section>
		<h1 id="hybrides"><a href="/Bestiaire/Terrestres/Hybrides/Hybrides" class="wiki-link internal-link" data-wiki-href="/Bestiaire/Terrestres/Hybrides/Hybrides" data-wiki-fragment="">Hybrides</a></h1>


	</section>
{/snippet}

{#snippet magiques()}
	<section>
		<h1 id="magiques"><a href="/Bestiaire/Terrestres/Magiques/Magiques" class="wiki-link internal-link" data-wiki-href="/Bestiaire/Terrestres/Magiques/Magiques" data-wiki-fragment="">Magiques</a></h1>


	</section>
{/snippet}

{#snippet mythiques()}
	<section>
		<h1 id="mythiques"><a href="/Bestiaire/Terrestres/Mythiques/Mythiques" class="wiki-link internal-link" data-wiki-href="/Bestiaire/Terrestres/Mythiques/Mythiques" data-wiki-fragment="">Mythiques</a></h1>


	</section>
{/snippet}

{#snippet naturels()}
	<section>
		<h1 id="naturels"><a href="/Bestiaire/Terrestres/Naturels/Naturels" class="wiki-link internal-link" data-wiki-href="/Bestiaire/Terrestres/Naturels/Naturels" data-wiki-fragment="">Naturels</a></h1>


	</section>
{/snippet}

{#snippet plantes()}
	<section>
		<h1 id="plantes"><a href="/Bestiaire/Terrestres/Plantes/Plantes" class="wiki-link internal-link" data-wiki-href="/Bestiaire/Terrestres/Plantes/Plantes" data-wiki-fragment="">Plantes</a></h1>


	</section>
{/snippet}
