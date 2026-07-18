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
  <title>Vampire</title>
</svelte:head>

<article class="md-page">
  <header class="md-header">
    <h1>Vampire</h1>
  </header>
  <div class="markdown-rendered">
		{@render preamble()}
  </div>
</article>

<LinkPreview />

{#snippet preamble()}
	{@html renderMarkdown("Maladie du corps (et plus précisément du sang).\n\nLeurs cellules sont fortement ralenties, ce qui fait qu'ils vieillissent et se régénèrent très lentement (une coupure qui se cicatrise en 1 jour peut prendre 1 an pour un vampire).\n\nIls ne peuvent pas produire leur propre sang.\n\nIls sont obligés de récupérer le sang d'autres entités pour se soigner et devenir plus forts.\n\nPour convertir quelqu'un en vampire, le vampire doit mordre cette personne et injecter son sang depuis ses dents (comme du venin de serpent).\nA moins d'être un vampire très puissant avec déjà beaucoup d'acolytes en soutient, cela représente souvent un risque mortel pour le vampire.\n\nIl y a plusieurs grandes classes de vampires;\n- ceux qui sont agressifs et qui veulent consommer le plus de sang de haute qualité afin de devenir plus fort,\n- ceux qui n'ont pas voulu de cette maladie et qui essaie d'être accepté par le reste de la société,\n- ceux qui veulent devenir plus fort sans consommer du sang.\n\nLes vampires en quête de pouvoir vont infecter des gens contre leur gré pour agrandir leur rang.\nGénéralement ces gens n'apprécient pas d'être infecté contre leur gré, donc les vampires les engrossent pour que leur progéniture naisse vampire.\nIls se débarrassent ensuite du parent pour éduquer l'enfant avec leur valeur.\n\nLes vampires malades sont des humains normaux, mais les enfants vampires sont des sortes d'aliens qui se nourrissent de l'essence de leur mère avant de la tuer en naissant.\nIls grandissent plus vite qu'un enfant humain, et peuvent se transformer en vampire comme dans skyrim (la nuit).\nLes vampires ont automatiquement accès à la magie de ténèbres, mais ne peuvent pas se servir de la magie lorsqu'ils sont sous le soleil.")}
{/snippet}
