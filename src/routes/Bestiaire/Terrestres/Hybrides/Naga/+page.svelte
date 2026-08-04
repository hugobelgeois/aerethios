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
  <title>Naga</title>
</svelte:head>

<article class="md-page">
  <header class="md-header">
    <h1>Naga</h1>
  </header>
  <div class="markdown-rendered">
		{@render preamble()}
  </div>
</article>

<LinkPreview />

{#snippet preamble()}
	{@html renderMarkdown("---\r\ntags:\r\n  - Bestiaire\r\n---\r\nNe maîtrise qu'une seule magie, qu'ils peuvent imprégner dans un artefact d'invocation d'élémentaire\r\n\r\nGrandit infiniment, les plus grands ont été obligé de se retirer dans les océans\r\n\r\nAprès 100 ans, la partie humaine de leur corps devient plus massive qu'un humain normal\r\n\r\nDe ce fait, ils font peur et sont souvent chassés, ce qui les force à vivre en petits groupes souvent en mouvement\r\n\r\nIls vivaient dans une communauté avant la Grande Fracture mais la magie a rendu les hommes plus forts et ils ont été chassés à partir de ce moment là\r\n\r\n| <img src=\"%%BASE%%/naga-water.png\" alt=\"naga-water.png\" class=\"wiki-image\" />   | <img src=\"%%BASE%%/naga-sand.png\" alt=\"naga-sand.png\" class=\"wiki-image\" />  |\r\n| --------------------- | ------------------- |\r\n| <img src=\"%%BASE%%/naga-warrior.png\" alt=\"naga-warrior.png\" class=\"wiki-image\" /> | <img src=\"%%BASE%%/naga-adult.png\" alt=\"naga-adult.png\" class=\"wiki-image\" /> |")}
{/snippet}
