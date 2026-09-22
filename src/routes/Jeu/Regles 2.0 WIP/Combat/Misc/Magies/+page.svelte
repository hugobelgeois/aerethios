<script lang="ts">
  import { onDestroy } from "svelte";
  import { tocHeadings } from "$lib/stores";
  import { applyBase, renderMarkdown } from "$lib/markdownRenderer";
  import LinkPreview from "$lib/LinkPreview.svelte";
  import EmbedBlock from "$lib/EmbedBlock.svelte";

  tocHeadings.set([
      {
          "id": "magies",
          "text": "Magies",
          "level": 3
      }
  ]);

  onDestroy(() => tocHeadings.set([]));
</script>

<svelte:head>
  <title>Magies</title>
</svelte:head>

<article class="md-page">
  <header class="md-header">
    <h1>Magies</h1>
  </header>
  <div class="markdown-rendered">
		{@render magies()}
  </div>
</article>

<LinkPreview />

{#snippet magies()}
	<section>
		<h3 id="magies">{@html applyBase("Magies")}</h3>
	{@html renderMarkdown("> Permet d'imprégner l'arme de sa magie (coûte 1 crystal).\n\nAjoute temporairement le type d'une magie aux types de dégâts de l'arme (dure 1 combat et n'est pas cumulable)")}

	</section>
{/snippet}
