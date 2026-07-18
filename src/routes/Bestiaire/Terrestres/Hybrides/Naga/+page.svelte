<script lang="ts">
  import { onDestroy } from "svelte";
  import { tocHeadings } from "$lib/stores";
  import { renderMarkdown } from "$lib/markdownRenderer";
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
	{@html renderMarkdown("Ne maîtrise qu'une seule magie, qu'ils peuvent imprégner dans un artefact d'invocation d'élémentaire\n\nGrandit infiniment, les plus grands ont été obligé de se retirer dans les océans\n\nAprès 100 ans, la partie humaine de leur corps devient plus massive qu'un humain normal\n\nDe ce fait, ils font peur et sont souvent chassés, ce qui les force à vivre en petits groupes souvent en mouvement\n\nIls vivaient dans une communauté avant la Grande Fracture mais la magie a rendu les hommes plus forts et ils ont été chassés à partir de ce moment là\n\n| <img src=\"%%BASE%%/Naga%20Water.png\" alt=\"Naga Water.png\" class=\"wiki-image\" />   | <img src=\"%%BASE%%/Naga%20Sand.png\" alt=\"Naga Sand.png\" class=\"wiki-image\" />  |\n| --------------------- | ------------------- |\n| <img src=\"%%BASE%%/Naga%20Warrior.png\" alt=\"Naga Warrior.png\" class=\"wiki-image\" /> | <img src=\"%%BASE%%/Naga%20Adult.png\" alt=\"Naga Adult.png\" class=\"wiki-image\" /> |")}
{/snippet}
