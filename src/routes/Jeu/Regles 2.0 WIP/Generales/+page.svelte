<script lang="ts">
  import { onDestroy } from "svelte";
  import { tocHeadings } from "$lib/stores";
  import { applyBase, renderMarkdown } from "$lib/markdownRenderer";
  import LinkPreview from "$lib/LinkPreview.svelte";
  import EmbedBlock from "$lib/EmbedBlock.svelte";

  tocHeadings.set([]);

  onDestroy(() => tocHeadings.set([]));
</script>

<svelte:head>
  <title>Générales</title>
</svelte:head>

<article class="md-page">
  <header class="md-header">
    <h1>Générales</h1>
  </header>
  <div class="markdown-rendered">
		{@render preamble()}
  </div>
</article>

<LinkPreview />

{#snippet preamble()}
	{@html renderMarkdown("- Les règles spécifiques prennent le dessus sur les règles générales\n- Un jet de dé doit toujours être supérieur ou égal à la valeur attendue pour réussir\n- Les valeurs sont toujours arrondies vers le bas\n- Ordre des opérateurs : `Addition -> Soustraction -> Multiplication -> Division`\n")}
{/snippet}
