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
  <title>Enchantements à Distance</title>
</svelte:head>

<article class="md-page">
  <header class="md-header">
    <h1>Enchantements à Distance</h1>
  </header>
  <div class="markdown-rendered">
		{@render enchantements()}
  </div>
</article>

<LinkPreview />

{#snippet enchantements()}
	<section>
		<h3 id="enchantements">{@html applyBase("Enchantements")}</h3>
	{@html renderMarkdown("> Ajoute des effets uniques à l'arme.\n> S'applique uniquement aux Arcs et Arbalètes.\n\n| Enchantement | Effet                                                                                                                               | Prix | Durée de fabrication |\n| ------------ | ----------------------------------------------------------------------------------------------------------------------------------- | ---: | -------------------: |\n| Double coup  | Permet de préparer une deuxième munition avant le combat<br>(on ne peut toujours tirer qu'1 munition par action)                    | ? po |                 20 j |\n| Ellipse      | Réduit le DC de 2 lorsque la cible est partiellement couverte<br>Si elle est complètement couverte, la DC additionnelle devient +10 | ? po |                 20 j |\n")}

	</section>
{/snippet}
