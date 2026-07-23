<script lang="ts">
  import { onDestroy } from "svelte";
  import { tocHeadings } from "$lib/stores";
  import { applyBase, renderMarkdown } from "$lib/markdownRenderer";
  import LinkPreview from "$lib/LinkPreview.svelte";
  import EmbedBlock from "$lib/EmbedBlock.svelte";

  tocHeadings.set([
      {
          "id": "enchantements",
          "text": "Enchantements",
          "level": 3
      }
  ]);

  onDestroy(() => tocHeadings.set([]));
</script>

<svelte:head>
  <title>Enchantements de Mêlées</title>
</svelte:head>

<article class="md-page">
  <header class="md-header">
    <h1>Enchantements de Mêlées</h1>
  </header>
  <div class="markdown-rendered">
		{@render enchantements()}
  </div>
</article>

<LinkPreview />

{#snippet enchantements()}
	<section>
		<h3 id="enchantements">{@html applyBase("Enchantements")}</h3>
	{@html renderMarkdown("> Ajoute des effets uniques à l'arme si aucune infusion n'a été appliquée dessus.\n\n| Enchantement | Effet                                                                | Prix | Durée de fabrication |\n| ------------ | -------------------------------------------------------------------- | ---: | -------------------: |\n| Critique     | Permet de faire des coups critiques (les dégâts passent outre la DR) | ? po |                 20 j |\n| Vampirique   | Récupère 4HP par coup qui passe outre la DR                          | ? po |                 20 j |\n| Crystallique | Récupère 1MP par coup qui passe outre la DR si la cible est magique  | ? po |                 20 j |\n")}

	</section>
{/snippet}
