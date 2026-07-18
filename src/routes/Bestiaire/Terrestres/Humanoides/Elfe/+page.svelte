<script lang="ts">
  import { onDestroy } from "svelte";
  import { tocHeadings } from "$lib/stores";
  import { applyBase, renderMarkdown } from "$lib/markdownRenderer";
  import LinkPreview from "$lib/LinkPreview.svelte";
  import EmbedBlock from "$lib/EmbedBlock.svelte";

  tocHeadings.set([
      {
          "id": "nature",
          "text": "Nature",
          "level": 2
      },
      {
          "id": "obsession",
          "text": "Obsession",
          "level": 2
      },
      {
          "id": "socit",
          "text": "Société",
          "level": 2
      },
      {
          "id": "rputation",
          "text": "Réputation",
          "level": 2
      },
      {
          "id": "particularits",
          "text": "Particularités",
          "level": 2
      }
  ]);

  onDestroy(() => tocHeadings.set([]));
</script>

<svelte:head>
  <title>Elfe</title>
</svelte:head>

<article class="md-page">
  <header class="md-header">
    <h1>Elfe</h1>
  </header>
  <div class="markdown-rendered">
		{@render preamble()}
		{@render nature()}
		{@render obsession()}
		{@render socit()}
		{@render rputation()}
		{@render particularits()}
  </div>
</article>

<LinkPreview />

{#snippet preamble()}
	{@html renderMarkdown("Les Elfes sont les descendants directs d'une union entre une divinité et un humanoïde.\n\nBien qu'ils possèdent du sang divin, celui-ci ne leur confère qu'un seul véritable don : l'immortalité.\n")}
{/snippet}

{#snippet nature()}
	<section>
		<h2 id="nature">{@html applyBase("Nature")}</h2>
	{@html renderMarkdown("\nLes Elfes ne vieillissent pas et ne peuvent pas se reproduire.\n\nIls ne ressentent que très peu d'émotions et peinent à comprendre les préoccupations des autres peuples, notamment leur obsession pour la survie, la famille ou l'amélioration de leur condition.\n")}

	</section>
{/snippet}

{#snippet obsession()}
	<section>
		<h2 id="obsession">{@html applyBase("Obsession")}</h2>
	{@html renderMarkdown("\nChaque Elfe développe très tôt une obsession unique qui définit l'intégralité de son existence.\n\nCette obsession est fortement influencée par la divinité dont il descend.\n\nToute sa vie sera consacrée à cet unique objectif.\n\nUn Elfe peut ainsi passer plusieurs siècles :\n- à perfectionner son art ;\n- à étudier un sujet ;\n- à mener une guerre ;\n- à poursuivre une découverte.\n\nTout le reste devient secondaire.\n")}

	</section>
{/snippet}

{#snippet socit()}
	<section>
		<h2 id="socit">{@html applyBase("Société")}</h2>
	{@html renderMarkdown("\nLes Elfes ne ressentent aucun besoin naturel de vivre en communauté.\n\nIls fréquentent d'autres individus uniquement lorsque cela sert leur obsession.\n\nMême les communautés elfiques sont rares et généralement temporaires.\n")}

	</section>
{/snippet}

{#snippet rputation()}
	<section>
		<h2 id="rputation">{@html applyBase("Réputation")}</h2>
	{@html renderMarkdown("\nLes autres peuples se méfient souvent des Elfes.\n\nUn Elfe est incapable d'abandonner son obsession, même lorsque cela implique :\n- de trahir un allié ;\n- de provoquer une catastrophe ;\n- de sacrifier des innocents.\n\nLeur parole n'est donc jamais considérée comme totalement fiable.\n")}

	</section>
{/snippet}

{#snippet particularits()}
	<section>
		<h2 id="particularits">{@html applyBase("Particularités")}</h2>
	{@html renderMarkdown("\n- Immortels.\n- Stériles.\n- Faible compréhension émotionnelle.\n- Dévouement absolu à une obsession unique.")}

	</section>
{/snippet}
