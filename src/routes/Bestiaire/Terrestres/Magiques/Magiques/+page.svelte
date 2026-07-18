<script lang="ts">
  import { onDestroy } from "svelte";
  import { tocHeadings } from "$lib/stores";
  import { renderMarkdown } from "$lib/markdownRenderer";
  import LinkPreview from "$lib/LinkPreview.svelte";
  import EmbedBlock from "$lib/EmbedBlock.svelte";

  tocHeadings.set([
      {
          "id": "invocation",
          "text": "Invocation",
          "level": 1
      },
      {
          "id": "elmentaire",
          "text": "Elémentaire",
          "level": 1
      },
      {
          "id": "mimics",
          "text": "Mimics",
          "level": 1
      },
      {
          "id": "draconide",
          "text": "Draconide",
          "level": 1
      }
  ]);

  onDestroy(() => tocHeadings.set([]));
</script>

<svelte:head>
  <title>Magiques</title>
</svelte:head>

<article class="md-page">
  <header class="md-header">
    <h1>Magiques</h1>
  </header>
  <div class="markdown-rendered">
		{@render invocation()}
		{@render elmentaire()}
		{@render mimics()}
		{@render draconide()}
  </div>
</article>

<LinkPreview />

{#snippet invocation()}
	<section>
		<h1 id="invocation"><span class="wiki-unresolved">Invocation</span></h1>


	</section>
{/snippet}

{#snippet elmentaire()}
	<section>
		<h1 id="elmentaire"><span class="wiki-unresolved">Elémentaire</span></h1>


	</section>
{/snippet}

{#snippet mimics()}
	<section>
		<h1 id="mimics"><span class="wiki-unresolved">Mimics</span></h1>


	</section>
{/snippet}

{#snippet draconide()}
	<section>
		<h1 id="draconide"><span class="wiki-unresolved">Draconide</span></h1>


	</section>
{/snippet}
