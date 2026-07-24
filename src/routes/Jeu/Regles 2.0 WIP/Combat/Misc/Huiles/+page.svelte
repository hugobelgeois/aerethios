<script lang="ts">
  import { onDestroy } from "svelte";
  import { tocHeadings } from "$lib/stores";
  import { applyBase, renderMarkdown } from "$lib/markdownRenderer";
  import LinkPreview from "$lib/LinkPreview.svelte";
  import EmbedBlock from "$lib/EmbedBlock.svelte";

  tocHeadings.set([
      {
          "id": "huiles---wip",
          "text": "Huiles - WIP",
          "level": 3
      }
  ]);

  onDestroy(() => tocHeadings.set([]));
</script>

<svelte:head>
  <title>Huiles</title>
</svelte:head>

<article class="md-page">
  <header class="md-header">
    <h1>Huiles</h1>
  </header>
  <div class="markdown-rendered">
		{@render huiles__Wip()}
  </div>
</article>

<LinkPreview />

{#snippet huiles__Wip()}
	<section>
		<h3 id="huiles---wip">{@html applyBase("Huiles - WIP")}</h3>
	{@html renderMarkdown("> Fait par un <a href=\"%%BASE%%/Jeu/Regles 2.0 WIP/Apprentissages/Alchimie - New#huiles\" class=\"wiki-link internal-link\" data-wiki-href=\"/Jeu/Regles 2.0 WIP/Apprentissages/Alchimie - New\" data-wiki-fragment=\"Huiles\">Potionniste</a> pour déterminer les dégâts.\n> Ajoute temporairement l'effet d'1 huile à votre arme (dure 1 combat).\n> Les huiles ne s'appliquent que sur les armes Tranchantes ainsi que les Arcs et Arbalètes.\n\n| Afflictions    | Effet                 | Soins           |\n| -------------- | --------------------- | --------------- |\n| Saignement     | DMG par Tour          | Gel cicatrisant |\n| Hémorragie     | DMG/2 par Action      | Gel cicatrisant |\n| Poison         | DMG par Tour          | Antipoison      |\n| Toxique        | DMG/2 par Action      | Antipoison      |\n| Nausée         | -2 à son dé d'attaque | -               |\n| Discombobulate | Dé d'attaque / 2      | Repos Court     |\n\nLes DMG sont arrondis vers le bas.")}

	</section>
{/snippet}
