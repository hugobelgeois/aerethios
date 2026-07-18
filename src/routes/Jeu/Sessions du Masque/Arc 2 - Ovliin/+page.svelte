<script lang="ts">
  import { onDestroy } from "svelte";
  import { tocHeadings } from "$lib/stores";
  import { renderMarkdown } from "$lib/markdownRenderer";
  import LinkPreview from "$lib/LinkPreview.svelte";
  import EmbedBlock from "$lib/EmbedBlock.svelte";

  tocHeadings.set([
      {
          "id": "270425",
          "text": "$$27.04.25$$",
          "level": 6
      },
      {
          "id": "180525",
          "text": "$$18.05.25$$",
          "level": 6
      },
      {
          "id": "210525",
          "text": "$$21.05.25$$",
          "level": 6
      },
      {
          "id": "300525",
          "text": "$$30.05.25$$",
          "level": 6
      },
      {
          "id": "130625",
          "text": "$$13.06.25$$",
          "level": 6
      },
      {
          "id": "270625",
          "text": "$$27.06.25$$",
          "level": 6
      }
  ]);

  onDestroy(() => tocHeadings.set([]));
</script>

<svelte:head>
  <title>Arc 2 - Ovliin</title>
</svelte:head>

<article class="md-page">
  <header class="md-header">
    <h1>Arc 2 - Ovliin</h1>
  </header>
  <div class="markdown-rendered">
		{@render preamble()}
		{@render _70425()}
		{@render _80525()}
		{@render _10525()}
		{@render _00525()}
		{@render _30625()}
		{@render _70625()}
  </div>
</article>

<LinkPreview />

{#snippet preamble()}
	{@html renderMarkdown("_Extrait du carnet de voyage de Léoric, Arvens d’Ovliin_\n\n---")}
{/snippet}

{#snippet _70425()}
	<section>
		<h6 id="270425">$$27.04.25$$</h6>


	</section>
{/snippet}

{#snippet _80525()}
	<section>
		<h6 id="180525">$$18.05.25$$</h6>


	</section>
{/snippet}

{#snippet _10525()}
	<section>
		<h6 id="210525">$$21.05.25$$</h6>


	</section>
{/snippet}

{#snippet _00525()}
	<section>
		<h6 id="300525">$$30.05.25$$</h6>


	</section>
{/snippet}

{#snippet _30625()}
	<section>
		<h6 id="130625">$$13.06.25$$</h6>


	</section>
{/snippet}

{#snippet _70625()}
	<section>
		<h6 id="270625">$$27.06.25$$</h6>


	</section>
{/snippet}
