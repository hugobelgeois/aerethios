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
  <title>Enchantements à Distance</title>
</svelte:head>

<article class="md-page">
  <header class="md-header">
    <h1>Enchantements à Distance</h1>
  </header>
  <div class="markdown-rendered">
		{@render enchantements__Wip()}
  </div>
</article>

<LinkPreview />

{#snippet enchantements__Wip()}
	<section>
		<h3 id="enchantements---wip">{@html applyBase("Enchantements - WIP")}</h3>
	{@html renderMarkdown("> Fait par un <a href=\"%%BASE%%/Jeu/Regles 2.0 WIP/Apprentissages/Erudition#enchanteur---wip\" class=\"wiki-link internal-link\" data-wiki-href=\"/Jeu/Regles 2.0 WIP/Apprentissages/Erudition\" data-wiki-fragment=\"Enchanteur%20-%20WIP\">Enchanteur</a>.\n> Ajoute des effets uniques à l'arme.\n> S'applique uniquement aux Arcs et Arbalètes.\n\n| Enchantement | Effet                                                                                                                               | Rareté |\n| ------------ | ----------------------------------------------------------------------------------------------------------------------------------- | ------ |\n| Double coup  | Permet de préparer une deuxième munition avant le combat<br>(on ne peut toujours tirer qu'1 munition par action)                    |        |\n| Ellipse      | Réduit le DC de 2 lorsque la cible est partiellement couverte<br>Si elle est complètement couverte, la DC additionnelle devient +10 |        |\n")}

	</section>
{/snippet}
