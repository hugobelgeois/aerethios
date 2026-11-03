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
          "id": "socit",
          "text": "Société",
          "level": 2
      },
      {
          "id": "tribus",
          "text": "Tribus",
          "level": 2
      },
      {
          "id": "influence-animale",
          "text": "Influence animale",
          "level": 2
      },
      {
          "id": "religion",
          "text": "Religion",
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
  <title>{"Orc"}</title>
</svelte:head>

<article class="md-page">
  <header class="md-header">
    <h1>{"Orc"}</h1>
  </header>
  <div class="markdown-rendered">
		{@render preamble()}
		{@render nature()}
		{@render socit()}
		{@render tribus()}
		{@render influenceAnimale()}
		{@render religion()}
		{@render particularits()}
  </div>
</article>

<LinkPreview />

{#snippet preamble()}
	{@html "<p>Les Orcs naissent de l'union entre un Humain et un animal.</p>\n<p>Semblables aux humains, ils sont cependant généralement plus grands et plus musclés que ceux-ci.<br>\nIls conservent cependant certains traits de leur parent animal, et la couleur de leur peau tire généralement sur le vert, le brun ou le gris.</p>"}
{/snippet}

{#snippet nature()}
	<section>
		<h2 id="nature">{@html "Nature"}</h2>
	{@html "<p>Les Orcs sont guidés par un instinct particulier qui les pousse naturellement vers les Humains.</p>\n<p>Ils perçoivent inconsciemment chez eux une forme d'autorité naturelle, souvent décrite comme une aura de domination.</p>\n<p>Cette fascination est purement biologique et ne dépend d'aucune religion.</p>"}

	</section>
{/snippet}

{#snippet socit()}
	<section>
		<h2 id="socit">{@html "Société"}</h2>
	{@html "<p>Les Orcs respectent profondément les Humains.</p>\n<p>Ils ne leur obéissent pas systématiquement, mais cherchent généralement leur approbation et évitent de leur nuire.</p>\n<p>Un Orc n'attaquera presque jamais un Humain sans provocation préalable.</p>"}

	</section>
{/snippet}

{#snippet tribus()}
	<section>
		<h2 id="tribus">{@html "Tribus"}</h2>
	{@html "<p>Lorsqu'aucun Humain n'est présent, les Orcs se regroupent en tribus composées d'individus partageant le même héritage animal.</p>\n<p>Les relations entre tribus sont souvent marquées par la compétition, l'agressivité et les conflits territoriaux.</p>"}

	</section>
{/snippet}

{#snippet influenceAnimale()}
	<section>
		<h2 id="influence-animale">{@html "Influence animale"}</h2>
	{@html "<p>L'animal dont l'Orc descend influence fortement :</p>\n<ul><li>son tempérament ;</li><li>ses instincts ;</li><li>ses aptitudes physiques.</li></ul>\n<p>Quelques exemples :</p>\n<ul><li>Orc-ours : force et endurance.</li><li>Orc-loup : esprit de groupe et coordination.</li><li>Orc-sanglier : agressivité et résistance.</li></ul>"}

	</section>
{/snippet}

{#snippet religion()}
	<section>
		<h2 id="religion">{@html "Religion"}</h2>
	{@html "<p>Les Orcs accordent peu d'importance aux dieux.</p>\n<p>Pour beaucoup d'entre eux, les Humains occupent déjà une place suffisamment proche du divin pour rendre le reste secondaire.</p>"}

	</section>
{/snippet}

{#snippet particularits()}
	<section>
		<h2 id="particularits">{@html "Particularités"}</h2>
	{@html "<ul><li>Hybrides entre humains et animaux.</li><li>Respect instinctif envers l'humanité.</li><li>Organisation tribale.</li><li>Capacités influencées par leur héritage animal.</li></ul>"}

	</section>
{/snippet}
