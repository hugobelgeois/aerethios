<script lang="ts">
  import { onDestroy } from "svelte";
  import { tocHeadings } from "$lib/stores";
  import { applyBase, renderMarkdown } from "$lib/markdownRenderer";
  import LinkPreview from "$lib/LinkPreview.svelte";
  import EmbedBlock from "$lib/EmbedBlock.svelte";

  tocHeadings.set([
      {
          "id": "ange",
          "text": "Ange",
          "level": 1
      },
      {
          "id": "dmon",
          "text": "Démon",
          "level": 1
      }
  ]);

  onDestroy(() => tocHeadings.set([]));
</script>

<svelte:head>
  <title>Mythiques</title>
</svelte:head>

<article class="md-page">
  <header class="md-header">
    <h1>Mythiques</h1>
  </header>
  <div class="markdown-rendered">
		{@render preamble()}
		{@render ange()}
		{@render dmon()}
  </div>
</article>

<LinkPreview />

{#snippet preamble()}
	{@html renderMarkdown("Définit les entités dont les pouvoirs peuvent côtoyer celui des dieux.\nissus des dieux ou de la Fracture\n")}
{/snippet}

{#snippet ange()}
	<section>
		<h1 id="ange">{@html applyBase("<span class=\"wiki-unresolved\">Ange</span>")}</h1>


	</section>
{/snippet}

{#snippet dmon()}
	<section>
		<h1 id="dmon">{@html applyBase("<span class=\"wiki-unresolved\">Démon</span>")}</h1>


	</section>
{/snippet}
