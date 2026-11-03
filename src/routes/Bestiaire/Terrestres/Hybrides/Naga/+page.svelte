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
  <title>{"Naga"}</title>
</svelte:head>

<article class="md-page">
  <header class="md-header">
    <h1>{"Naga"}</h1>
  </header>
  <div class="markdown-rendered">
		{@render preamble()}
  </div>
</article>

<LinkPreview />

{#snippet preamble()}
	{@html applyBase("<p>Ne maîtrise qu'une seule magie, qu'ils peuvent imprégner dans un artefact d'invocation d'élémentaire</p>\n<p>Grandit infiniment, les plus grands ont été obligé de se retirer dans les océans</p>\n<p>Après 100 ans, la partie humaine de leur corps devient plus massive qu'un humain normal</p>\n<p>De ce fait, ils font peur et sont souvent chassés, ce qui les force à vivre en petits groupes souvent en mouvement</p>\n<p>Ils vivaient dans une communauté avant la Grande Fracture mais la magie a rendu les hommes plus forts et ils ont été chassés à partir de ce moment là</p>\n<div class=\"table-scroll\"><table><thead><tr><th><img src=\"%%BASE%%/naga-water.png\" alt=\"naga-water.png\" class=\"wiki-image\" /></th><th><img src=\"%%BASE%%/naga-sand.png\" alt=\"naga-sand.png\" class=\"wiki-image\" /></th></tr></thead><tbody><tr><td><img src=\"%%BASE%%/naga-warrior.png\" alt=\"naga-warrior.png\" class=\"wiki-image\" /></td><td><img src=\"%%BASE%%/naga-adult.png\" alt=\"naga-adult.png\" class=\"wiki-image\" /></td></tr></tbody></table></div>")}
{/snippet}
