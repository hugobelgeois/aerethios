<script lang="ts">
  import { onDestroy } from "svelte";
  import { tocHeadings } from "$lib/stores";
  import { applyBase, renderMarkdown } from "$lib/markdownRenderer";
  import LinkPreview from "$lib/LinkPreview.svelte";
  import EmbedBlock from "$lib/EmbedBlock.svelte";

  tocHeadings.set([
      {
          "id": "enchantements---wip",
          "text": "Enchantements - WIP",
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
		{@render enchantements__Wip()}
  </div>
</article>

<LinkPreview />

{#snippet enchantements__Wip()}
	<section>
		<h3 id="enchantements---wip">{@html applyBase("Enchantements - WIP")}</h3>
	{@html renderMarkdown("> Fait par un <a href=\"%%BASE%%/Jeu/Regles 2.0 WIP/Apprentissages/Erudition#enchanteur---wip\" class=\"wiki-link internal-link\" data-wiki-href=\"/Jeu/Regles 2.0 WIP/Apprentissages/Erudition\" data-wiki-fragment=\"Enchanteur%20-%20WIP\">Enchanteur</a> pour déterminer l'enchantement.\n> Ajoute des effets uniques à l'arme si aucune infusion n'a été appliquée dessus.\n\n| Enchantement | Effet                                                                | Rareté |\n| ------------ | -------------------------------------------------------------------- | ------ |\n| Critique     | Permet de faire des coups critiques (les dégâts passent outre la DR) |        |\n| Vampirique   | Récupère 4HP par coup qui passe outre la DR                          |        |\n| Crystallique | Récupère 1MP par coup qui passe outre la DR si la cible est magique  |        |")}

	</section>
{/snippet}
