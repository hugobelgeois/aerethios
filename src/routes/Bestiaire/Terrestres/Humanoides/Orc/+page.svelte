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
  <title>Orc</title>
</svelte:head>

<article class="md-page">
  <header class="md-header">
    <h1>Orc</h1>
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
	{@html renderMarkdown("Les Orcs naissent de l'union entre un Humain et un animal.\n\nSemblables aux humains, ils sont cependant généralement plus grands et plus musclés que ceux-ci.\nIls conservent cependant certains traits de leur parent animal, et la couleur de leur peau tire généralement sur le vert, le brun ou le gris.\n")}
{/snippet}

{#snippet nature()}
	<section>
		<h2 id="nature">{@html applyBase("Nature")}</h2>
	{@html renderMarkdown("\nLes Orcs sont guidés par un instinct particulier qui les pousse naturellement vers les Humains.\n\nIls perçoivent inconsciemment chez eux une forme d'autorité naturelle, souvent décrite comme une aura de domination.\n\nCette fascination est purement biologique et ne dépend d'aucune religion.\n")}

	</section>
{/snippet}

{#snippet socit()}
	<section>
		<h2 id="socit">{@html applyBase("Société")}</h2>
	{@html renderMarkdown("\nLes Orcs respectent profondément les Humains.\n\nIls ne leur obéissent pas systématiquement, mais cherchent généralement leur approbation et évitent de leur nuire.\n\nUn Orc n'attaquera presque jamais un Humain sans provocation préalable.\n")}

	</section>
{/snippet}

{#snippet tribus()}
	<section>
		<h2 id="tribus">{@html applyBase("Tribus")}</h2>
	{@html renderMarkdown("\nLorsqu'aucun Humain n'est présent, les Orcs se regroupent en tribus composées d'individus partageant le même héritage animal.\n\nLes relations entre tribus sont souvent marquées par la compétition, l'agressivité et les conflits territoriaux.\n")}

	</section>
{/snippet}

{#snippet influenceAnimale()}
	<section>
		<h2 id="influence-animale">{@html applyBase("Influence animale")}</h2>
	{@html renderMarkdown("\nL'animal dont l'Orc descend influence fortement :\n- son tempérament ;\n- ses instincts ;\n- ses aptitudes physiques.\n\nQuelques exemples :\n- Orc-ours : force et endurance.\n- Orc-loup : esprit de groupe et coordination.\n- Orc-sanglier : agressivité et résistance.\n")}

	</section>
{/snippet}

{#snippet religion()}
	<section>
		<h2 id="religion">{@html applyBase("Religion")}</h2>
	{@html renderMarkdown("\nLes Orcs accordent peu d'importance aux dieux.\n\nPour beaucoup d'entre eux, les Humains occupent déjà une place suffisamment proche du divin pour rendre le reste secondaire.\n")}

	</section>
{/snippet}

{#snippet particularits()}
	<section>
		<h2 id="particularits">{@html applyBase("Particularités")}</h2>
	{@html renderMarkdown("\n- Hybrides entre humains et animaux.\n- Respect instinctif envers l'humanité.\n- Organisation tribale.\n- Capacités influencées par leur héritage animal.")}

	</section>
{/snippet}
