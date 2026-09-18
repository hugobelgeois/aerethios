<script lang="ts">
  import { onDestroy } from "svelte";
  import { tocHeadings } from "$lib/stores";
  import { applyBase, renderMarkdown } from "$lib/markdownRenderer";
  import LinkPreview from "$lib/LinkPreview.svelte";
  import EmbedBlock from "$lib/EmbedBlock.svelte";

  tocHeadings.set([
      {
          "id": "dfense",
          "text": "Défense",
          "level": 3
      }
  ]);

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
		{@render dfense()}
  </div>
</article>

<LinkPreview />

{#snippet dfense()}
	<section>
		<h3 id="dfense">{@html applyBase("Défense")}</h3>
	{@html renderMarkdown("> Amplifie ou réduit les dégâts selon le type d'attaque.\n\n| Défense    | Effet                                        |\n| ---------- | -------------------------------------------- |\n| Vulnérable | Double les dégâts subits                     |\n| Résistant  | Réduit les dégâts de moitié                  |\n| Immunisé   | Ne prend aucun dégâts                        |\n| Absorbant  | Transforme les dégâts subits en HP récupérés |")}

	</section>
{/snippet}
