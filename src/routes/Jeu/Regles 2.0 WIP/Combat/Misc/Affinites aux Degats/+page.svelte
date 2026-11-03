<script lang="ts">
  import { onDestroy } from "svelte";
  import { tocHeadings } from "$lib/stores";
  import { applyBase } from "$lib/basePath";
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
  <title>{"Affinités aux Dégâts"}</title>
</svelte:head>

<article class="md-page">
  <header class="md-header">
    <h1>{"Affinités aux Dégâts"}</h1>
  </header>
  <div class="markdown-rendered">
		{@render dfense()}
  </div>
</article>

<LinkPreview />

{#snippet dfense()}
	<section>
		<h3 id="dfense">{@html "Défense"}</h3>
	{@html "<blockquote>Amplifie ou réduit les dégâts selon le type d'attaque.</blockquote>\n<div class=\"table-scroll\"><table><thead><tr><th>Défense</th><th>Effet</th></tr></thead><tbody><tr><td>Vulnérable</td><td>Double les dégâts subits</td></tr><tr><td>Résistant</td><td>Réduit les dégâts de moitié</td></tr><tr><td>Immunisé</td><td>Ne prend aucun dégâts</td></tr><tr><td>Absorbant</td><td>Transforme les dégâts subits en HP récupérés</td></tr></tbody></table></div>"}

	</section>
{/snippet}
