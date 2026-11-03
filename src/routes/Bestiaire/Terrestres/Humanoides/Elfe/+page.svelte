<script lang="ts">
  import { onDestroy } from "svelte";
  import { tocHeadings } from "$lib/stores";
  import { applyBase } from "$lib/basePath";
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
  <title>{"Elfe"}</title>
</svelte:head>

<article class="md-page">
  <header class="md-header">
    <h1>{"Elfe"}</h1>
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
	{@html "<p>Les Elfes sont les descendants directs d'une union entre une divinité et un humanoïde.</p>\n<p>Bien qu'ils possèdent du sang divin, celui-ci ne leur confère qu'un seul véritable don : l'immortalité.</p>"}
{/snippet}

{#snippet nature()}
	<section>
		<h2 id="nature">{@html "Nature"}</h2>
	{@html "<p>Les Elfes ne vieillissent pas et ne peuvent pas se reproduire.</p>\n<p>Ils ne ressentent que très peu d'émotions et peinent à comprendre les préoccupations des autres peuples, notamment leur obsession pour la survie, la famille ou l'amélioration de leur condition.</p>"}

	</section>
{/snippet}

{#snippet obsession()}
	<section>
		<h2 id="obsession">{@html "Obsession"}</h2>
	{@html "<p>Chaque Elfe développe très tôt une obsession unique qui définit l'intégralité de son existence.</p>\n<p>Cette obsession est fortement influencée par la divinité dont il descend.</p>\n<p>Toute sa vie sera consacrée à cet unique objectif.</p>\n<p>Un Elfe peut ainsi passer plusieurs siècles :</p>\n<ul><li>à perfectionner son art ;</li><li>à étudier un sujet ;</li><li>à mener une guerre ;</li><li>à poursuivre une découverte.</li></ul>\n<p>Tout le reste devient secondaire.</p>"}

	</section>
{/snippet}

{#snippet socit()}
	<section>
		<h2 id="socit">{@html "Société"}</h2>
	{@html "<p>Les Elfes ne ressentent aucun besoin naturel de vivre en communauté.</p>\n<p>Ils fréquentent d'autres individus uniquement lorsque cela sert leur obsession.</p>\n<p>Même les communautés elfiques sont rares et généralement temporaires.</p>"}

	</section>
{/snippet}

{#snippet rputation()}
	<section>
		<h2 id="rputation">{@html "Réputation"}</h2>
	{@html "<p>Les autres peuples se méfient souvent des Elfes.</p>\n<p>Un Elfe est incapable d'abandonner son obsession, même lorsque cela implique :</p>\n<ul><li>de trahir un allié ;</li><li>de provoquer une catastrophe ;</li><li>de sacrifier des innocents.</li></ul>\n<p>Leur parole n'est donc jamais considérée comme totalement fiable.</p>"}

	</section>
{/snippet}

{#snippet particularits()}
	<section>
		<h2 id="particularits">{@html "Particularités"}</h2>
	{@html "<ul><li>Immortels.</li><li>Stériles.</li><li>Faible compréhension émotionnelle.</li><li>Dévouement absolu à une obsession unique.</li></ul>"}

	</section>
{/snippet}
