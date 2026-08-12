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
  <title>Affinités aux Dégâts</title>
</svelte:head>

<article class="md-page">
  <header class="md-header">
    <h1>Affinités aux Dégâts</h1>
  </header>
  <div class="markdown-rendered">
		{@render preamble()}
  </div>
</article>

<LinkPreview />

{#snippet preamble()}
	{@html renderMarkdown("Une entité encaisse différemment les attaques, soient-elles magiques ou physiques, selon leur type.\n\n- Vulnérable : Double les dégâts subits\n- Résistant : Réduit les dégâts de moitié\n- Immunisé : Ne prend aucun dégât\n- Absorbant : Transforme les dégâts subits en HP récupérés")}
{/snippet}
