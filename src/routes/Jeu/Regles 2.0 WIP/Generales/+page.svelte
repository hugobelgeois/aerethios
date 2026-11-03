<script lang="ts">
  import { onDestroy } from "svelte";
  import { tocHeadings } from "$lib/stores";
  import { applyBase } from "$lib/basePath";
  import LinkPreview from "$lib/LinkPreview.svelte";
  import EmbedBlock from "$lib/EmbedBlock.svelte";

  tocHeadings.set([]);

  onDestroy(() => tocHeadings.set([]));
</script>

<svelte:head>
  <title>{"Générales"}</title>
</svelte:head>

<article class="md-page">
  <header class="md-header">
    <h1>{"Générales"}</h1>
  </header>
  <div class="markdown-rendered">
		{@render preamble()}
  </div>
</article>

<LinkPreview />

{#snippet preamble()}
	{@html "<ul><li>Les règles spécifiques prennent le dessus sur les règles générales</li><li>Un jet de dé doit toujours être supérieur ou égal à la valeur attendue pour réussir</li><li>Les valeurs sont toujours arrondies vers le bas</li><li>Ordre des opérateurs : <code>Addition → Soustraction → Multiplication → Division</code></li><li>Ordre des dés : <code>d4 → d6 → d8 → d10 → d12</code></li><li>Ordre des résistances : <code>Faiblesse → Rien → Résistance → Immunité → Absorption</code></li></ul>"}
{/snippet}
